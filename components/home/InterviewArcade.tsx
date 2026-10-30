"use client";

import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/content/site";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/motion/Reveal";

interface Prompt {
  question: string;
  rubric: string[];
  hints: string[];
}

type RoleKey = "data_analyst" | "ml_engineer" | "product_analytics";
type DifficultyKey = "easy" | "medium" | "hard";

const ROLE_DATA: Record<RoleKey, Prompt[]> = {
  data_analyst: [
    {
      question:
        "A churn dashboard spikes for one cohort. What is your first 30-minute investigation plan?",
      rubric: [
        "Confirms metric definition and data freshness.",
        "Splits issue by segment and funnel stage.",
        "Proposes one concrete next action for stakeholders.",
      ],
      hints: [
        "Start with data reliability checks.",
        "Compare against prior weekly baseline.",
        "Isolate by acquisition channel first.",
      ],
    },
    {
      question: "Design a KPI view a non-technical manager can use in 60 seconds.",
      rubric: [
        "Chooses a clear primary KPI and supporting trend.",
        "Uses thresholds or alerts for fast decisions.",
        "Adds one recommended action based on the signal.",
      ],
      hints: ["Clarity beats dashboard complexity.", "Use plain language labels.", "One KPI, one decision."],
    },
  ],
  ml_engineer: [
    {
      question: "How would you evaluate a RAG interview coach beyond model accuracy?",
      rubric: [
        "Separates retrieval quality from generation quality.",
        "Defines groundedness and hallucination checks.",
        "Includes human review loop and failure taxonomy.",
      ],
      hints: [
        "Measure retrieval and response separately.",
        "Use a rubric, not just one score.",
        "Track failure types over time.",
      ],
    },
    {
      question: "Your RAG latency regresses after adding features. What do you optimize first?",
      rubric: [
        "Profiles the pipeline to find true bottleneck.",
        "Balances caching and retrieval depth tradeoffs.",
        "Protects response quality with regression checks.",
      ],
      hints: [
        "Profile before optimizing.",
        "Check embedding/retrieval path first.",
        "Guard quality while reducing latency.",
      ],
    },
  ],
  product_analytics: [
    {
      question:
        "A feature increases engagement but lowers conversion. What recommendation do you ship?",
      rubric: [
        "Frames tradeoffs by user segment and funnel impact.",
        "Connects recommendation to product goals.",
        "Defines a measurable follow-up experiment.",
      ],
      hints: ["Who gained? Who lost?", "Tie metrics to business goal.", "Ship with guardrails and test plan."],
    },
    {
      question: "How do you prioritize roadmap items when interview feedback is conflicting?",
      rubric: [
        "Clusters feedback by persona and impact.",
        "Uses effort/impact reasoning transparently.",
        "Converts priorities into milestone-based plan.",
      ],
      hints: ["Group feedback before ranking.", "Impact first, then effort.", "Define what success looks like."],
    },
  ],
};

const DIFFICULTY_CONFIG: Record<DifficultyKey, { time: number; points: number }> = {
  easy: { time: 45, points: 8 },
  medium: { time: 35, points: 12 },
  hard: { time: 25, points: 18 },
};

const ROLE_BUTTONS: { value: RoleKey; label: string }[] = [
  { value: "data_analyst", label: "Data Analyst" },
  { value: "ml_engineer", label: "ML Engineer" },
  { value: "product_analytics", label: "Product Analytics" },
];

const DIFFICULTY_BUTTONS: { value: DifficultyKey; label: string }[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

function pickPrompt(role: RoleKey): Prompt {
  const prompts = ROLE_DATA[role];
  return prompts[Math.floor(Math.random() * prompts.length)];
}

/**
 * "Interview Arcade" mini-game — a client-side port of js/substack-game.js
 * (role/difficulty selection, countdown timer, XP + streak scoring, hints).
 */
export default function InterviewArcade() {
  const [role, setRole] = useState<RoleKey>("data_analyst");
  const [difficulty, setDifficulty] = useState<DifficultyKey>("medium");
  // Deterministic first prompt (index 0) so server and client render the same
  // markup on initial load; a random prompt is picked client-side after mount
  // and on every subsequent user-triggered round.
  const [prompt, setPrompt] = useState<Prompt>(ROLE_DATA.data_analyst[0]);
  const [hintIndex, setHintIndex] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DIFFICULTY_CONFIG.medium.time);
  const [feedback, setFeedback] = useState(
    "Start the round, answer aloud, then score yourself honestly."
  );
  const [burstKey, setBurstKey] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef(timeLeft);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  function runCountdown() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setStreak(0);
          setFeedback("Time up. Grab a hint, then try another challenge.");
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
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: randomizes the prompt client-side only, after the deterministic SSR-safe initial render, to avoid a hydration mismatch.
    setPrompt(pickPrompt("data_analyst"));
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function loadNewRound(nextRole: RoleKey, nextDifficulty: DifficultyKey, message: string) {
    setPrompt(pickPrompt(nextRole));
    setHintIndex(0);
    setFeedback(message);
    setBurstKey((k) => k + 1);
    startTimer(nextDifficulty);
  }

  function handleRoleClick(nextRole: RoleKey) {
    setRole(nextRole);
    loadNewRound(nextRole, difficulty, "New round loaded. Speak your answer out loud, then score yourself.");
  }

  function handleDifficultyClick(nextDifficulty: DifficultyKey) {
    setDifficulty(nextDifficulty);
    loadNewRound(role, nextDifficulty, `Difficulty set to ${nextDifficulty}.`);
  }

  function handleNewQuestion() {
    loadNewRound(role, difficulty, "New round loaded. Speak your answer out loud, then score yourself.");
  }

  function handleHint() {
    if (!prompt.hints.length) {
      setFeedback("No hints available for this prompt yet.");
      return;
    }
    const hint = prompt.hints[Math.min(hintIndex, prompt.hints.length - 1)];
    setHintIndex((i) => i + 1);
    setFeedback(`Hint: ${hint}`);
  }

  function handleNailedIt() {
    const basePoints = DIFFICULTY_CONFIG[difficulty].points;
    const speedBonus = Math.max(0, Math.floor(timeLeftRef.current / 5));
    const streakBonus = streak * 2;
    const earned = basePoints + speedBonus + streakBonus;
    setXp((x) => x + earned);
    setStreak((s) => s + 1);
    setFeedback(
      `Strong run. +${earned} XP (${basePoints} base, ${speedBonus} speed, ${streakBonus} streak).`
    );
    setBurstKey((k) => k + 1);
  }

  function handleSkip() {
    setStreak(0);
    loadNewRound(role, difficulty, "Skipped. Streak reset. New challenge loaded.");
  }

  return (
    <section id="simulator" className="section" aria-labelledby="arcade-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead index="08" title={SECTIONS.arcade} id="arcade-title" />
        <Reveal className="arcade">
          <p className="arcade__intro">{SECTIONS.arcadeIntro}</p>
          <div className="sim-meta">
            <div className="sim-stat">
              XP
              <strong key={`xp-${burstKey}`} className="xp-burst">
                {xp}
              </strong>
            </div>
            <div className="sim-stat">
              Streak
              <strong key={`streak-${burstKey}`} className="xp-burst">
                {streak}
              </strong>
            </div>
            <div className="sim-stat">
              Timer<strong>{timeLeft}s</strong>
            </div>
          </div>
          <div className="role-buttons">
            {ROLE_BUTTONS.map(({ value, label }) => (
              <button
                key={value}
                className={`role-btn${role === value ? " active" : ""}`}
                onClick={() => handleRoleClick(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="difficulty-buttons">
            {DIFFICULTY_BUTTONS.map(({ value, label }) => (
              <button
                key={value}
                className={`difficulty-btn${difficulty === value ? " active" : ""}`}
                onClick={() => handleDifficultyClick(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="sim-output">
            <h4>Question</h4>
            <p>{prompt.question}</p>
            <h4>Ideal Rubric</h4>
            <ul>
              {prompt.rubric.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="sim-actions">
            <button className="sim-action-btn" onClick={handleHint}>
              Need Hint
            </button>
            <button className="sim-action-btn" onClick={handleNailedIt}>
              I Nailed It
            </button>
            <button className="sim-action-btn" onClick={handleSkip}>
              Skip
            </button>
            <button className="btn btn--ink" onClick={handleNewQuestion}>
              New Challenge
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
