window.addEventListener('DOMContentLoaded', () => {
  const user = requireAuth();
  if (!user) return;
  loadTheme();

  const params = new URLSearchParams(window.location.search);
  const problemId = Number(params.get('id'));
  const problem = problems.find(item => item.id === problemId);
  const contentWrapper = document.getElementById('problemContent');

  if (!problem) {
    contentWrapper.innerHTML = '<p>Problem not found. Return to <a href="problems.html">all problems</a>.</p>';
    return;
  }

  const title = document.getElementById('problemTitle');
  const meta = document.getElementById('problemMeta');
  const topics = document.getElementById('problemTopics');
  const description = document.getElementById('problemDescription');
  const examples = document.getElementById('problemExamples');
  const constraints = document.getElementById('problemConstraints');
  const languageSelect = document.getElementById('editorLanguage');
  const codeGutter = document.getElementById('codeGutter');
  const codeEditor = document.getElementById('codeEditor');
  const hintButton = document.getElementById('problemHintButton');
  const hintStatus = document.getElementById('hintStatus');
  const hintList = document.getElementById('hintList');
  const resultOutput = document.getElementById('resultOutput');
  const statusPill = document.getElementById('problemStatus');
  const runButton = document.getElementById('runButton');
  const submitButton = document.getElementById('submitButton');
  const submissionHistory = document.getElementById('submissionHistory');
  const timerDisplay = document.getElementById('problemTimerDisplay');
  const timerStateText = document.getElementById('timerState');
  const pauseTimerButton = document.getElementById('pauseTimerButton');
  const resumeTimerButton = document.getElementById('resumeTimerButton');
  const customInput = document.getElementById('customInput');
  const customExpected = document.getElementById('customExpected');
  const runCustomTestButton = document.getElementById('runCustomTestButton');
  const customTestResult = document.getElementById('customTestResult');
  const customTestHistory = document.getElementById('customTestHistory');

  title.textContent = problem.name;
  meta.textContent = `${capitalize(problem.difficulty)} • ${capitalize(problem.language)} • ${problem.topics.join(', ')}`;
  topics.innerHTML = problem.topics.map(topic => `<span class="tag">${topic}</span>`).join('');
  description.textContent = problem.description;
  examples.innerHTML = problem.examples.map(example => `<li><strong>Input:</strong> ${example.input}<br><strong>Output:</strong> ${example.output}</li>`).join('');
  constraints.innerHTML = problem.constraints.map(constraint => `<li>${constraint}</li>`).join('');

  const solved = new Set(user.progress.solved || []).has(problem.id);
  statusPill.textContent = solved ? 'Solved' : 'Todo';
  statusPill.className = `status-pill ${solved ? 'status-solved' : 'status-todo'}`;

  const timerState = getProblemTimer(user, problem.id);

  function getElapsedSeconds() {
    const runningSince = timerState.runningSince ? new Date(timerState.runningSince).getTime() : null;
    const currentElapsed = Number(timerState.elapsed || 0);
    if (!runningSince || timerState.paused) {
      return currentElapsed;
    }
    return currentElapsed + Math.floor((Date.now() - runningSince) / 1000);
  }

  function syncTimerState() {
    saveProblemTimer(user, problem.id, timerState);
  }

  function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(getElapsedSeconds());
  }

  function updateTimerControls() {
    const running = Boolean(timerState.runningSince && !timerState.paused);
    pauseTimerButton.style.display = running ? 'inline-flex' : 'none';
    resumeTimerButton.style.display = running ? 'none' : 'inline-flex';
    timerStateText.textContent = running ? 'Timer is running.' : 'Timer is paused.';
  }

  if (!timerState.runningSince && !timerState.paused) {
    timerState.runningSince = new Date().toISOString();
    syncTimerState();
  }

  updateTimerDisplay();
  updateTimerControls();

  setInterval(() => {
    updateTimerDisplay();
  }, 1000);

  pauseTimerButton.addEventListener('click', () => {
    timerState.elapsed = getElapsedSeconds();
    timerState.runningSince = null;
    timerState.paused = true;
    syncTimerState();
    updateTimerControls();
    updateTimerDisplay();
  });

  resumeTimerButton.addEventListener('click', () => {
    timerState.runningSince = new Date().toISOString();
    timerState.paused = false;
    syncTimerState();
    updateTimerControls();
  });

  function escapeHtml(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderHintStatus() {
    const hintsUnlocked = user.progress.hintsUnlocked[problem.id] || 0;
    hintStatus.textContent = `Hints unlocked ${hintsUnlocked} of ${problem.hints.length}.`;
    if (hintsUnlocked > 0) {
      hintList.innerHTML = `<div class="hint-card">Hint ${hintsUnlocked}: ${problem.hints[hintsUnlocked - 1]}</div>`;
    } else {
      hintList.innerHTML = '<p style="color: var(--muted);">Complete at least one run or submit attempt to unlock a hint.</p>';
    }
  }

  function updateEditorTemplate() {
    const language = languageSelect.value;
    const starter = problem.starterCode[language] || problem.starterCode.python;
    codeEditor.value = starter;
    renderGutter();
  }

  function renderGutter() {
    const lines = codeEditor.value.split('\n').length;
    codeGutter.innerHTML = Array.from({ length: lines }, (_, index) => `<div>${index + 1}</div>`).join('');
  }

  function recordAttempt(statusLabel) {
    const attempt = user.progress.attempts[problem.id] || { attempted: false, attemptCount: 0, lastAttempt: '', status: 'todo' };
    attempt.attempted = true;
    attempt.attemptCount += 1;
    attempt.lastAttempt = new Date().toISOString();
    attempt.status = statusLabel;
    user.progress.attempts[problem.id] = attempt;
    saveCurrentUser(user);
  }

  function renderSubmissionHistory() {
    const rows = getSubmissionHistory(user).filter(entry => entry.problemId === problem.id);
    if (!rows.length) {
      submissionHistory.innerHTML = '<p style="color: var(--muted);">No submissions yet.</p>';
      return;
    }

    submissionHistory.innerHTML = `
      <table class="submission-table">
        <thead>
          <tr><th>Time</th><th>Language</th><th>Status</th><th>Runtime</th><th>Solve Time</th></tr>
        </thead>
        <tbody>
          ${rows.map(entry => `
            <tr>
              <td>${new Date(entry.timestamp).toLocaleString()}</td>
              <td>${capitalize(entry.language)}</td>
              <td>${entry.status.toLowerCase() === 'accepted' ? '✓ Accepted' : capitalize(entry.status.replace('_', ' '))}</td>
              <td>${entry.runtime != null ? entry.runtime + ' ms' : '—'}</td>
              <td>${entry.solveTime != null ? `${entry.solveTime}s` : '—'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  function renderResult(result) {
    const title = {
      compile_error: '❌ Compilation Error',
      runtime_error: '❌ Runtime Error',
      wrong_answer: '❌ Wrong Answer',
      accepted: '✓ All Test Cases Passed',
      running: 'Running'
    }[String(result.status).toLowerCase()] || 'Result';

    const details = [];
    if (result.line) details.push(`Line ${result.line}`);
    if (result.testCase) details.push(`Test Case ${result.testCase} failed`);

    let body = result.message;
    if (String(result.status).toLowerCase() === 'accepted') {
      body = `All visible test cases passed.\n\nRuntime: ${result.runtime} ms\nMemory: ${result.memory} MB\n\nSubmit to record this solution.`;
    }
    if (String(result.status).toLowerCase() === 'wrong_answer' && result.expected !== undefined) {
      body = `Input:\n${result.input || ''}\n\nExpected:\n${result.expected}\n\nYour Output:\n${result.output}\n\nCheck your logic and try again.`;
    }

    resultOutput.innerHTML = `
      <div class="result-panel">
        <h3>${title}</h3>
        <pre>${details.join(' | ')}</pre>
        <pre>${body}</pre>
      </div>
    `;
  }

  function renderCustomTestHistory() {
    const tests = getCustomTestHistory(user, problem.id);
    if (!tests.length) {
      customTestHistory.innerHTML = '<p style="margin:0;color:var(--muted);">No recent custom tests yet.</p>';
      return;
    }

    customTestHistory.innerHTML = `
      <ul class="activity-list">
        ${tests.map(entry => `
          <li>
            <strong>${String(entry.status).toLowerCase() === 'accepted' ? '✓ Passed' : '✗ ' + capitalize(entry.status)}</strong>
            <span>${new Date(entry.timestamp).toLocaleString()}</span>
            <div style="margin-top:4px;">Input: ${escapeHtml(entry.input)}</div>
            ${entry.expected ? `<div>Expected: ${escapeHtml(entry.expected)}</div>` : ''}
          </li>
        `).join('')}
      </ul>
    `;
  }

  function recordSubmissionResult(submission) {
    const accepted = String(submission.status).toLowerCase() === 'accepted';
    recordAttempt(accepted ? 'solved' : 'failed');
    recordSubmission(user, {
      problemId: problem.id,
      language: languageSelect.value,
      status: submission.status,
      action: submission.action,
      runtime: submission.runtime,
      memory: submission.memory,
      solveTime: submission.solveTime
    });
    renderSubmissionHistory();
  }

  function handleAcceptedSubmission() {
    markSolved(problem, user);
    const todayChallenge = getDailyChallenge();
    if (todayChallenge && todayChallenge.id === problem.id) {
      recordDailyChallengeCompletion(user, todayDate(), problem.id);
    } else {
      const missedEntry = getMissedDailyChallenges(user).find(entry => entry.problemId === problem.id);
      if (missedEntry) {
        markMissedChallengeSolvedLater(user, problem.id);
      }
    }
    timerState.elapsed = getElapsedSeconds();
    timerState.runningSince = null;
    timerState.paused = true;
    syncTimerState();
    updateTimerControls();
  }

  runButton.addEventListener('click', () => {
    const code = codeEditor.value.trim();
    const result = runCode(problem, code, 'run', languageSelect.value);
    renderResult(result);
    recordSubmissionResult({ ...result, action: 'Run', solveTime: undefined });
    if (String(result.status).toLowerCase() !== 'accepted') {
      hintStatus.textContent = 'You unlocked hints by attempting the problem. Click View Hint to use one.';
    }
  });

  submitButton.addEventListener('click', () => {
    const code = codeEditor.value.trim();
    const result = runCode(problem, code, 'submit', languageSelect.value);
    renderResult(result);
    const solveTime = String(result.status).toLowerCase() === 'accepted' ? getElapsedSeconds() : undefined;
    recordSubmissionResult({ ...result, action: 'Submit', solveTime });
    if (String(result.status).toLowerCase() === 'accepted') {
      handleAcceptedSubmission();
    }
  });

  function runCustomTest() {
    const code = codeEditor.value.trim();
    const input = customInput.value.trim();
    const expected = customExpected.value.trim();

    if (!input) {
      customTestResult.innerHTML = '<p style="color: var(--muted); margin:0;">Add custom input before running a test.</p>';
      return;
    }

    const result = runCode(problem, code, 'custom', languageSelect.value);
    const testResult = { ...result, input, expected };
    if (expected && result.output !== expected) {
      testResult.status = 'wrong_answer';
      testResult.message = 'Custom test did not match expected output.';
    }

    customTestResult.innerHTML = `
      <div class="result-panel">
        <h3>${String(testResult.status).toLowerCase() === 'accepted' ? '✓ Custom Test Passed' : '✗ Custom Test Failed'}</h3>
        <pre>${escapeHtml(testResult.message)}</pre>
      </div>
    `;

    saveCustomTestHistory(user, problem.id, {
      input,
      expected,
      status: testResult.status,
      timestamp: new Date().toISOString()
    });
    renderCustomTestHistory();
  }

  hintButton.addEventListener('click', () => {
    const attempt = user.progress.attempts[problem.id];
    if (!attempt || !attempt.attempted) {
      alert('Try running or submitting the problem before unlocking a hint.');
      return;
    }
    if (!useHint(user)) {
      alert('You have used all your hints for today. Come back tomorrow.');
      return;
    }
    const hintIndex = user.progress.hintsUnlocked[problem.id] || 0;
    if (hintIndex >= problem.hints.length) {
      alert('You have unlocked all hints for this problem.');
      return;
    }
    const hint = problem.hints[hintIndex];
    user.progress.hintsUnlocked[problem.id] = hintIndex + 1;
    saveCurrentUser(user);
    hintList.innerHTML = `<div class="hint-card">Hint ${hintIndex + 1}: ${hint}</div>`;
    renderHintStatus();
  });

  runCustomTestButton.addEventListener('click', runCustomTest);
  languageSelect.addEventListener('change', () => {
    updateEditorTemplate();
    renderGutter();
  });
  codeEditor.addEventListener('input', renderGutter);
  updateEditorTemplate();
  renderGutter();
  renderHintStatus();
  renderSubmissionHistory();
  renderCustomTestHistory();

  document.getElementById('logoutButton').addEventListener('click', () => {
    clearCurrentUser();
    window.location.href = 'index.html';
  });
});

function runCode(problem, code, action, language) {
  if (!code) {
    return {
      status: 'compile_error',
      language,
      line: 1,
      message: 'Your code is empty. Please enter a valid solution before running.',
      output: ''
    };
  }

  const codeLower = code.toLowerCase();

  if (language === 'python') {
    if (/\b(public|private|protected|static|class|System\.out\.println|String\[\]|import java\.|new\s+[A-Z][A-Za-z0-9_]*\()/i.test(code)) {
      return {
        status: 'compile_error',
        language,
        line: 1,
        message: 'Language mismatch: the editor is set to Python, but the code looks like Java. Switch to Java or write Python code.',
        output: ''
      };
    }
    if (codeLower.includes('syntaxerror') || codeLower.includes('indent')) {
      return {
        status: 'compile_error',
        language,
        line: findErrorLine(code, 'syntax'),
        message: "SyntaxError: invalid syntax. Check the marked line for missing punctuation or indentation.",
        output: ''
      };
    }
    if (codeLower.includes('nameerror')) {
      return {
        status: 'runtime_error',
        language,
        line: findErrorLine(code, 'nameerror'),
        message: "NameError: name is not defined. Verify your variable and function names.",
        output: ''
      };
    }
  }

  if (language === 'java') {
    if (code.includes('return') && !code.includes(';') && !code.includes('{')) {
      return {
        status: 'compile_error',
        language,
        line: findErrorLine(code, 'return'),
        message: "error: ';' expected. Add a semicolon at the end of the statement.",
        output: ''
      };
    }
    if (codeLower.includes('nullpointerexception')) {
      return {
        status: 'runtime_error',
        language,
        line: findErrorLine(code, 'nullpointerexception'),
        message: 'NullPointerException: A null reference was dereferenced. Check the object on this line.',
        output: ''
      };
    }
  }

  const output = simulateOutput(problem, code, language);
  if (output === null) {
    return {
      status: 'runtime_error',
      language,
      line: findErrorLine(code, 'runtime'),
      message: 'Runtime Error: code could not execute with the current input.',
      output: ''
    };
  }

  const expected = problem.tests[0].expected;
  if (output !== expected) {
    return {
      status: 'wrong_answer',
      language,
      testCase: 1,
      input: action === 'custom' ? undefined : problem.tests[0].input,
      output,
      expected,
      message: 'Your output does not match the expected result.'
    };
  }

  return {
    status: 'accepted',
    language,
    output,
    runtime: randomRuntime(),
    memory: randomMemory(),
    message: 'All tests passed successfully.'
  };
}

function findErrorLine(code, marker) {
  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].toLowerCase().includes(marker)) {
      return i + 1;
    }
  }
  return 1;
}

function simulateOutput(problem, code, language) {
  const needle = problem.solutionKeywords.find(keyword => code.toLowerCase().includes(keyword.toLowerCase()));
  if (!needle) {
    return 'incorrect';
  }
  return problem.tests[0].expected;
}

function randomRuntime() {
  return Math.floor(Math.random() * 40) + 20;
}

function randomMemory() {
  return (Math.random() * 30 + 10).toFixed(1);
}
