window.addEventListener('DOMContentLoaded', () => {
  const user = requireAuth();
  if (!user) return;
  loadTheme();

  const solvedSet = new Set(user.progress.solved || []);
  const solvedCount = solvedSet.size;
  const easySolved = problems.filter(problem => problem.difficulty === 'easy' && solvedSet.has(problem.id)).length;
  const mediumSolved = problems.filter(problem => problem.difficulty === 'medium' && solvedSet.has(problem.id)).length;
  const hardSolved = problems.filter(problem => problem.difficulty === 'hard' && solvedSet.has(problem.id)).length;
  const totalProblems = problems.length;
  const progressRatio = totalProblems ? Math.round((solvedCount / totalProblems) * 100) : 0;

  const dailyChallenge = getDailyChallenge();
  const missedChallenges = getMissedDailyChallenges(user);

  document.getElementById('userName').textContent = user.name;
  document.getElementById('dashboardSolved').textContent = solvedCount;
  document.getElementById('dashboardStreak').textContent = `${getCurrentStreak(user)} Days`;
  document.getElementById('dashboardEasy').textContent = easySolved;
  document.getElementById('dashboardMedium').textContent = mediumSolved;
  document.getElementById('dashboardHard').textContent = hardSolved;
  document.getElementById('dashboardProgressFill').style.width = `${progressRatio}%`;
  document.getElementById('dashboardProgressText').textContent = `${progressRatio}% Completed`;

  const challengeName = document.getElementById('dailyChallengeName');
  const challengeMeta = document.getElementById('dailyChallengeMeta');
  const challengeDescription = document.getElementById('dailyChallengeDescription');
  const challengeStatus = document.getElementById('dailyChallengeStatus');
  const challengeHint = document.getElementById('dailyChallengeHint');
  const challengeAction = document.getElementById('dailyChallengeAction');

  if (dailyChallenge) {
    challengeName.textContent = dailyChallenge.name;
    challengeMeta.textContent = `${capitalize(dailyChallenge.difficulty)} • ${capitalize(dailyChallenge.language)} • ${dailyChallenge.topics.join(', ')}`;
    challengeDescription.textContent = dailyChallenge.description;
  } else {
    challengeName.textContent = 'No daily challenge available';
    challengeMeta.textContent = '';
    challengeDescription.textContent = 'Please add more problems to unlock the daily challenge rotation.';
    challengeAction.disabled = true;
  }

  function refreshDailyChallengeStatus() {
    const status = getDailyChallengeStatus(user);
    const isCompleted = status === 'Completed';
    const isMissed = status === 'Missed';

    challengeStatus.textContent = status;
    challengeStatus.className = `status-pill ${isCompleted ? 'status-solved' : isMissed ? 'status-missed' : 'status-todo'}`;

    if (isCompleted) {
      challengeHint.textContent = 'You completed today’s challenge. Great work! Keep your streak going.';
      challengeAction.textContent = 'Review Challenge';
    } else if (isMissed) {
      challengeHint.textContent = 'You missed a past challenge. Complete today’s challenge and then catch up.';
      challengeAction.textContent = 'Solve Later';
    } else {
      challengeHint.textContent = missedChallenges.length
        ? `You have ${missedChallenges.length} missed challenge(s). Finish today's challenge to stay consistent.`
        : 'Solve today’s challenge and build your streak.';
      challengeAction.textContent = 'Solve Challenge';
    }
  }

  refreshDailyChallengeStatus();

  challengeAction.addEventListener('click', () => {
    if (!dailyChallenge) return;
    window.location.href = `problem.html?id=${dailyChallenge.id}`;
  });

  const nextProblems = problems.filter(problem => !solvedSet.has(problem.id)).slice(0, 4);
  const continueCard = document.getElementById('continueCard');
  if (nextProblems.length) {
    continueCard.innerHTML = nextProblems.map(problem => `
      <div class="small-card" style="margin-bottom:12px;">
        <h3>${problem.name}</h3>
        <p style="color: var(--muted); margin:8px 0 10px;">${problem.description}</p>
        <a class="button button-primary" href="problem.html?id=${problem.id}">Continue</a>
      </div>
    `).join('');
  } else {
    continueCard.innerHTML = '<div class="small-card">You have solved all available problems. Great work!</div>';
  }

  const chartCanvas = document.getElementById('dashboardChart');
  if (chartCanvas && window.Chart) {
    new Chart(chartCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [{
          data: [easySolved, mediumSolved, hardSolved],
          backgroundColor: ['#60A5FA', '#F59E0B', '#EF4444']
        }]
      },
      options: {
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  document.getElementById('logoutButton').addEventListener('click', () => {
    clearCurrentUser();
    window.location.href = 'index.html';
  });
});
