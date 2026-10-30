"use client";

import { useEffect, useRef, useState } from "react";

interface Prompt {
  question: string;
  rubric: string[];
  hints: string[];
}

type RoleKey = "data_analyst" | "ml_engineer" | "product_analytics";
type DifficultyKey = "easy" | "medium" | "hard";
type Phase = "idle" | "running" | "done";

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

/** Picks a random prompt for the role, avoiding an immediate repeat. */
function pickPrompt(role: RoleKey, current?: Prompt): Prompt {
  const prompts = ROLE_DATA[role].filter((p) => p !== current);
  const pool = prompts.length ? prompts : ROLE_DATA[role];
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * "Interview Arcade": pick a role and difficulty, answer out loud against the
 * clock, then score yourself. The timer only runs once a round is started.
 */
export default function InterviewArcade() {
  const [role, setRole] = useState<RoleKey>("data_analyst");
  const [difficulty, setDifficulty] = useState<DifficultyKey>("medium");
  // Deterministic first prompt so server and client markup match.
  const [prompt, setPrompt] = useState<Prompt>(ROLE_DATA.data_analyst[0]);
  const [phase, setPhase] = useState<Phase>("idle");
  const [timeLeft, setTimeLeft] = useState(DIFFICULTY_CONFIG.medium.time);
  const [hintsShown, setHintsShown] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState("Pick a role and difficulty, then start the clock.");

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function stopTimer() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  useEffect(() => stopTimer, []);

  useEffect(() => {
    if (phase === "running" && timeLeft === 0) {
      stopTimer();
      // eslint-disable-next-line react-hooks/set-state-in-effect -- ends the round when the countdown reaches zero.
      setPhase("done");
      setStreak(0);
      setFeedback("Time's up. Streak reset — try another question.");
    }
  }, [phase, timeLeft]);

  function startRound(nextPrompt: Prompt = prompt) {
    stopTimer();
    setPrompt(nextPrompt);
    setHintsShown(0);
    setTimeLeft(DIFFICULTY_CONFIG[difficulty].time);
    setPhase("running");
    setFeedback("Answer out loud. Score yourself when you're done.");
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);
  }

  function resetTo(nextRole: RoleKey, nextDifficulty: DifficultyKey) {
    stopTimer();
    setRole(nextRole);
    setDifficulty(nextDifficulty);
    setPrompt(pickPrompt(nextRole, prompt));
    setHintsShown(0);
    setTimeLeft(DIFFICULTY_CONFIG[nextDifficulty].time);
    setPhase("idle");
    setFeedback("New question ready. Start the clock when you are.");
  }

  function handleHint() {
    if (hintsShown >= prompt.hints.length) return;
    setHintsShown((n) => n + 1);
  }

  function handleNailedIt() {
    stopTimer();
    const base = DIFFICULTY_CONFIG[difficulty].points;
    const speed = Math.floor(timeLeft / 5);
    const streakBonus = streak * 2;
    const earned = base + speed + streakBonus;
    setXp((x) => x + earned);
    setStreak((s) => s + 1);
    setPhase("done");
    setFeedback(`+${earned} XP (${base} base, ${speed} speed, ${streakBonus} streak).`);
  }

  function handleSkip() {
    stopTimer();
    setStreak(0);
    setPhase("done");
    setFeedback("Skipped. Streak reset.");
  }

  const total = DIFFICULTY_CONFIG[difficulty].time;
  const progress = phase === "idle" ? 1 : timeLeft / total;

  return (
    <div className="arcade">
          <div className="arcade-controls">
            <div className="segmented" role="group" aria-label="Role">
              {ROLE_BUTTONS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={role === value}
                  onClick={() => resetTo(value, difficulty)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="segmented" role="group" aria-label="Difficulty">
              {DIFFICULTY_BUTTONS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={difficulty === value}
                  onClick={() => resetTo(role, value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="arcade-body">
            <div className="arcade-question">
              <p className="arcade-label">Question</p>
              <p className="arcade-prompt">{prompt.question}</p>

              <p className="arcade-label">What a strong answer covers</p>
              <ul className="arcade-rubric">
                {prompt.rubric.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              {hintsShown > 0 ? (
                <>
                  <p className="arcade-label">Hints</p>
                  <ul className="arcade-hints">
                    {prompt.hints.slice(0, hintsShown).map((hint) => (
                      <li key={hint}>{hint}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>

            <div className="arcade-side">
              <dl className="arcade-stats">
                <div>
                  <dt>Time</dt>
                  <dd className={phase === "running" && timeLeft <= 10 ? "is-urgent" : undefined}>
                    {timeLeft}s
                  </dd>
                </div>
                <div>
                  <dt>XP</dt>
                  <dd>{xp}</dd>
                </div>
                <div>
                  <dt>Streak</dt>
                  <dd>{streak}</dd>
                </div>
              </dl>
              <div className="arcade-timer" aria-hidden="true">
                <span style={{ transform: `scaleX(${progress})` }} />
              </div>

              {phase === "running" ? (
                <div className="arcade-actions">
                  <button type="button" className="btn btn--primary" onClick={handleNailedIt}>
                    I nailed it
                  </button>
                  <button
                    type="button"
                    className="btn btn--secondary"
                    onClick={handleHint}
                    disabled={hintsShown >= prompt.hints.length}
                  >
                    Hint ({prompt.hints.length - hintsShown} left)
                  </button>
                  <button type="button" className="btn btn--secondary" onClick={handleSkip}>
                    Skip
                  </button>
                </div>
              ) : (
                <div className="arcade-actions">
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => startRound(phase === "done" ? pickPrompt(role, prompt) : prompt)}
                  >
                    {phase === "done" ? "Next question" : "Start the clock"}
                  </button>
                </div>
              )}

              <p className="arcade-feedback" aria-live="polite">
                {feedback}
              </p>
            </div>
          </div>
    </div>
  );
}
