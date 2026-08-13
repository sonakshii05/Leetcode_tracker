window.addEventListener('DOMContentLoaded', () => {
  const user = requireAuth();
  if (!user) return;
  loadTheme();

  const profileAvatar = document.getElementById('profileAvatar');
  const profileDisplayName = document.getElementById('profileDisplayName');
  const profileUsername = document.getElementById('profileUsername');
  const profileLevel = document.getElementById('profileLevel');
  const profileLevelTitle = document.getElementById('profileLevelTitle');
  const profileXpValue = document.getElementById('profileXpValue');
  const profileXpProgress = document.getElementById('profileXpProgress');
  const profileXpNext = document.getElementById('profileXpNext');
  const profileSolved = document.getElementById('profileSolved');
  const profileStreak = document.getElementById('profileStreak');
  const profileLongestStreak = document.getElementById('profileLongestStreak');
  const profileChallengesSummary = document.getElementById('profileChallengesSummary');
  const difficultyEasyCount = document.getElementById('difficultyEasyCount');
  const difficultyMediumCount = document.getElementById('difficultyMediumCount');
  const difficultyHardCount = document.getElementById('difficultyHardCount');
  const difficultyEasyBar = document.getElementById('difficultyEasyBar');
  const difficultyMediumBar = document.getElementById('difficultyMediumBar');
  const difficultyHardBar = document.getElementById('difficultyHardBar');
  const profileChallengeText = document.getElementById('profileChallengeText');
  const profileAchievementsCount = document.getElementById('profileAchievementsCount');
  const calendarGrid = document.getElementById('calendarGrid');
  const calendarMonthLabel = document.getElementById('calendarMonthLabel');
  const calendarHint = document.getElementById('calendarHint');
  const roadmapList = document.getElementById('roadmapList');
  const currentlyLearningList = document.getElementById('currentlyLearningList');
  const progressTotalSolved = document.getElementById('progressTotalSolved');
  const progressEasySolved = document.getElementById('progressEasySolved');
  const progressMediumSolved = document.getElementById('progressMediumSolved');
  const progressHardSolved = document.getElementById('progressHardSolved');
  const progressDifficultyEasyCount = document.getElementById('progressDifficultyEasyCount');
  const progressDifficultyMediumCount = document.getElementById('progressDifficultyMediumCount');
  const progressDifficultyHardCount = document.getElementById('progressDifficultyHardCount');
  const progressDifficultyEasyBar = document.getElementById('progressDifficultyEasyBar');
  const progressDifficultyMediumBar = document.getElementById('progressDifficultyMediumBar');
  const progressDifficultyHardBar = document.getElementById('progressDifficultyHardBar');
  const achievementsGrid = document.getElementById('achievementsGrid');
  const achievementsSection = document.getElementById('achievementsSection');
  const historySection = document.getElementById('historySection');
  const profileActivity = document.getElementById('profileActivity');
  const editProfileButton = document.getElementById('editProfileButton');
  const profileModal = document.getElementById('profileModal');
  const profileModalClose = document.getElementById('profileModalClose');
  const cancelProfileButton = document.getElementById('cancelProfileButton');
  const profileForm = document.getElementById('profileForm');
  const displayNameInput = document.getElementById('displayName');
  const usernameInput = document.getElementById('usernameInput');
  const usernameValidation = document.getElementById('usernameValidation');
  const avatarGrid = document.getElementById('avatarGrid');
  const profileAccentColor = document.getElementById('profileAccentColor');
  const toastContainer = document.getElementById('toastContainer');

  let selectedAvatar = user.profile?.avatar || 'developer';

  function renderProfileHeader() {
    const levelInfo = getProfileProgress(user);
    profileAvatar.innerHTML = getAvatarSvg(user.profile?.avatar || 'developer');
    profileAvatar.style.borderColor = normalizeAccentColor(user.profile?.accentColor || '#38bdf8');
    profileDisplayName.textContent = user.profile?.displayName || user.name || 'CodeTrack User';
    profileUsername.textContent = `@${user.profile?.username || 'codehero'}`;
    profileLevel.textContent = levelInfo.level;
    profileLevelTitle.textContent = getProfileLevelTitle(user);
    profileXpValue.textContent = `${levelInfo.xp} XP`;
    profileXpProgress.style.width = `${Math.round(levelInfo.progress * 100)}%`;
    profileXpNext.textContent = levelInfo.xpToNext > 0 ? `${levelInfo.xpToNext} XP to next level` : 'Max level reached';

    const solvedCount = getSolvedCount(user);
    profileSolved.textContent = solvedCount;
    const streakStats = calculateStreaks(user);
    profileStreak.textContent = `${streakStats.current} Days`;
    profileLongestStreak.textContent = `${streakStats.longest} Days`;

    const challenges = getChallengesSummary(user);
    profileChallengesSummary.textContent = `${challenges.completed} completed`;
    profileChallengeText.textContent = `Streak: ${challenges.streak} days · ${challenges.missed} missed`;

    const difficulty = getSolvedDifficultyCounts(user);
    const totalDifficulty = Math.max(1, difficulty.easy + difficulty.medium + difficulty.hard);
    difficultyEasyCount.textContent = difficulty.easy;
    difficultyMediumCount.textContent = difficulty.medium;
    difficultyHardCount.textContent = difficulty.hard;
    difficultyEasyBar.style.width = `${Math.round((difficulty.easy / totalDifficulty) * 100)}%`;
    difficultyMediumBar.style.width = `${Math.round((difficulty.medium / totalDifficulty) * 100)}%`;
    difficultyHardBar.style.width = `${Math.round((difficulty.hard / totalDifficulty) * 100)}%`;

    const achievements = getAchievementDefinitions(user);
    profileAchievementsCount.textContent = `${achievements.filter(item => item.unlocked).length} unlocked`;
  }

  function renderRoadmap() {
    const roadmapItems = getTopicProgress(user);
    roadmapList.innerHTML = roadmapItems.map(topic => `
      <div class="roadmap-item ${topic.unlocked ? 'roadmap-unlocked' : 'roadmap-locked'}">
        <div class="roadmap-item-title">
          <strong>${topic.name}</strong>
          <span>${topic.unlocked ? 'Unlocked' : 'Locked'}</span>
        </div>
        <div class="roadmap-progress">
          <div class="roadmap-progress-bar" style="width: ${Math.round(topic.progress * 100)}%;"></div>
        </div>
      </div>
    `).join('');
  }

  function renderCurrentlyLearning() {
    const roadmapItems = getTopicProgress(user);
    const currentlyLearning = roadmapItems.filter(topic => topic.unlocked && topic.progress < 1);
    
    if (currentlyLearning.length === 0) {
      currentlyLearningList.innerHTML = '<p class="muted-text">Start learning DSA topics to see your progress here.</p>';
      return;
    }

    currentlyLearningList.innerHTML = currentlyLearning.map(topic => `
      <div class="learning-item">
        <div class="learning-item-header">
          <strong>${topic.name}</strong>
          <span class="learning-progress-percentage">${Math.round(topic.progress * 100)}%</span>
        </div>
        <div class="learning-progress-bar">
          <div class="learning-progress-fill" style="width: ${Math.round(topic.progress * 100)}%;"></div>
        </div>
      </div>
    `).join('');
  }

  function renderProgressStats() {
    const difficulty = getSolvedDifficultyCounts(user);
    const total = getSolvedCount(user);
    
    progressTotalSolved.textContent = total;
    progressEasySolved.textContent = difficulty.easy;
    progressMediumSolved.textContent = difficulty.medium;
    progressHardSolved.textContent = difficulty.hard;

    const totalDifficulty = Math.max(1, difficulty.easy + difficulty.medium + difficulty.hard);
    progressDifficultyEasyCount.textContent = difficulty.easy;
    progressDifficultyMediumCount.textContent = difficulty.medium;
    progressDifficultyHardCount.textContent = difficulty.hard;
    progressDifficultyEasyBar.style.width = `${Math.round((difficulty.easy / totalDifficulty) * 100)}%`;
    progressDifficultyMediumBar.style.width = `${Math.round((difficulty.medium / totalDifficulty) * 100)}%`;
    progressDifficultyHardBar.style.width = `${Math.round((difficulty.hard / totalDifficulty) * 100)}%`;
  }

  function renderAchievements() {
    const achievements = getAchievementDefinitions(user);
    achievementsGrid.innerHTML = achievements.map(achievement => `
      <div class="achievement-card ${achievement.unlocked ? 'achievement-unlocked' : 'achievement-locked'}">
        <h4>${achievement.title}</h4>
        <p>${achievement.description}</p>
        <div class="achievement-meta">
          <span>${achievement.unlocked ? 'Unlocked' : 'Locked'}</span>
          ${achievement.progress ? `<strong>${achievement.progress}</strong>` : ''}
        </div>
      </div>
    `).join('');
    profileAchievementsCount.textContent = `${achievements.filter(item => item.unlocked).length} unlocked`;
  }

  function renderActivity() {
    const activityEntries = [...(user.progress.recent || [])].reverse();
    profileActivity.innerHTML = activityEntries.length
      ? `<ul class="activity-list">${activityEntries.map(entry => `
          <li>
            <strong>${entry.problemName}</strong>
            <span>${entry.status}</span>
            <small>${new Date(entry.timestamp).toLocaleDateString()}</small>
          </li>
        `).join('')}</ul>`
      : '<p style="color: var(--muted);">No recent activity yet. Start solving problems to build momentum.</p>';
  }

  function updateProfileSections() {
    const hash = window.location.hash.toLowerCase();
    const showAchievements = hash === '#achievements';
    const showHistory = hash === '#history';

    if (achievementsSection) {
      achievementsSection.style.display = showAchievements ? 'block' : 'none';
      achievementsSection.setAttribute('aria-hidden', showAchievements ? 'false' : 'true');
    }
    if (historySection) {
      historySection.style.display = showHistory ? 'block' : 'none';
      historySection.setAttribute('aria-hidden', showHistory ? 'false' : 'true');
    }

    if (showAchievements) {
      renderAchievements();
      achievementsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (showHistory) {
      renderActivity();
      historySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function renderCalendar(year, month) {
    const today = new Date();
    const calendarEntries = getCalendarEntries(user, year, month);
    calendarMonthLabel.textContent = new Date(year, month - 1).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const cells = labels.map(label => `<div class="calendar-day-label">${label}</div>`);

    calendarEntries.forEach(week => {
      week.forEach(day => {
        if (!day) {
          cells.push('<div class="calendar-day empty"></div>');
          return;
        }

        const active = day.activity.count > 0;
        const isToday = day.dateString === todayDate();
        const dayClass = ['calendar-day', active ? 'active' : '', isToday ? 'today' : ''].filter(Boolean).join(' ');
        const detailLabel = active ? `${day.activity.count} activity item(s)` : 'No activity';

        cells.push(`
          <button type="button" class="${dayClass}" data-date="${day.dateString}" title="${detailLabel}">
            <span>${day.date}</span>
            ${active ? '<span class="calendar-dot"></span>' : ''}
          </button>
        `);
      });
    });

    calendarGrid.innerHTML = cells.join('');
    calendarGrid.querySelectorAll('.calendar-day').forEach(dayButton => {
      dayButton.addEventListener('click', () => showCalendarDetail(dayButton.dataset.date));
    });
  }

  function showCalendarDetail(dateString) {
    const activityMap = getActivityByDate(user);
    const entry = activityMap[dateString] || { count: 0, problems: [], dailyChallenge: null };
    const challenge = entry.dailyChallenge;
    const challengeDetail = challenge
      ? challenge.completedOnDate
        ? 'Daily challenge completed.'
        : challenge.solvedLater
          ? 'Daily challenge solved later.'
          : 'Daily challenge not completed.'
      : '';

    calendarHint.innerHTML = `
      <strong>${formatDateLabel(dateString)}</strong><br>
      ${entry.count} activity item(s). ${challengeDetail}
    `;
  }

  function renderAvatarOptions() {
    avatarGrid.innerHTML = getAvatarOptions().map(option => `
      <button type="button" class="avatar-option ${option.id === selectedAvatar ? 'selected' : ''}" data-avatar="${option.id}" title="${option.label}">
        ${option.svg}
      </button>
    `).join('');

    avatarGrid.querySelectorAll('.avatar-option').forEach(button => {
      button.addEventListener('click', () => {
        selectedAvatar = button.dataset.avatar;
        renderAvatarOptions();
      });
    });
  }

  function validateProfileForm() {
    const usernameValue = usernameInput.value.trim();
    if (!displayNameInput.value.trim()) {
      usernameValidation.textContent = 'Display name cannot be empty.';
      return false;
    }
    if (!validateUsernameFormat(usernameValue)) {
      usernameValidation.textContent = 'Username must be 3-20 letters, numbers, or underscores.';
      return false;
    }
    if (!isUsernameAvailable(usernameValue, user.id) && usernameValue.toLowerCase() !== String(user.profile?.username || '').toLowerCase()) {
      usernameValidation.textContent = 'That username is already taken.';
      return false;
    }
    usernameValidation.textContent = '';
    return true;
  }

  function openProfileModal() {
    selectedAvatar = user.profile?.avatar || 'developer';
    displayNameInput.value = user.profile?.displayName || user.name || '';
    usernameInput.value = user.profile?.username || '';
    profileAccentColor.value = normalizeAccentColor(user.profile?.accentColor || '#38bdf8');
    renderAvatarOptions();
    usernameValidation.textContent = '';
    profileModal.classList.add('open');
  }

  function closeProfileModal() {
    profileModal.classList.remove('open');
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    window.setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  profileForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!validateProfileForm()) return;
    const displayName = displayNameInput.value.trim();
    const usernameValue = usernameInput.value.trim();

    user.name = displayName;
    user.profile.displayName = displayName;
    user.profile.username = usernameValue;
    user.profile.avatar = selectedAvatar;
    user.profile.accentColor = normalizeAccentColor(profileAccentColor.value);
    saveUpdatedUser(user);
    renderProfileHeader();
    renderAchievements();
    showToast('Profile updated successfully.');
    closeProfileModal();
  });

  usernameInput.addEventListener('input', validateProfileForm);
  editProfileButton.addEventListener('click', openProfileModal);
  profileModalClose.addEventListener('click', closeProfileModal);
  cancelProfileButton.addEventListener('click', closeProfileModal);
  profileModal.addEventListener('click', event => {
    if (event.target === profileModal) {
      closeProfileModal();
    }
  });

  document.getElementById('logoutButton').addEventListener('click', () => {
    clearCurrentUser();
    window.location.href = 'index.html';
  });

  const currentDate = new Date();
  let calendarYear = currentDate.getFullYear();
  let calendarMonth = currentDate.getMonth() + 1;

  renderProfileHeader();
  renderRoadmap();
  renderCurrentlyLearning();
  renderProgressStats();
  renderActivity();
  renderCalendar(calendarYear, calendarMonth);
  updateProfileSections();
  window.addEventListener('hashchange', updateProfileSections);
  document.getElementById('calendarTodayButton').addEventListener('click', () => {
    calendarYear = currentDate.getFullYear();
    calendarMonth = currentDate.getMonth() + 1;
    renderCalendar(calendarYear, calendarMonth);
  });
});
