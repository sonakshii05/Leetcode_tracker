const problems = [
  {
    name: "Two Sum",
    difficulty: "easy",
    language: "python",
    status: "solved",
    link: "solutions/sum.py"
  },
  {
    name: "Add Two Numbers",
    difficulty: "easy",
    language: "python",
    status: "solved",
    link: "solutions/twoNumbers.py"
  },

  {
    name: "Valid Parentheses",
    difficulty: "easy",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Contains Duplicate",
    difficulty: "easy",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Binary Search",
    difficulty: "easy",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Maximum Subarray",
    difficulty: "easy",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Merge Sorted Array",
    difficulty: "easy",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Valid Parentheses",
    difficulty: "easy",
    status: "todo",
    language: "python",
    link: "YOUR_GITHUB_FILE_LINK"
  },
  {
    name: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "3Sum",
    difficulty: "medium",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Group Anagrams",
    difficulty: "medium",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Product of Array Except Self",
    difficulty: "medium",
    status: "todo",
    language: "python",
    link: ""
  },
  {
    name: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    status: "todo",
    language: "python",
    link: "YOUR_GITHUB_FILE_LINK"
  },
  { name: "Two Sum",
     difficulty: "easy",
      language: "java", 
      status: "solved",
      link: "solutions/TwoSum.java" }
];

/* ===============================
   GLOBAL STATE
================================ */

let currentDifficulty="all", currentLanguage="all", currentStatus="all";
const list=document.getElementById("problemList");

// ================= STATS
function updateStats(){
  document.getElementById("total").innerText=problems.length;
  document.getElementById("easy").innerText=problems.filter(p=>p.difficulty==="easy").length;
  document.getElementById("medium").innerText=problems.filter(p=>p.difficulty==="medium").length;
  document.getElementById("hard").innerText=problems.filter(p=>p.difficulty==="hard").length;
}

// ================= RENDER
function renderProblems(){
  let items=problems;
  if(currentDifficulty!=="all") items=items.filter(p=>p.difficulty===currentDifficulty);
  if(currentLanguage!=="all") items=items.filter(p=>p.language===currentLanguage);
  if(currentStatus!=="all") items=items.filter(p=>p.status===currentStatus);

  list.innerHTML=items.map(p=>`
    <div class="card">
      <div class="tag ${p.difficulty}">${p.difficulty.toUpperCase()}</div>
      <h3>${p.name}</h3>
      <p>Language: ${p.language.charAt(0).toUpperCase()+p.language.slice(1)}</p>
      <span class="status-badge status-${p.status}">${p.status}</span>
      ${p.link&&p.link!=""&&p.link!=="YOUR_GITHUB_FILE_LINK"?`<a href="#" class="solution-link" data-link="${p.link}" data-name="${p.name}">View Solution →</a>`:`<span style="opacity:.5">No solution yet</span>`}
    </div>
  `).join("");
}

// ================= MODALS
function openSolutionModal(filePath,title){
  const modal=document.getElementById("solutionModal");
  const modalTitle=document.getElementById("modalTitle");
  const modalCode=document.getElementById("modalCode");
  modalTitle.innerText=title;
  modalCode.textContent="Loading...";
  modal.classList.add("open");
  fetch(filePath).then(res=>{if(!res.ok)throw new Error(); return res.text();})
    .then(code=>{modalCode.textContent=code; modalCode.scrollTop=0;})
    .catch(()=>{modalCode.textContent="Opening solution in new tab..."; window.open(filePath,"_blank");});
}
function closeSolutionModal(){document.getElementById("solutionModal").classList.remove("open");}

function openProfileModal(){
  const modal=document.getElementById("profileModal"); modal.classList.add("open");
  const solved=problems.filter(p=>p.link&&p.link!=""&&p.link!=="YOUR_GITHUB_FILE_LINK");

  document.getElementById("profileTotal").textContent=solved.length;
  document.getElementById("profileEasy").textContent=solved.filter(p=>p.difficulty==="easy").length;
  document.getElementById("profileMedium").textContent=solved.filter(p=>p.difficulty==="medium").length;
  document.getElementById("profileHard").textContent=solved.filter(p=>p.difficulty==="hard").length;

  const progress=problems.length===0?0:Math.round((solved.length/problems.length)*100);
  document.getElementById("progressFill").style.width=progress+"%";
  document.getElementById("progressText").textContent=progress+"% Complete";

  const languages={};
  solved.forEach(p=>{languages[p.language]=(languages[p.language]||0)+1;});
  document.getElementById("languagesList").innerHTML=Object.entries(languages).map(([lang,count])=>`<div class="language-item"><span>${lang}</span><span>${count}</span></div>`).join("");

  renderChart(solved);
}
function closeProfileModal(){document.getElementById("profileModal").classList.remove("open");}

// ================= FILTER UI
function setActiveDifficulty(filter){document.querySelectorAll(".stats > div").forEach(el=>el.classList.toggle("active",el.dataset.difficulty===filter));}
function setActiveLanguage(filter){document.querySelectorAll(".languages div").forEach(el=>el.classList.toggle("active",el.dataset.language===filter));}

// ================= STATUS FILTER EVENT
document.querySelectorAll("[data-status]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    currentStatus=btn.dataset.status;
    document.querySelectorAll("[data-status]").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderProblems();
  });
});

// ================= EVENT LISTENERS
document.querySelector(".stats").addEventListener("click",e=>{
  const target=e.target.closest("div[data-difficulty]"); if(!target)return;
  currentDifficulty=target.dataset.difficulty; renderProblems(); setActiveDifficulty(currentDifficulty);
});
document.querySelector(".languages").addEventListener("click",e=>{
  const target=e.target.closest("div[data-language]"); if(!target)return;
  currentLanguage=target.dataset.language; renderProblems(); setActiveLanguage(currentLanguage);
});
list.addEventListener("click",e=>{
  const link=e.target.closest(".solution-link"); if(!link)return;
  e.preventDefault(); openSolutionModal(link.dataset.link,link.dataset.name);
});
document.getElementById("modalClose").addEventListener("click",closeSolutionModal);
document.getElementById("solutionModal").addEventListener("click",e=>{if(e.target.id==="solutionModal")closeSolutionModal();});
document.getElementById("profileBtn").addEventListener("click",openProfileModal);
document.getElementById("profileClose").addEventListener("click",closeProfileModal);
document.getElementById("profileModal").addEventListener("click",e=>{if(e.target.id==="profileModal")closeProfileModal();});

// ================= INITIALIZE
updateStats();
renderProblems();
setActiveDifficulty("all");
setActiveLanguage("all");

// ================= CHART
function renderChart(solved){
  const easy=solved.filter(p=>p.difficulty==="easy").length;
  const medium=solved.filter(p=>p.difficulty==="medium").length;
  const hard=solved.filter(p=>p.difficulty==="hard").length;
  const ctx=document.getElementById("difficultyChart").getContext("2d");
  if(window.difficultyChart) window.difficultyChart.destroy();
  window.difficultyChart=new Chart(ctx,{
    type:"doughnut",
    data:{
      labels:["Easy","Medium","Hard"],
      datasets:[{data:[easy,medium,hard], backgroundColor:["#00b894","#fdcb6e","#e17055"], borderColor:"#fff", borderWidth:2}]
    },
    options:{responsive:true, animation:{animateRotate:true,duration:1200}, plugins:{legend:{position:"bottom",labels:{color:"#fff"}}}}
  });
}
function updateStreak() {
  // For demo, just random streak
  const streak = Math.floor(Math.random() * 10) + 1;
  document.getElementById("streakCount").textContent = streak + " 🔥";
  document.getElementById("lastSolved").textContent = "Last solved: " + new Date().toLocaleDateString();
}