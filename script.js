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
  },
  { name: "Two Sum",
     difficulty: "easy",
      language: "java", 
      link: "solutions/TwoSum.java" }
];

/* ===============================
   GLOBAL STATE
================================ */

let currentDifficulty = "all";
let currentLanguage = "all";

const list = document.getElementById("problemList");


/* ===============================
   STATS
================================ */

function updateStats() {
  document.getElementById("total").innerText = problems.length;
  document.getElementById("easy").innerText =
    problems.filter(p => p.difficulty === "easy").length;
  document.getElementById("medium").innerText =
    problems.filter(p => p.difficulty === "medium").length;
  document.getElementById("hard").innerText =
    problems.filter(p => p.difficulty === "hard").length;
}


/* ===============================
   RENDER PROBLEMS
================================ */

function renderProblems() {

  let items = problems;

  // difficulty filter
  if (currentDifficulty !== "all") {
    items = items.filter(p => p.difficulty === currentDifficulty);
  }

  // language filter
  if (currentLanguage !== "all") {
    items = items.filter(p => p.language === currentLanguage);
  }

  list.innerHTML = items.map(p => `
    <div class="card">

      <div class="tag ${p.difficulty}">
        ${p.difficulty.toUpperCase()}
      </div>

      <h3>${p.name}</h3>

      <p>Language: ${p.language.charAt(0).toUpperCase() + p.language.slice(1)}</p>

      ${
        p.link && p.link !== "" && p.link !== "YOUR_GITHUB_FILE_LINK"
        ? `<a href="#" class="solution-link"
             data-link="${p.link}"
             data-name="${p.name}">
             View Solution →
           </a>`
        : `<span style="opacity:.5">No solution yet</span>`
      }

    </div>
  `).join("");
}


/* ===============================
   SOLUTION MODAL
================================ */

function openSolutionModal(filePath, title) {

  const modal = document.getElementById("solutionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCode = document.getElementById("modalCode");

  modalTitle.innerText = title;
  modalCode.textContent = "Loading...";
  modal.classList.add("open");

  fetch(filePath)
    .then(res => {
      if (!res.ok) throw new Error("File not found");
      return res.text();
    })
    .then(code => {
      modalCode.textContent = code;
      modalCode.scrollTop = 0;
    })
    .catch(() => {
      modalCode.textContent = "Opening solution in new tab...";
      window.open(filePath, "_blank");
    });
}

function closeSolutionModal() {
  document.getElementById("solutionModal").classList.remove("open");
}


/* ===============================
   PROFILE MODAL
================================ */

function openProfileModal() {

  const modal = document.getElementById("profileModal");
  modal.classList.add("open");

  const solved = problems.filter(
    p => p.link && p.link !== "" && p.link !== "YOUR_GITHUB_FILE_LINK"
  );

  document.getElementById("profileTotal").textContent = solved.length;
  document.getElementById("profileEasy").textContent =
    solved.filter(p => p.difficulty === "easy").length;
  document.getElementById("profileMedium").textContent =
    solved.filter(p => p.difficulty === "medium").length;
  document.getElementById("profileHard").textContent =
    solved.filter(p => p.difficulty === "hard").length;

  const progress =
    problems.length === 0
      ? 0
      : Math.round((solved.length / problems.length) * 100);

  document.getElementById("progressFill").style.width = progress + "%";
  document.getElementById("progressText").textContent =
    progress + "% Complete";

  // language stats
  const languages = {};
  solved.forEach(p => {
    languages[p.language] = (languages[p.language] || 0) + 1;
  });

  document.getElementById("languagesList").innerHTML =
    Object.entries(languages).map(([lang, count]) => `
      <div class="language-item">
        <span>${lang}</span>
        <span>${count}</span>
      </div>
    `).join("");
}

function closeProfileModal() {
  document.getElementById("profileModal").classList.remove("open");
}


/* ===============================
   FILTER UI
================================ */

function setActiveDifficulty(filter) {
  document.querySelectorAll(".stats > div").forEach(el => {
    el.classList.toggle("active", el.dataset.difficulty === filter);
  });
}

function setActiveLanguage(filter) {
  document.querySelectorAll(".languages div").forEach(el => {
    el.classList.toggle("active", el.dataset.language === filter);
  });
}


/* ===============================
   INITIALIZE
================================ */

updateStats();
renderProblems();
setActiveDifficulty("all");
setActiveLanguage("all");


/* ===============================
   EVENT LISTENERS
================================ */

// difficulty filter
document.querySelector(".stats").addEventListener("click", e => {
  const target = e.target.closest("div[data-difficulty]");
  if (!target) return;

  currentDifficulty = target.dataset.difficulty;
  renderProblems();
  setActiveDifficulty(currentDifficulty);
});

// language filter
document.querySelector(".languages").addEventListener("click", e => {
  const target = e.target.closest("div[data-language]");
  if (!target) return;

  currentLanguage = target.dataset.language;
  renderProblems();
  setActiveLanguage(currentLanguage);
});

// solution modal
list.addEventListener("click", e => {
  const link = e.target.closest(".solution-link");
  if (!link) return;

  e.preventDefault();
  openSolutionModal(link.dataset.link, link.dataset.name);
});

document.getElementById("modalClose")
  .addEventListener("click", closeSolutionModal);

document.getElementById("solutionModal")
  .addEventListener("click", e => {
    if (e.target.id === "solutionModal") closeSolutionModal();
  });

// profile modal
document.getElementById("profileBtn")
  .addEventListener("click", openProfileModal);

document.getElementById("profileClose")
  .addEventListener("click", closeProfileModal);

document.getElementById("profileModal")
  .addEventListener("click", e => {
    if (e.target.id === "profileModal") closeProfileModal();
  });
