const STORAGE_KEY_USERS = 'codeTrack_users';
const STORAGE_KEY_CURRENT_USER = 'codeTrack_currentUser';
const STORAGE_KEY_THEME = 'codeTrack_theme';
const HINTS_PER_DAY = 3;

const AVATAR_OPTIONS = [
  { id: 'developer', label: 'Developer', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#38bdf8"/><stop offset="1" stop-color="#818cf8"/></linearGradient></defs><rect width="120" height="120" rx="30" fill="url(#g1)"/><circle cx="60" cy="60" r="34" fill="#0f172a"/><circle cx="46" cy="52" r="6" fill="#e2e8f0"/><circle cx="74" cy="52" r="6" fill="#e2e8f0"/><path d="M42 74c6 8 30 8 36 0" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M30 38c8-12 28-18 60-12" stroke="#e2e8f0" stroke-width="6" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'coder', label: 'Coder', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#1e293b"/><circle cx="60" cy="60" r="36" fill="#111827"/><rect x="32" y="44" width="56" height="10" rx="5" fill="#38bdf8"/><rect x="32" y="70" width="56" height="6" rx="3" fill="#38bdf8"/><circle cx="46" cy="52" r="6" fill="#f8fafc"/><circle cx="74" cy="52" r="6" fill="#f8fafc"/><path d="M42 74c6 8 30 8 36 0" stroke="#94a3b8" stroke-width="4" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'space', label: 'Space Coder', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#0f172a"/><circle cx="60" cy="62" r="38" fill="#1e293b"/><circle cx="44" cy="50" r="5" fill="#f8fafc"/><circle cx="76" cy="50" r="5" fill="#f8fafc"/><path d="M45 78c5 6 24 6 29 0" stroke="#38bdf8" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M28 32c10-6 28-12 56-6" stroke="#c084fc" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M85 32c8 6 6 18-4 22" stroke="#f8fafc" stroke-width="3" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'robot', label: 'Robot', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#94a3b8"/><rect x="26" y="30" width="68" height="60" rx="22" fill="#0f172a"/><circle cx="40" cy="60" r="8" fill="#38bdf8"/><circle cx="80" cy="60" r="8" fill="#38bdf8"/><rect x="44" y="84" width="32" height="10" rx="5" fill="#38bdf8"/><path d="M38 36c10-10 44-10 54 0" stroke="#e2e8f0" stroke-width="6" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'fox', label: 'Fox', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#f97316"/><path d="M30 42c12-20 36-20 60 0l-8 26c-10 12-36 12-46 0z" fill="#111827"/><path d="M54 46c0 8 6 14 14 14s14-6 14-14" fill="#fcd34d"/><circle cx="46" cy="66" r="7" fill="#111827"/><circle cx="74" cy="66" r="7" fill="#111827"/><path d="M50 86c8 6 20 6 28 0" stroke="#111827" stroke-width="5" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'panda', label: 'Panda', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#111827"/><circle cx="60" cy="66" r="34" fill="#f8fafc"/><ellipse cx="42" cy="56" rx="10" ry="14" fill="#0f172a"/><ellipse cx="78" cy="56" rx="10" ry="14" fill="#0f172a"/><circle cx="46" cy="70" r="4" fill="#111827"/><circle cx="74" cy="70" r="4" fill="#111827"/><path d="M48 84c6 6 18 6 24 0" stroke="#111827" stroke-width="5" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'cat', label: 'Cat', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#4338ca"/><path d="M42 38c10-18 36-18 48 0l-10 18c-10 12-28 12-38 0z" fill="#1e293b"/><circle cx="52" cy="64" r="7" fill="#f8fafc"/><circle cx="68" cy="64" r="7" fill="#f8fafc"/><path d="M50 82c6 6 16 6 22 0" stroke="#f8fafc" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M42 44c8 10 28 10 36 0" stroke="#f8fafc" stroke-width="4" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'frog', label: 'Frog', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#22c55e"/><circle cx="60" cy="68" r="36" fill="#166534"/><circle cx="44" cy="54" r="10" fill="#f8fafc"/><circle cx="76" cy="54" r="10" fill="#f8fafc"/><circle cx="44" cy="54" r="4" fill="#166534"/><circle cx="76" cy="54" r="4" fill="#166534"/><path d="M44 82c8 6 24 6 32 0" stroke="#f8fafc" stroke-width="5" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'owl', label: 'Owl', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#0f172a"/><path d="M30 42c14-18 56-18 60 0 0 0 6 26-30 36-36-10-30-36-30-36z" fill="#fbbf24"/><circle cx="44" cy="64" r="10" fill="#111827"/><circle cx="76" cy="64" r="10" fill="#111827"/><circle cx="44" cy="64" r="4" fill="#f8fafc"/><circle cx="76" cy="64" r="4" fill="#f8fafc"/><path d="M48 82c8 6 20 6 28 0" stroke="#111827" stroke-width="5" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'tiger', label: 'Tiger', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#fb923c"/><circle cx="60" cy="64" r="36" fill="#facc15"/><path d="M34 42c10-16 36-16 52 0" stroke="#f97316" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="48" cy="64" r="8" fill="#111827"/><circle cx="72" cy="64" r="8" fill="#111827"/><path d="M50 84c6 6 16 6 22 0" stroke="#111827" stroke-width="4" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'rabbit', label: 'Rabbit', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#8b5cf6"/><circle cx="60" cy="68" r="34" fill="#f8fafc"/><ellipse cx="46" cy="54" rx="8" ry="10" fill="#111827"/><ellipse cx="74" cy="54" rx="8" ry="10" fill="#111827"/><path d="M52 86c6 6 16 6 22 0" stroke="#111827" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M38 28c4-18 20-24 22-24s18 6 22 24" stroke="#f8fafc" stroke-width="10" fill="none" stroke-linecap="round"/></svg>' },
  { id: 'alien', label: 'Pixel Alien', svg: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="30" fill="#0f172a"/><circle cx="60" cy="64" r="34" fill="#22c55e"/><ellipse cx="46" cy="56" rx="8" ry="12" fill="#111827"/><ellipse cx="74" cy="56" rx="8" ry="12" fill="#111827"/><path d="M42 84c6 6 30 6 36 0" stroke="#111827" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M38 34c6 10 14 12 22 12s16-2 22-12" stroke="#111827" stroke-width="6" fill="none" stroke-linecap="round"/></svg>' }
];

const LEVEL_THRESHOLDS = [0, 100, 250, 500, 800, 1200, 1700, 2300, 3000, 3800, 4700, 5700, 6800, 8000, 9300, 10700, 12200, 13800, 15500, 17300, 19200];

const appState = {
  currentUser: null,
  filters: {
    difficulty: 'all',
    language: 'all',
    status: 'all',
    query: '',
    topic: 'all'
  },
  currentProblemId: null,
  theme: 'dark'
};

function loadUsers() {
  const raw = localStorage.getItem(STORAGE_KEY_USERS);
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw) || [];
  } catch (error) {
    console.warn('Failed to parse users from storage.', error);
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}

function getUserById(id) {
  const users = loadUsers();
  return users.find(user => user.id === id) || null;
}

function getUserByEmail(email) {
  return loadUsers().find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
}

function getCurrentUser() {
  if (appState.currentUser) {
    return appState.currentUser;
  }
  const userId = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
  if (!userId) {
    return null;
  }
  const user = getUserById(Number(userId));
  if (user) {
    ensureUserProgress(user);
    appState.currentUser = user;
    return appState.currentUser;
  }
  return null;
}

function setCurrentUser(user) {
  if (!user || !user.id) return;
  localStorage.setItem(STORAGE_KEY_CURRENT_USER, String(user.id));
  ensureUserProgress(user);
  appState.currentUser = user;
}

function logoutUser() {
  localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
  appState.currentUser = null;
  window.location.href = 'index.html';
}

function ensureUserProgress(user) {
  if (!user.profile) {
    user.profile = {
      displayName: user.name || 'CodeTracker',
      username: `user${user.id}`,
      avatar: 'developer',
      xp: 0,
      level: 1,
      accentColor: '#38bdf8'
    };
  }
  if (!user.progress) {
    user.progress = {
      solved: [],
      attempts: {},
      recent: [],
      activity: [],
      submissions: [],
      streakDates: [],
      dailyChallengeDates: [],
      dailyChallengeHistory: [],
      hintUsage: { date: todayDate(), used: 0 },
      hintsUnlocked: {},
      customTests: {},
      timers: {},
      achievements: [],
      xpAwards: {}
    };
    saveUpdatedUser(user);
  }
  if (!user.progress.solved) user.progress.solved = [];
  if (!user.progress.attempts) user.progress.attempts = {};
  if (!user.progress.recent) user.progress.recent = [];
  if (!user.progress.activity) user.progress.activity = [];
  if (!user.progress.submissions) user.progress.submissions = [];
  if (!user.progress.streakDates) user.progress.streakDates = [];
  if (!user.progress.dailyChallengeDates) user.progress.dailyChallengeDates = [];
  if (!user.progress.dailyChallengeHistory) user.progress.dailyChallengeHistory = [];
  if (!user.progress.hintUsage) user.progress.hintUsage = { date: todayDate(), used: 0 };
  if (!user.progress.hintsUnlocked) user.progress.hintsUnlocked = {};
  if (!user.progress.customTests) user.progress.customTests = {};
  if (!user.progress.timers) user.progress.timers = {};
  if (!user.progress.achievements) user.progress.achievements = [];
  if (!user.progress.xpAwards) user.progress.xpAwards = {};
  if (!user.profile) {
    user.profile = {
      displayName: user.name || 'CodeTracker',
      username: `user${user.id}`,
      avatar: 'developer',
      xp: 0,
      level: 1,
      accentColor: '#38bdf8'
    };
  }
}

function saveUpdatedUser(user) {
  const users = loadUsers();
  const existingIndex = users.findIndex(item => item.id === user.id);
  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }
  saveUsers(users);
  if (appState.currentUser && appState.currentUser.id === user.id) {
    appState.currentUser = user;
  }
}

function createUser(name, email, password) {
  const existing = getUserByEmail(email);
  if (existing) {
    return { error: 'A user with that email already exists.' };
  }
  const users = loadUsers();
  const id = Date.now();
  const user = {
    id,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password,
    memberSince: todayDate(),
    profile: {
      displayName: name.trim(),
      username: `user${id}`,
      avatar: 'developer',
      xp: 0,
      level: 1,
      accentColor: '#38bdf8'
    },
    progress: {
      solved: [],
      attempts: {},
      recent: [],
      activity: [],
      submissions: [],
      streakDates: [],
      dailyChallengeDates: [],
      dailyChallengeHistory: [],
      hintUsage: { date: todayDate(), used: 0 },
      hintsUnlocked: {},
      customTests: {},
      timers: {},
      achievements: []
    }
  };
  users.push(user);
  saveUsers(users);
  return { user };
}

function createDemoUser() {
  let demo = getUserByEmail('demo@codetrack.local');
  if (!demo) {
    const users = loadUsers();
    const id = Date.now();
    demo = {
      id,
      name: 'Demo User',
      email: 'demo@codetrack.local',
      password: 'demo1234',
      memberSince: todayDate(),
      profile: {
        displayName: 'Demo Coder',
        username: 'democoder',
        avatar: 'coder',
        xp: 170,
        level: 2,
        accentColor: '#38bdf8'
      },
      progress: {
        solved: [1, 2],
        attempts: {
          1: { attempted: true, attemptCount: 1, lastAttempt: todayDate(), status: 'solved', hintUnlocked: 1 },
          2: { attempted: true, attemptCount: 1, lastAttempt: todayDate(), status: 'solved', hintUnlocked: 1 }
        },
        recent: [
          { problemId: 1, problemName: 'Two Sum', status: 'Solved', timestamp: new Date().toISOString() },
          { problemId: 2, problemName: 'Contains Duplicate', status: 'Solved', timestamp: new Date().toISOString() }
        ],
        activity: [
          { type: 'solved', label: 'Solved Two Sum', problemId: 1, createdAt: todayDate() },
          { type: 'solved', label: 'Solved Contains Duplicate', problemId: 2, createdAt: todayDate() }
        ],
        submissions: [
          { problemId: 1, timestamp: new Date().toISOString(), language: 'java', status: 'Accepted', action: 'Submit', runtime: 42, memory: 18.4, solveTime: 12 },
          { problemId: 2, timestamp: new Date().toISOString(), language: 'java', status: 'Accepted', action: 'Submit', runtime: 55, memory: 19.1, solveTime: 9 }
        ],
        streakDates: [todayDate()],
        dailyChallengeDates: [todayDate()],
        dailyChallengeHistory: [
          { date: todayDate(), problemId: 1, completedOnDate: true, solvedLater: false }
        ],
        hintUsage: { date: todayDate(), used: 1 },
        hintsUnlocked: { 1: 1, 2: 1 },
        customTests: {},
        timers: {},
        achievements: []
      }
    };
    users.push(demo);
    saveUsers(users);
  }
  return demo;
}

function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'index.html';
    return null;
  }
  return user;
}

function enforceAuth() {
  return Boolean(requireAuth());
}

function clearCurrentUser() {
  logoutUser();
}

function saveCurrentUser(user) {
  if (!user) return;
  saveUpdatedUser(user);
  if (appState.currentUser && appState.currentUser.id === user.id) {
    appState.currentUser = user;
  }
}

function capitalize(value) {
  if (!value && value !== 0) return '';
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function saveCurrentUserProgress() {
  if (!appState.currentUser) return;
  saveUpdatedUser(appState.currentUser);
}

function todayDate() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

function parseDate(dateString) {
  return new Date(dateString + 'T00:00:00');
}

function formatDateLabel(dateString) {
  const date = parseDate(dateString);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatRelativeTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return Math.floor(diff / 60) + ' minutes ago';
  if (diff < 86400) return Math.floor(diff / 3600) + ' hours ago';
  return Math.floor(diff / 86400) + ' days ago';
}

function getProblemById(id) {
  return problems.find(problem => Number(problem.id) === Number(id)) || null;
}

function getSolvedCount(user) {
  return user.progress?.solved?.length || 0;
}

function getAttemptCount(user) {
  return Object.values(user.progress.attempts || {}).reduce((sum, attempt) => sum + (attempt.attemptCount || 0), 0);
}

function getCurrentStreak(user) {
  const dates = [...new Set(user.progress.streakDates || [])].sort();
  if (!dates.length) return 0;
  let streak = 0;
  let current = new Date();
  for (let i = dates.length - 1; i >= 0; i -= 1) {
    const entry = parseDate(dates[i]);
    const diffDays = Math.round((current - entry) / (1000 * 60 * 60 * 24));
    if (diffDays === 0 || diffDays === streak) {
      streak += 1;
      current = new Date(entry.getTime() - 24 * 60 * 60 * 1000);
    } else {
      break;
    }
  }
  return streak;
}

function getHintUsage(user) {
  const hintUsage = user.progress?.hintUsage || { date: todayDate(), used: 0 };
  if (hintUsage.date !== todayDate()) {
    hintUsage.date = todayDate();
    hintUsage.used = 0;
    saveUpdatedUser(user);
  }
  return hintUsage;
}

function getHintRemaining(user) {
  const hintUsage = getHintUsage(user);
  return Math.max(0, HINTS_PER_DAY - hintUsage.used);
}

function useHint(user) {
  const hintUsage = getHintUsage(user);
  if (hintUsage.used >= HINTS_PER_DAY) {
    return false;
  }
  hintUsage.used += 1;
  saveUpdatedUser(user);
  return true;
}

function getTopicCounts(user) {
  const solved = new Set(user.progress.solved || []);
  const stats = { solved: {}, unsolved: {} };
  problems.forEach(problem => {
    const solvedStatus = solved.has(problem.id);
    problem.topics.forEach(topic => {
      const bucket = solvedStatus ? stats.solved : stats.unsolved;
      bucket[topic] = (bucket[topic] || 0) + 1;
    });
  });
  return stats;
}

function getUserActivity(user) {
  return [...(user.progress.activity || [])].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function addActivity(user, activity) {
  user.progress.activity = user.progress.activity || [];
  user.progress.activity.unshift({ ...activity, createdAt: new Date().toISOString() });
  user.progress.activity = user.progress.activity.slice(0, 30);
  saveUpdatedUser(user);
}

function recordSubmission(user, submission) {
  user.progress.submissions = user.progress.submissions || [];
  const previousSubmissions = user.progress.submissions.filter(entry => entry.problemId === submission.problemId);
  const attemptOrder = previousSubmissions.length + 1;
  user.progress.submissions.unshift({
    ...submission,
    timestamp: new Date().toISOString(),
    attemptOrder
  });
  user.progress.submissions = user.progress.submissions.slice(0, 50);
  saveUpdatedUser(user);
}

function getSubmissionHistory(user) {
  return [...(user.progress.submissions || [])];
}

function setFilter(key, value) {
  appState.filters[key] = value;
}

function getDateSeed(dateString = todayDate()) {
  const [year, month, day] = dateString.split('-').map(Number);
  return year * 10000 + month * 100 + day;
}

function getDailyChallenge(dateString = todayDate()) {
  if (!problems || !problems.length) return null;
  const index = getDateSeed(dateString) % problems.length;
  return problems[index];
}

function getDailyChallengeRecord(user, dateString = todayDate()) {
  return (user.progress.dailyChallengeHistory || []).find(entry => entry.date === dateString) || null;
}

function addOrUpdateDailyChallengeHistory(user, dateString, problemId, completedOnDate, solvedLater = false) {
  user.progress.dailyChallengeHistory = user.progress.dailyChallengeHistory || [];
  const existing = user.progress.dailyChallengeHistory.find(entry => entry.date === dateString);
  if (existing) {
    existing.problemId = problemId;
    existing.completedOnDate = completedOnDate;
    existing.solvedLater = solvedLater;
  } else {
    user.progress.dailyChallengeHistory.push({ date: dateString, problemId, completedOnDate, solvedLater });
  }
  user.progress.dailyChallengeHistory.sort((a, b) => a.date.localeCompare(b.date));
  saveUpdatedUser(user);
  return getDailyChallengeRecord(user, dateString);
}

function getMissedDailyChallenges(user) {
  const today = todayDate();
  return (user.progress.dailyChallengeHistory || [])
    .filter(entry => entry.date < today && !entry.completedOnDate)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function backfillDailyChallengeHistory(user, days = 30) {
  user.progress.dailyChallengeHistory = user.progress.dailyChallengeHistory || [];
  const knownDates = new Set(user.progress.dailyChallengeHistory.map(entry => entry.date));
  const today = parseDate(todayDate());
  for (let offset = 0; offset <= days; offset += 1) {
    const date = new Date(today.getTime() - offset * 24 * 60 * 60 * 1000);
    const dateString = date.toISOString().slice(0, 10);
    if (knownDates.has(dateString)) continue;
    const problemId = getDailyChallenge(dateString)?.id || null;
    if (!problemId) continue;
    const isToday = dateString === todayDate();
    user.progress.dailyChallengeHistory.push({
      date: dateString,
      problemId,
      completedOnDate: false,
      solvedLater: false
    });
  }
  user.progress.dailyChallengeHistory.sort((a, b) => a.date.localeCompare(b.date));
  saveUpdatedUser(user);
}

function markMissedChallengeSolvedLater(user, problemId) {
  user.progress.dailyChallengeHistory = user.progress.dailyChallengeHistory || [];
  let updated = false;
  user.progress.dailyChallengeHistory.forEach(entry => {
    if (entry.problemId === problemId && entry.date < todayDate() && !entry.completedOnDate && !entry.solvedLater) {
      entry.solvedLater = true;
      updated = true;
    }
  });
  if (updated) saveUpdatedUser(user);
}

function getActivityByDate(user) {
  const map = {};
  (user.progress.activity || []).forEach(entry => {
    const dateKey = entry.createdAt.slice(0, 10);
    map[dateKey] = map[dateKey] || { count: 0, problems: [], dailyChallenge: null };
    map[dateKey].count += 1;
    if (entry.problemId) {
      map[dateKey].problems.push(entry.problemId);
    }
  });
  (user.progress.submissions || []).forEach(entry => {
    const dateKey = entry.timestamp.slice(0, 10);
    map[dateKey] = map[dateKey] || { count: 0, problems: [], dailyChallenge: null };
    if (entry.status.toLowerCase() === 'accepted') {
      map[dateKey].count += 1;
      if (entry.problemId) map[dateKey].problems.push(entry.problemId);
    }
  });
  (user.progress.dailyChallengeHistory || []).forEach(entry => {
    if (!map[entry.date]) return;
    map[entry.date].dailyChallenge = entry;
  });
  return map;
}

function getCalendarEntries(user, year, month) {
  const activityMap = getActivityByDate(user);
  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const calendar = [];
  let week = new Array(firstDay.getDay()).fill(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateString = `${year.toString().padStart(4, '0')}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    week.push({
      date: day,
      dateString,
      activity: activityMap[dateString] || { count: 0, problems: [], dailyChallenge: null }
    });
    if (week.length === 7 || day === daysInMonth) {
      while (week.length < 7) week.push(null);
      calendar.push(week);
      week = [];
    }
  }
  return calendar;
}

function calculateStreaks(user) {
  const dates = Array.from(new Set(user.progress.streakDates || [])).sort();
  if (!dates.length) return { current: 0, longest: 0 };
  const normalized = dates.map(date => parseDate(date));
  let longest = 1;
  let current = 1;
  let temp = 1;
  for (let i = 1; i < normalized.length; i += 1) {
    const diff = (normalized[i] - normalized[i - 1]) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      temp += 1;
      longest = Math.max(longest, temp);
    } else if (diff === 0) {
      continue;
    } else {
      temp = 1;
    }
  }
  const today = parseDate(todayDate());
  const lastDate = normalized[normalized.length - 1];
  if ((today - lastDate) / (1000 * 60 * 60 * 24) > 1) {
    current = 0;
  } else {
    current = temp;
  }
  return { current, longest };
}

function getDailyChallengeStreak(user) {
  const dates = Array.from(new Set(user.progress.dailyChallengeDates || [])).sort();
  if (!dates.length) return 0;
  const normalized = dates.map(date => parseDate(date));
  let streak = 1;
  for (let i = normalized.length - 1; i > 0; i -= 1) {
    const diff = (normalized[i] - normalized[i - 1]) / (1000 * 60 * 60 * 24);
    if (diff === 1) streak += 1;
    else break;
  }
  const lastDate = normalized[normalized.length - 1];
  if ((parseDate(todayDate()) - lastDate) / (1000 * 60 * 60 * 24) > 1) {
    return 0;
  }
  return streak;
}

function recordSolveDate(user, dateString = todayDate()) {
  user.progress.streakDates = Array.from(new Set([...(user.progress.streakDates || []), dateString]));
  saveUpdatedUser(user);
}

function recordDailyChallengeCompletion(user, dateString = todayDate(), problemId) {
  const todayChallenge = getDailyChallenge(dateString);
  if (!todayChallenge || todayChallenge.id !== problemId) {
    return addOrUpdateDailyChallengeHistory(user, dateString, problemId, false, true);
  }
  if (!user.progress.dailyChallengeDates.includes(dateString)) {
    user.progress.dailyChallengeDates.push(dateString);
  }
  addOrUpdateDailyChallengeHistory(user, dateString, problemId, true, false);
  awardXp(user, 20, `daily_challenge_${dateString}`, 'Daily challenge bonus');
  return getDailyChallengeRecord(user, dateString);
}

function getDailyChallengeStatus(user, dateString = todayDate()) {
  const record = getDailyChallengeRecord(user, dateString);
  if (!record) return 'Not Completed';
  if (record.completedOnDate) return 'Completed';
  if (record.solvedLater) return 'Missed';
  return 'Not Completed';
}

function getTopicProgress(user) {
  const topicTotals = {};
  const topicSolved = {};
  problems.forEach(problem => {
    problem.topics.forEach(topic => {
      topicTotals[topic] = (topicTotals[topic] || 0) + 1;
      if ((user.progress.solved || []).includes(problem.id)) {
        topicSolved[topic] = (topicSolved[topic] || 0) + 1;
      }
    });
  });
  const roadmap = [
    { name: 'Arrays', prereq: [] },
    { name: 'Strings', prereq: ['Arrays'] },
    { name: 'Hash Table', prereq: ['Arrays', 'Strings'] },
    { name: 'Two Pointers', prereq: ['Arrays'] },
    { name: 'Sliding Window', prereq: ['Two Pointers'] },
    { name: 'Stack', prereq: ['Arrays', 'Strings'] },
    { name: 'Queue', prereq: ['Arrays'] },
    { name: 'Binary Search', prereq: ['Two Pointers'] },
    { name: 'Linked List', prereq: ['Arrays'] },
    { name: 'Trees', prereq: ['Binary Search', 'Linked List'] },
    { name: 'Binary Trees', prereq: ['Trees'] },
    { name: 'BST', prereq: ['Binary Search', 'Trees'] },
    { name: 'Heap / Priority Queue', prereq: ['Binary Search', 'Hash Table'] },
    { name: 'Graphs', prereq: ['Trees'] },
    { name: 'Greedy', prereq: ['Arrays'] },
    { name: 'Backtracking', prereq: ['Arrays'] },
    { name: 'Dynamic Programming', prereq: ['Greedy', 'Binary Search', 'Trees'] }
  ];
  return roadmap.map(topic => {
    const totalProblems = topicTotals[topic.name] || 0;
    const solvedProblems = topicSolved[topic.name] || 0;
    const progress = totalProblems ? solvedProblems / totalProblems : 0;
    const prereqComplete = topic.prereq.every(pr => {
      const prTotal = topicTotals[pr] || 0;
      const prSolved = topicSolved[pr] || 0;
      return prTotal === 0 || prSolved / prTotal >= 0.5;
    });
    return {
      name: topic.name,
      totalProblems,
      solvedProblems,
      progress,
      unlocked: prereqComplete || solvedProblems > 0 || !topic.prereq.length,
      prerequisites: topic.prereq
    };
  });
}

function getAvatarOptions() {
  return AVATAR_OPTIONS;
}

function getAvatarOption(avatarId) {
  return AVATAR_OPTIONS.find(item => item.id === avatarId) || AVATAR_OPTIONS[0];
}

function validateUsernameFormat(username) {
  return /^[A-Za-z0-9_]{3,20}$/.test(String(username).trim());
}

function isUsernameAvailable(username, userId = null) {
  const value = String(username).trim().toLowerCase();
  if (!validateUsernameFormat(value)) return false;
  return !loadUsers().some(user => user.profile && String(user.profile.username).toLowerCase() === value && user.id !== userId);
}

function getLevelInfo(user) {
  const xp = Number(user.profile?.xp || 0);
  let level = 1;
  let previousThreshold = 0;
  let nextThreshold = LEVEL_THRESHOLDS[1] || 100;

  for (let index = 0; index < LEVEL_THRESHOLDS.length; index += 1) {
    const threshold = LEVEL_THRESHOLDS[index];
    if (xp >= threshold) {
      level = index + 1;
      previousThreshold = threshold;
      nextThreshold = LEVEL_THRESHOLDS[index + 1] || threshold + 500;
    } else {
      break;
    }
  }

  const currentXp = xp - previousThreshold;
  const required = nextThreshold - previousThreshold;
  const progress = required > 0 ? Math.min(1, currentXp / required) : 1;
  return {
    xp,
    level,
    previousThreshold,
    nextThreshold,
    currentXp,
    xpToNext: Math.max(0, nextThreshold - xp),
    progress
  };
}

function getLevelTitle(level) {
  if (level <= 2) return '🌱 Beginner';
  if (level <= 4) return '💻 Code Learner';
  if (level <= 7) return '🧠 Problem Solver';
  if (level <= 10) return '⚔️ Algorithm Apprentice';
  if (level <= 15) return '🔥 Code Warrior';
  if (level <= 20) return '👑 Algorithm Master';
  return '💎 DSA Legend';
}

function awardXp(user, amount, xpKey, label) {
  if (!user.profile || !amount || !xpKey) return false;
  user.progress.xpAwards = user.progress.xpAwards || {};
  if (user.progress.xpAwards[xpKey]) return false;
  user.progress.xpAwards[xpKey] = { amount, label, awardedAt: new Date().toISOString() };
  user.profile.xp = (Number(user.profile.xp) || 0) + amount;
  const levelInfo = getLevelInfo(user);
  user.profile.level = levelInfo.level;
  saveUpdatedUser(user);
  addActivity(user, { type: 'xp', label: `${label} (+${amount} XP)` });
  return true;
}

function getAvatarSvg(avatarId) {
  return getAvatarOption(avatarId).svg;
}

function getProfileLevelTitle(user) {
  return getLevelTitle(Number(user.profile?.level || 1));
}

function getProfileProgress(user) {
  return getLevelInfo(user);
}

function getUserLevelStyle(user) {
  return user.profile?.accentColor || '#38bdf8';
}

function awardSolveXp(user, problem, firstAttempt) {
  if (!problem) return;
  const values = { easy: 10, medium: 25, hard: 50 };
  awardXp(user, values[problem.difficulty] || 10, `solve_${problem.id}`, `Solved ${problem.name}`);
  if (firstAttempt) {
    awardXp(user, 5, `first_submit_${problem.id}`, 'First successful submission');
  }
}

function getChallengesSummary(user) {
  const history = user.progress.dailyChallengeHistory || [];
  const completed = history.filter(entry => entry.completedOnDate).length;
  const missed = history.filter(entry => entry.date < todayDate() && !entry.completedOnDate).length;
  return { completed, missed, streak: getDailyChallengeStreak(user) };
}

function getSolvedDifficultyCounts(user) {
  const solved = new Set(user.progress.solved || []);
  return {
    easy: problems.filter(problem => problem.difficulty === 'easy' && solved.has(problem.id)).length,
    medium: problems.filter(problem => problem.difficulty === 'medium' && solved.has(problem.id)).length,
    hard: problems.filter(problem => problem.difficulty === 'hard' && solved.has(problem.id)).length
  };
}

function normalizeAccentColor(color) {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color) ? color : '#38bdf8';
}

function calculateWeakTopics(user) {
  const topicStats = {};
  const submissions = user.progress.submissions || [];
  submissions.forEach(entry => {
    const problem = getProblemById(entry.problemId);
    if (!problem) return;
    problem.topics.forEach(topic => {
      topicStats[topic] = topicStats[topic] || { attempts: 0, accepted: 0, wrong: 0, runtime: 0, compile: 0, problems: new Set() };
      const stats = topicStats[topic];
      stats.attempts += 1;
      stats.problems.add(problem.id);
      const status = (entry.status || '').toLowerCase();
      if (status === 'accepted') stats.accepted += 1;
      if (status === 'wrong_answer') stats.wrong += 1;
      if (status === 'runtime_error') stats.runtime += 1;
      if (status === 'compile_error') stats.compile += 1;
    });
  });
  const weak = Object.entries(topicStats).map(([topic, stats]) => {
    const success = stats.attempts ? Math.round((stats.accepted / stats.attempts) * 100) : 0;
    return {
      topic,
      attempts: stats.attempts,
      accepted: stats.accepted,
      wrong: stats.wrong,
      runtime: stats.runtime,
      compile: stats.compile,
      successRate: success
    };
  }).filter(item => item.attempts > 0);
  if (!weak.length) return [];
  weak.sort((a, b) => a.successRate - b.successRate || a.attempts - b.attempts);
  return weak.slice(0, 5);
}

function getPracticeProblemsForTopic(topic) {
  if (!topic) return [];
  const user = appState.currentUser || getCurrentUser();
  const solvedSet = new Set(user.progress.solved || []);
  return problems
    .filter(problem => problem.topics.includes(topic))
    .sort((a, b) => {
      const aSolved = solvedSet.has(a.id);
      const bSolved = solvedSet.has(b.id);
      if (aSolved !== bSolved) return aSolved ? 1 : -1;
      const aDifficulty = ['easy', 'medium', 'hard'].indexOf(a.difficulty);
      const bDifficulty = ['easy', 'medium', 'hard'].indexOf(b.difficulty);
      return aDifficulty - bDifficulty;
    });
}

function refreshAchievements(user) {
  const solvedCount = getSolvedCount(user);
  const mediumSolved = problems.filter(problem => problem.difficulty === 'medium' && user.progress.solved.includes(problem.id)).length;
  const hardSolved = problems.filter(problem => problem.difficulty === 'hard' && user.progress.solved.includes(problem.id)).length;
  const errorCount = (user.progress.submissions || []).filter(entry => ['runtime_error', 'compile_error'].includes(entry.status.toLowerCase())).length;
  const firstSubmissionSuccess = user.progress.submissions.some(entry => entry.status.toLowerCase() === 'accepted' && entry.action === 'Submit' && entry.attemptOrder === 1);
  const currentStreak = calculateStreaks(user).current;
  const dailyChallengeStreak = getDailyChallengeStreak(user);
  const topicsSolved = {};
  problems.forEach(problem => {
    if (user.progress.solved.includes(problem.id)) {
      problem.topics.forEach(topic => { topicsSolved[topic] = (topicsSolved[topic] || 0) + 1; });
    }
  });
  const topicMaster = problems.some(problem => {
    const topic = problem.topics[0];
    const total = problems.filter(p => p.topics.includes(topic)).length;
    const solved = topicsSolved[topic] || 0;
    return total && solved === total;
  });
  const achievements = [
    { id: 'first_blood', title: 'First Blood', description: 'Solve your first problem.', unlocked: solvedCount >= 1, progress: `${solvedCount}/1` },
    { id: 'week_warrior', title: 'Week Warrior', description: 'Maintain a 7-day streak.', unlocked: currentStreak >= 7, progress: `${currentStreak}/7` },
    { id: 'problem_solver', title: 'Problem Solver', description: 'Solve 50 problems.', unlocked: solvedCount >= 50, progress: `${solvedCount}/50` },
    { id: 'medium_master', title: 'Medium Master', description: 'Solve 25 Medium problems.', unlocked: mediumSolved >= 25, progress: `${mediumSolved}/25` },
    { id: 'hard_mode', title: 'Hard Mode', description: 'Solve your first Hard problem.', unlocked: hardSolved >= 1, progress: `${hardSolved}/1` },
    { id: 'debugger', title: 'Debugger', description: 'Fix 10 runtime/compilation errors.', unlocked: errorCount >= 10, progress: `${errorCount}/10` },
    { id: 'early_bird', title: 'Early Bird', description: 'Solve a problem before 9 AM.', unlocked: (user.progress.submissions || []).some(entry => entry.status.toLowerCase() === 'accepted' && new Date(entry.timestamp).getHours() < 9), progress: '' },
    { id: 'night_coder', title: 'Night Coder', description: 'Solve a problem after 10 PM.', unlocked: (user.progress.submissions || []).some(entry => entry.status.toLowerCase() === 'accepted' && new Date(entry.timestamp).getHours() >= 22), progress: '' },
    { id: 'perfect_run', title: 'Perfect Run', description: 'Solve a problem on the first submission.', unlocked: firstSubmissionSuccess, progress: '' },
    { id: 'bug_hunter', title: 'Bug Hunter', description: 'Fix 10 errors.', unlocked: errorCount >= 10, progress: `${errorCount}/10` },
    { id: 'century', title: 'Century', description: 'Solve 100 problems.', unlocked: solvedCount >= 100, progress: `${solvedCount}/100` },
    { id: 'month_master', title: 'Month Master', description: 'Maintain a 30-day streak.', unlocked: dailyChallengeStreak >= 30, progress: `${dailyChallengeStreak}/30` },
    { id: 'topic_master', title: 'Topic Master', description: 'Complete all problems in one topic.', unlocked: topicMaster, progress: '' }
  ]; 
  const previous = new Set(user.progress.achievements || []);
  const unlockedIds = achievements.filter(achievement => achievement.unlocked).map(item => item.id);
  user.progress.achievements = unlockedIds;
  saveUpdatedUser(user);
  unlockedIds.forEach(id => {
    if (!previous.has(id)) {
      const achievement = achievements.find(item => item.id === id);
      if (achievement) {
        awardXp(user, 25, `achievement_${id}`, `Achievement unlocked: ${achievement.title}`);
      }
    }
  });
  return achievements;
}

function getAchievementDefinitions(user) {
  return refreshAchievements(user);
}

function getAverageSolveTimes(user) {
  const accepted = (user.progress.submissions || []).filter(entry => entry.status.toLowerCase() === 'accepted' && Number(entry.solveTime) >= 0);
  const buckets = { easy: [], medium: [], hard: [] };
  accepted.forEach(entry => {
    const problem = getProblemById(entry.problemId);
    if (!problem) return;
    buckets[problem.difficulty].push(Number(entry.solveTime));
  });
  return {
    easy: buckets.easy.length ? Math.round(buckets.easy.reduce((sum, time) => sum + time, 0) / buckets.easy.length) : 0,
    medium: buckets.medium.length ? Math.round(buckets.medium.reduce((sum, time) => sum + time, 0) / buckets.medium.length) : 0,
    hard: buckets.hard.length ? Math.round(buckets.hard.reduce((sum, time) => sum + time, 0) / buckets.hard.length) : 0
  };
}

function getProblemTimer(user, problemId) {
  user.progress.timers = user.progress.timers || {};
  return user.progress.timers[problemId] || { elapsed: 0, runningSince: null, paused: false };
}

function saveProblemTimer(user, problemId, timerState) {
  user.progress.timers = user.progress.timers || {};
  user.progress.timers[problemId] = timerState;
  saveUpdatedUser(user);
}

function getCustomTestHistory(user, problemId) {
  user.progress.customTests = user.progress.customTests || {};
  return user.progress.customTests[problemId] || [];
}

function saveCustomTestHistory(user, problemId, testRecord) {
  user.progress.customTests = user.progress.customTests || {};
  user.progress.customTests[problemId] = user.progress.customTests[problemId] || [];
  user.progress.customTests[problemId].unshift(testRecord);
  user.progress.customTests[problemId] = user.progress.customTests[problemId].slice(0, 10);
  saveUpdatedUser(user);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
