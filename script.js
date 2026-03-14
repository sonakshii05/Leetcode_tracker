const problems = [
  {
    name: "Two Sum",
    difficulty: "easy",
    link: "solutions/sum.py"
  },
  {
    name: "Valid Parentheses",
    difficulty: "easy",
    link: "YOUR_GITHUB_FILE_LINK"
  },
  {
    name: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
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

// initial render
updateStats();
renderProblems("all");
setActiveFilter("all");
