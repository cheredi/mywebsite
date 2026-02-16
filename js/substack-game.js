(function () {
  const roleData = {
    data_analyst: [
      {
        question: 'A churn dashboard spikes for one cohort. What is your first 30-minute investigation plan?',
        rubric: [
          'Confirms metric definition and data freshness.',
          'Splits issue by segment and funnel stage.',
          'Proposes one concrete next action for stakeholders.'
        ],
        hints: ['Start with data reliability checks.', 'Compare against prior weekly baseline.', 'Isolate by acquisition channel first.']
      },
      {
        question: 'Design a KPI view a non-technical manager can use in 60 seconds.',
        rubric: [
          'Chooses a clear primary KPI and supporting trend.',
          'Uses thresholds or alerts for fast decisions.',
          'Adds one recommended action based on the signal.'
        ],
        hints: ['Clarity beats dashboard complexity.', 'Use plain language labels.', 'One KPI, one decision.']
      }
    ],
    ml_engineer: [
      {
        question: 'How would you evaluate a RAG interview coach beyond model accuracy?',
        rubric: [
          'Separates retrieval quality from generation quality.',
          'Defines groundedness and hallucination checks.',
          'Includes human review loop and failure taxonomy.'
        ],
        hints: ['Measure retrieval and response separately.', 'Use a rubric, not just one score.', 'Track failure types over time.']
      },
      {
        question: 'Your RAG latency regresses after adding features. What do you optimize first?',
        rubric: [
          'Profiles the pipeline to find true bottleneck.',
          'Balances caching and retrieval depth tradeoffs.',
          'Protects response quality with regression checks.'
        ],
        hints: ['Profile before optimizing.', 'Check embedding/retrieval path first.', 'Guard quality while reducing latency.']
      }
    ],
    product_analytics: [
      {
        question: 'A feature increases engagement but lowers conversion. What recommendation do you ship?',
        rubric: [
          'Frames tradeoffs by user segment and funnel impact.',
          'Connects recommendation to product goals.',
          'Defines a measurable follow-up experiment.'
        ],
        hints: ['Who gained? Who lost?', 'Tie metrics to business goal.', 'Ship with guardrails and test plan.']
      },
      {
        question: 'How do you prioritize roadmap items when interview feedback is conflicting?',
        rubric: [
          'Clusters feedback by persona and impact.',
          'Uses effort/impact reasoning transparently.',
          'Converts priorities into milestone-based plan.'
        ],
        hints: ['Group feedback before ranking.', 'Impact first, then effort.', 'Define what success looks like.']
      }
    ]
  };

  const difficultyConfig = {
    easy: { time: 45, points: 8 },
    medium: { time: 35, points: 12 },
    hard: { time: 25, points: 18 }
  };

  let currentRole = 'data_analyst';
  let currentDifficulty = 'medium';
  let currentPrompt = null;
  let hintIndex = 0;
  let xp = 0;
  let streak = 0;
  let countdown = null;
  let timeLeft = difficultyConfig[currentDifficulty].time;

  const roleButtons = document.querySelectorAll('.role-btn');
  const difficultyButtons = document.querySelectorAll('.difficulty-btn');
  const simQuestion = document.getElementById('simQuestion');
  const simRubric = document.getElementById('simRubric');
  const newQuestionBtn = document.getElementById('newQuestionBtn');
  const hintBtn = document.getElementById('hintBtn');
  const nailedBtn = document.getElementById('nailedBtn');
  const skipBtn = document.getElementById('skipBtn');
  const timerValue = document.getElementById('timerValue');
  const xpValue = document.getElementById('xpValue');
  const streakValue = document.getElementById('streakValue');
  const simFeedback = document.getElementById('simFeedback');

  if (!simQuestion || !simRubric || !timerValue || !xpValue || !streakValue || !simFeedback) {
    return;
  }

  function updateScoreboard() {
    xpValue.textContent = `${xp}`;
    streakValue.textContent = `${streak}`;
    timerValue.textContent = `${timeLeft}s`;
    xpValue.classList.remove('xp-burst');
    void xpValue.offsetWidth;
    xpValue.classList.add('xp-burst');
  }

  function startTimer() {
    if (countdown) {
      clearInterval(countdown);
    }

    timeLeft = difficultyConfig[currentDifficulty].time;
    timerValue.textContent = `${timeLeft}s`;

    countdown = setInterval(() => {
      timeLeft -= 1;
      timerValue.textContent = `${Math.max(0, timeLeft)}s`;

      if (timeLeft <= 0) {
        clearInterval(countdown);
        streak = 0;
        simFeedback.textContent = 'Time up. Grab a hint, then try another challenge.';
        updateScoreboard();
      }
    }, 1000);
  }

  function renderInterviewPrompt(roleKey) {
    const prompts = roleData[roleKey];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    currentPrompt = prompts[randomIndex];
    hintIndex = 0;

    simQuestion.textContent = currentPrompt.question;
    simRubric.innerHTML = '';
    currentPrompt.rubric.forEach(line => {
      const li = document.createElement('li');
      li.textContent = line;
      simRubric.appendChild(li);
    });

    simFeedback.textContent = 'New round loaded. Speak your answer out loud, then score yourself.';
    startTimer();
    updateScoreboard();
  }

  roleButtons.forEach(button => {
    button.addEventListener('click', () => {
      roleButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentRole = button.dataset.role;
      renderInterviewPrompt(currentRole);
    });
  });

  difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
      difficultyButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentDifficulty = button.dataset.difficulty;
      simFeedback.textContent = `Difficulty set to ${currentDifficulty}.`;
      renderInterviewPrompt(currentRole);
    });
  });

  if (newQuestionBtn) {
    newQuestionBtn.addEventListener('click', () => renderInterviewPrompt(currentRole));
  }

  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      if (!currentPrompt || !currentPrompt.hints || currentPrompt.hints.length === 0) {
        simFeedback.textContent = 'No hints available for this prompt yet.';
        return;
      }

      const hint = currentPrompt.hints[Math.min(hintIndex, currentPrompt.hints.length - 1)];
      hintIndex += 1;
      simFeedback.textContent = `Hint: ${hint}`;
    });
  }

  if (nailedBtn) {
    nailedBtn.addEventListener('click', () => {
      const basePoints = difficultyConfig[currentDifficulty].points;
      const speedBonus = Math.max(0, Math.floor(timeLeft / 5));
      const streakBonus = streak * 2;
      const earned = basePoints + speedBonus + streakBonus;
      xp += earned;
      streak += 1;
      simFeedback.textContent = `Strong run. +${earned} XP (${basePoints} base, ${speedBonus} speed, ${streakBonus} streak).`;
      updateScoreboard();
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      streak = 0;
      simFeedback.textContent = 'Skipped. Streak reset. New challenge loaded.';
      renderInterviewPrompt(currentRole);
    });
  }

  renderInterviewPrompt(currentRole);
})();
