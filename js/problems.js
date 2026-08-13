window.addEventListener('DOMContentLoaded', () => {
  const user = requireAuth();
  if (!user) return;
  loadTheme();

  const searchInput = document.getElementById('searchInput');
  const problemCards = document.getElementById('problemCards');
  const querySummary = document.getElementById('querySummary');
  const problemsCount = document.getElementById('problemsCount');
  const difficultyFilterContainer = document.getElementById('difficultyFilters');
  const languageFilterContainer = document.getElementById('languageFilters');
  const statusFilterContainer = document.getElementById('statusFilters');
  const topicFilterContainer = document.getElementById('topicFilters');

  const languageOptions = Array.from(new Set(problems.flatMap(problem => problem.languages || [problem.language]))).sort();
  const topicOptions = Array.from(new Set(problems.flatMap(problem => problem.topics))).sort();

  difficultyFilterContainer.innerHTML = `
    <select id="filterDifficulty" class="select-field">
      <option value="all">All</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  `;
  languageFilterContainer.innerHTML = `
    <select id="filterLanguage" class="select-field">
      <option value="all">All</option>
      ${languageOptions.map(option => `<option value="${option}">${capitalize(option)}</option>`).join('')}
    </select>
  `;
  statusFilterContainer.innerHTML = `
    <select id="filterStatus" class="select-field">
      <option value="all">All</option>
      <option value="solved">Solved</option>
      <option value="unsolved">Unsolved</option>
    </select>
  `;
  topicFilterContainer.innerHTML = `
    <select id="filterTopic" class="select-field">
      <option value="all">All Topics</option>
      ${topicOptions.map(option => `<option value="${option}">${option}</option>`).join('')}
    </select>
  `;

  const filterDifficulty = document.getElementById('filterDifficulty');
  const filterLanguage = document.getElementById('filterLanguage');
  const filterStatus = document.getElementById('filterStatus');
  const filterTopic = document.getElementById('filterTopic');

  function renderProblems() {
    const query = searchInput.value.trim().toLowerCase();
    const difficulty = filterDifficulty.value;
    const language = filterLanguage.value;
    const status = filterStatus.value;
    const topic = filterTopic.value;
    const solvedSet = new Set(user.progress.solved || []);

    const filtered = problems.filter(problem => {
      const matchesSearch = query === '' || problem.name.toLowerCase().includes(query) || problem.description.toLowerCase().includes(query);
      const matchesDifficulty = difficulty === 'all' || problem.difficulty === difficulty;
      const matchesLanguage = language === 'all' || (problem.languages || [problem.language]).includes(language);
      const matchesTopic = topic === 'all' || problem.topics.includes(topic);
      const isSolved = solvedSet.has(problem.id);
      const matchesStatus = status === 'all' || (status === 'solved' ? isSolved : !isSolved);
      return matchesSearch && matchesDifficulty && matchesLanguage && matchesTopic && matchesStatus;
    });

    const emptyState = document.getElementById('emptyState');
    if (!filtered.length) {
      problemCards.innerHTML = '';
      querySummary.textContent = 'No problems found. Try adjusting your filters.';
      problemsCount.textContent = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    problemCards.innerHTML = filtered.map(problem => {
      const solved = solvedSet.has(problem.id);
      const difficultyClass = `difficulty-${problem.difficulty}`;
      return `
        <article class="problem-card ${difficultyClass}">
          <div>
            <h3>${problem.name}</h3>
            <p>${problem.description}</p>
            <div class="tag-row">${problem.topics.map(topic => `<span class="tag">${topic}</span>`).join('')}</div>
          </div>
          <div class="problem-meta">
            <span class="difficulty-badge ${difficultyClass}">${capitalize(problem.difficulty)}</span>
            <span class="status-tag ${solved ? 'status-solved' : 'status-unsolved'}">${solved ? 'Solved' : 'Unsolved'}</span>
            <a class="button button-primary" href="problem.html?id=${problem.id}">Practice</a>
          </div>
        </article>
      `;
    }).join('');

    querySummary.textContent = `Showing ${filtered.length} of ${problems.length} problems.`;
    problemsCount.textContent = `${user.progress.solved.length} solved`;
  }

  searchInput.addEventListener('input', renderProblems);
  filterDifficulty.addEventListener('change', renderProblems);
  filterLanguage.addEventListener('change', renderProblems);
  filterStatus.addEventListener('change', renderProblems);
  filterTopic.addEventListener('change', renderProblems);

  document.getElementById('logoutButton').addEventListener('click', () => {
    clearCurrentUser();
    window.location.href = 'index.html';
  });

  renderProblems();
});
