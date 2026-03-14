const problems = [
  {
    name: "Two Sum",
    difficulty: "easy",
    language: "python",
    link: "solutions/sum.py"
  },
  {
    name: "Valid Parentheses",
    difficulty: "easy",
    language: "python",
    link: ""
  },
  {
    name: "Contains Duplicate",
    difficulty: "easy",
    language: "python",
    link: ""
  },
  {
    name: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    language: "python",
    link: ""
  },
  {
    name: "Binary Search",
    difficulty: "easy",
    language: "python",
    link: ""
  },
  {
    name: "Maximum Subarray",
    difficulty: "easy",
    language: "python",
    link: ""
  },
  {
    name: "Merge Sorted Array",
    difficulty: "easy",
    language: "python",
    link: ""
  },
  {
    name: "Valid Parentheses",
    difficulty: "easy",
    language: "python",
    link: "YOUR_GITHUB_FILE_LINK"
  },
  {
    name: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    language: "python",
    link: ""
  },
  {
    name: "3Sum",
    difficulty: "medium",
    language: "python",
    link: ""
  },
  {
    name: "Group Anagrams",
    difficulty: "medium",
    language: "python",
    link: ""
  },
  {
    name: "Product of Array Except Self",
    difficulty: "medium",
    language: "python",
    link: ""
  },
  {
    name: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    language: "python",
    link: "YOUR_GITHUB_FILE_LINK"
  }
];

const stats = {
  total: problems.length,
  easy: problems.filter(p => p.difficulty === "easy").length,
  medium: problems.filter(p => p.difficulty === "medium").length,
  hard: problems.filter(p => p.difficulty === "hard").length,
};

const list = document.getElementById("problemList");

function renderProblems(filter) {
  const items = filter && filter !== "all"
    ? problems.filter(p => p.difficulty === filter)
    : problems;

  list.innerHTML = items.map(p => `
    <div class="card">
      <div class="tag ${p.difficulty}">
        ${p.difficulty.toUpperCase()}
      </div>
      <h3>${p.name}</h3>
      <a href="${p.link}" class="solution-link" data-link="${p.link}" data-name="${p.name}">View Solution →</a>
    </div>
  `).join("");
}

function openSolutionModal(filePath, title) {
  const modal = document.getElementById("solutionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCode = document.getElementById("modalCode");

  modalTitle.innerText = title;
  modalCode.textContent = "Loading...";
  modal.classList.add("open");
  modal.style.opacity = "1";
  modal.style.pointerEvents = "auto";

  fetch(filePath)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load file: ${res.status}`);
      return res.text();
    })
    .then(code => {
      modalCode.textContent = code;
    })
    .catch(err => {
      modalCode.textContent = `Unable to load solution: ${err.message} — opening in a new tab instead.`;
      window.open(filePath, "_blank");
    });
}

function closeSolutionModal() {
  const modal = document.getElementById("solutionModal");
  modal.classList.remove("open");
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
}

function openProfileModal() {
  const modal = document.getElementById("profileModal");
  modal.classList.add("open");
  modal.style.opacity = "1";
  modal.style.pointerEvents = "auto";

  // Calculate solved problems (those with links)
  const solved = problems.filter(p => p.link && p.link !== "YOUR_GITHUB_FILE_LINK" && p.link !== "");
  const solvedEasy = solved.filter(p => p.difficulty === "easy").length;
  const solvedMedium = solved.filter(p => p.difficulty === "medium").length;
  const solvedHard = solved.filter(p => p.difficulty === "hard").length;

  document.getElementById("profileTotal").textContent = solved.length;
  document.getElementById("profileEasy").textContent = solvedEasy;
  document.getElementById("profileMedium").textContent = solvedMedium;
  document.getElementById("profileHard").textContent = solvedHard;

  // Progress
  const totalProblems = problems.length;
  const progressPercent = totalProblems > 0 ? Math.round((solved.length / totalProblems) * 100) : 0;
  document.getElementById("progressFill").style.width = `${progressPercent}%`;
  document.getElementById("progressText").textContent = `${progressPercent}% Complete`;

  // Languages
  const languages = {};
  solved.forEach(p => {
    languages[p.language] = (languages[p.language] || 0) + 1;
  });

  const languagesList = document.getElementById("languagesList");
  languagesList.innerHTML = Object.entries(languages).map(([lang, count]) => `
    <div class="language-item">
      <span class="language-name">${lang.charAt(0).toUpperCase() + lang.slice(1)}</span>
      <span class="language-count">${count}</span>
    </div>
  `).join("");
}

function closeProfileModal() {
  const modal = document.getElementById("profileModal");
  modal.classList.remove("open");
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
}


function updateStats() {
  document.getElementById("total").innerText = stats.total;
  document.getElementById("easy").innerText = stats.easy;
  document.getElementById("medium").innerText = stats.medium;
  document.getElementById("hard").innerText = stats.hard;
}

function setActiveFilter(filter) {
  document.querySelectorAll(".stats > div").forEach(el => {
    el.classList.toggle("active", el.dataset.difficulty === filter);
  });
}

// initial render
updateStats();
renderProblems("all");
setActiveFilter("all");

// wire up filtering
const statsContainer = document.querySelector(".stats");
statsContainer.addEventListener("click", event => {
  const target = event.target.closest("div[data-difficulty]");
  if (!target) return;

  const filter = target.dataset.difficulty;
  renderProblems(filter);
  setActiveFilter(filter);
});

// wire up solution viewer
list.addEventListener("click", event => {
  const link = event.target.closest("a.solution-link");
  if (!link) return;

  event.preventDefault();
  openSolutionModal(link.dataset.link, link.dataset.name);
});

const modalClose = document.getElementById("modalClose");
modalClose.addEventListener("click", closeSolutionModal);

// close modal on outside click
const modal = document.getElementById("solutionModal");
modal.addEventListener("click", event => {
  if (event.target === modal) closeSolutionModal();
});

// profile modal
const profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", openProfileModal);

const profileClose = document.getElementById("profileClose");
profileClose.addEventListener("click", closeProfileModal);

const profileModal = document.getElementById("profileModal");
profileModal.addEventListener("click", event => {
  if (event.target === profileModal) closeProfileModal();
});
