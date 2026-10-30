"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefs } from "@/components/prefs/Prefs";
import type { DifficultyKey, RoleKey } from "@/content/i18n/types";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";

const DIFFICULTY_CONFIG: Record<DifficultyKey, { time: number; points: number }> = {
  easy: { time: 45, points: 8 },
  medium: { time: 35, points: 12 },
  hard: { time: 25, points: 18 },
};

const ROLES: RoleKey[] = ["data_analyst", "ml_engineer", "product_analytics"];

const randomIndex = (length: number) => Math.floor(Math.random() * length);
const DIFFICULTIES: DifficultyKey[] = ["easy", "medium", "hard"];

/**
 * "Interview Arcade": Tatyana's mini-game (role/difficulty, countdown, XP +
 * streak scoring, hints). The clock only starts when the visitor starts a
 * round, and accessibility mode removes the time limit.
 */
export default function InterviewArcade() {
  const { dict: t, a11y } = usePrefs();
  const a = t.arcade;
  const [role, setRole] = useState<RoleKey>("data_analyst");
  const [difficulty, setDifficulty] = useState<DifficultyKey>("medium");
  // Index into the prompts, so the question follows the language. Index 0 on
  // the server and first render; randomised after mount.
  const [promptIndex, setPromptIndex] = useState(0);
  const [hintIndex, setHintIndex] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DIFFICULTY_CONFIG.medium.time);
  const [feedback, setFeedback] = useState(a.start);
  const [burstKey, setBurstKey] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef(timeLeft);
  const prompt = a.data[role][promptIndex] ?? a.data[role][0];

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);


  function runCountdown() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (a11y) return; // no time pressure in accessibility mode
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setStreak(0);
          setFeedback(a.timeUp);
          return 0;
        }
        return next;
      });
    }, 1000);
  }

  function startTimer(diff: DifficultyKey) {
    setTimeLeft(DIFFICULTY_CONFIG[diff].time);
    runCountdown();
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- randomise the prompt client-side only, after the SSR-safe first render.
    setPromptIndex(randomIndex(2));
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function loadNewRound(nextRole: RoleKey, nextDifficulty: DifficultyKey, message: string) {
    setPromptIndex(randomIndex(a.data[nextRole].length));
    setHintIndex(0);
    setFeedback(message);
    setBurstKey((k) => k + 1);
    startTimer(nextDifficulty);
  }

  function handleRoleClick(nextRole: RoleKey) {
    setRole(nextRole);
    loadNewRound(nextRole, difficulty, a.newRound);
  }

  function handleDifficultyClick(nextDifficulty: DifficultyKey) {
    setDifficulty(nextDifficulty);
    loadNewRound(role, nextDifficulty, a.difficultySet(nextDifficulty, a.difficulties[nextDifficulty]));
  }

  function handleHint() {
    if (!prompt.hints.length) {
      setFeedback(a.noHints);
      return;
    }
    const hint = prompt.hints[Math.min(hintIndex, prompt.hints.length - 1)];
    setHintIndex((i) => i + 1);
    setFeedback(a.hint(hint));
  }

  function handleNailedIt() {
    const basePoints = DIFFICULTY_CONFIG[difficulty].points;
    const speedBonus = a11y ? 0 : Math.max(0, Math.floor(timeLeftRef.current / 5));
    const streakBonus = streak * 2;
    const earned = basePoints + speedBonus + streakBonus;
    setXp((x) => x + earned);
    setStreak((s) => s + 1);
    setFeedback(a.strongRun(earned, basePoints, speedBonus, streakBonus));
    setBurstKey((k) => k + 1);
  }

  function handleSkip() {
    setStreak(0);
    loadNewRound(role, difficulty, a.skipped);
  }

  return (
    <section id="simulator" className="section" aria-labelledby="arcade-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead index="08" title={t.sections.arcade} id="arcade-title" />
        <Reveal className="arcade">
          <p className="arcade__intro">{t.sections.arcadeIntro}</p>
          <div className="sim-meta">
            <div className="sim-stat">
              {a.xp}
              <strong key={`xp-${burstKey}`} className="xp-burst">
                {xp}
              </strong>
            </div>
            <div className="sim-stat">
              {a.streak}
              <strong key={`streak-${burstKey}`} className="xp-burst">
                {streak}
              </strong>
            </div>
            <div className="sim-stat">
              {a.timer}
              <strong>{a11y ? t.ui.noTimeLimit : `${timeLeft}s`}</strong>
            </div>
          </div>
          <div className="role-buttons">
            {ROLES.map((value) => (
              <button key={value} aria-pressed={role === value} className={`role-btn${role === value ? " active" : ""}`} onClick={() => handleRoleClick(value)}>
                {a.roles[value]}
              </button>
            ))}
          </div>
          <div className="difficulty-buttons">
            {DIFFICULTIES.map((value) => (
              <button
                key={value}
                aria-pressed={difficulty === value}
                className={`difficulty-btn${difficulty === value ? " active" : ""}`}
                onClick={() => handleDifficultyClick(value)}
              >
                {a.difficulties[value]}
              </button>
            ))}
          </div>
          <div className="sim-output">
            <h4>{a.question}</h4>
            <p>{prompt.question}</p>
            <h4>{a.rubric}</h4>
            <ul>
              {prompt.rubric.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="sim-actions">
            <button className="sim-action-btn" onClick={handleHint}>
              {a.needHint}
            </button>
            <button className="sim-action-btn" onClick={handleNailedIt}>
              {a.nailedIt}
            </button>
            <button className="sim-action-btn" onClick={handleSkip}>
              {a.skip}
            </button>
            <button className="btn btn--ink" onClick={() => loadNewRound(role, difficulty, a.newRound)}>
              {a.newChallenge}
            </button>
          </div>
          <div className="sim-feedback" aria-live="polite">
            {feedback}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
