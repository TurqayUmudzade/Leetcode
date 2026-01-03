// App State
const STORAGE_KEY = "neetcode250_progress"

let progress = loadProgress()
let currentQuestion = null

// DOM Elements
const elements = {
  totalStat: document.getElementById("total"),
  solvedStat: document.getElementById("solved"),
  attemptedStat: document.getElementById("attempted"),
  remainingStat: document.getElementById("remaining"),
  randomBtn: document.getElementById("randomBtn"),
  questionCard: document.getElementById("questionCard"),
  questionNumber: document.getElementById("questionNumber"),
  questionDifficulty: document.getElementById("questionDifficulty"),
  questionTitle: document.getElementById("questionTitle"),
  questionCategory: document.getElementById("questionCategory"),
  questionLink: document.getElementById("questionLink"),
  questionStatus: document.getElementById("questionStatus"),
  markAttempted: document.getElementById("markAttempted"),
  markSolved: document.getElementById("markSolved"),
  markReset: document.getElementById("markReset"),
  filterUnsolved: document.getElementById("filterUnsolved"),
  filterAttempted: document.getElementById("filterAttempted"),
  difficultyFilter: document.getElementById("difficultyFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  categoryProgress: document.getElementById("categoryProgress"),
  toggleList: document.getElementById("toggleList"),
  questionList: document.getElementById("questionList"),
  exportBtn: document.getElementById("exportBtn"),
  importBtn: document.getElementById("importBtn"),
  importFile: document.getElementById("importFile"),
  clearBtn: document.getElementById("clearBtn"),
}

// Initialize
function init() {
  populateCategoryFilter()
  updateStats()
  updateCategoryProgress()
  renderQuestionList()
  attachEventListeners()
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function populateCategoryFilter() {
  const categories = [...new Set(questions.map((q) => q.category))]
  categories.forEach((cat) => {
    const option = document.createElement("option")
    option.value = cat
    option.textContent = cat
    elements.categoryFilter.appendChild(option)
  })
}

function getFilteredQuestions() {
  const includeSolved = elements.filterUnsolved.checked
  const includeAttempted = elements.filterAttempted.checked
  const difficulty = elements.difficultyFilter.value
  const category = elements.categoryFilter.value

  return questions.filter((q) => {
    const status = progress[q.id]

    // Filter by status
    if (!includeSolved && status === "solved") return false
    if (!includeAttempted && status === "attempted") return false

    // Filter by difficulty
    if (difficulty !== "all" && q.difficulty !== difficulty) return false

    // Filter by category
    if (category !== "all" && q.category !== category) return false

    return true
  })
}

function getRandomQuestion() {
  const filtered = getFilteredQuestions()
  if (filtered.length === 0) {
    alert("No questions match your filters! Try adjusting the filters.")
    return null
  }
  return filtered[Math.floor(Math.random() * filtered.length)]
}

function displayQuestion(question) {
  if (!question) return

  currentQuestion = question

  elements.questionNumber.textContent = `#${question.id}`
  elements.questionDifficulty.textContent = question.difficulty
  elements.questionDifficulty.className = `question-difficulty ${question.difficulty}`
  elements.questionTitle.textContent = question.title
  elements.questionCategory.textContent = question.category

  // Generate LeetCode URL
  const slug = question.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
  elements.questionLink.href = `https://leetcode.com/problems/${slug}/`

  updateQuestionStatus()
  elements.questionCard.style.display = "block"

  // Scroll to question
  elements.questionCard.scrollIntoView({ behavior: "smooth", block: "center" })
}

function updateQuestionStatus() {
  if (!currentQuestion) return

  const status = progress[currentQuestion.id]
  elements.questionStatus.className = "question-status"

  if (status === "solved") {
    elements.questionStatus.textContent = "✅ Solved"
    elements.questionStatus.classList.add("solved")
  } else if (status === "attempted") {
    elements.questionStatus.textContent = "📝 Attempted"
    elements.questionStatus.classList.add("attempted")
  } else {
    elements.questionStatus.textContent = ""
  }
}

function updateStats() {
  const solved = questions.filter((q) => progress[q.id] === "solved").length
  const attempted = questions.filter(
    (q) => progress[q.id] === "attempted"
  ).length
  const total = questions.length

  elements.totalStat.textContent = total
  elements.solvedStat.textContent = solved
  elements.attemptedStat.textContent = attempted
  elements.remainingStat.textContent = total - solved
}

function updateCategoryProgress() {
  const categories = [...new Set(questions.map((q) => q.category))]

  elements.categoryProgress.innerHTML = categories
    .map((cat) => {
      const catQuestions = questions.filter((q) => q.category === cat)
      const solved = catQuestions.filter(
        (q) => progress[q.id] === "solved"
      ).length
      const attempted = catQuestions.filter(
        (q) => progress[q.id] === "attempted"
      ).length
      const total = catQuestions.length
      const percentage = Math.round((solved / total) * 100)

      return `
      <div class="category-item">
        <div class="category-header">
          <span class="category-name">${cat}</span>
          <span class="category-count">${solved}/${total} solved, ${attempted} attempted</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
      </div>
    `
    })
    .join("")
}

function renderQuestionList() {
  elements.questionList.innerHTML = questions
    .map((q) => {
      const status = progress[q.id] || ""
      return `
      <div class="question-item ${status}" data-id="${q.id}">
        <div class="question-item-info">
          <span class="question-item-number">#${q.id}</span>
          <span class="question-item-title">${q.title}</span>
        </div>
        <span class="question-item-difficulty ${q.difficulty}">${q.difficulty}</span>
      </div>
    `
    })
    .join("")
}

function attachEventListeners() {
  // Random button
  elements.randomBtn.addEventListener("click", () => {
    const question = getRandomQuestion()
    if (question) displayQuestion(question)
  })

  // Mark buttons
  elements.markAttempted.addEventListener("click", () => {
    if (currentQuestion) {
      progress[currentQuestion.id] = "attempted"
      saveProgress()
      updateQuestionStatus()
      updateStats()
      updateCategoryProgress()
      renderQuestionList()
    }
  })

  elements.markSolved.addEventListener("click", () => {
    if (currentQuestion) {
      progress[currentQuestion.id] = "solved"
      saveProgress()
      updateQuestionStatus()
      updateStats()
      updateCategoryProgress()
      renderQuestionList()
    }
  })

  elements.markReset.addEventListener("click", () => {
    if (currentQuestion) {
      delete progress[currentQuestion.id]
      saveProgress()
      updateQuestionStatus()
      updateStats()
      updateCategoryProgress()
      renderQuestionList()
    }
  })

  // Toggle question list
  elements.toggleList.addEventListener("click", () => {
    const isVisible = elements.questionList.style.display !== "none"
    elements.questionList.style.display = isVisible ? "none" : "block"
    elements.toggleList.textContent = isVisible ? "Show List" : "Hide List"
  })

  // Click on question in list
  elements.questionList.addEventListener("click", (e) => {
    const item = e.target.closest(".question-item")
    if (item) {
      const id = parseInt(item.dataset.id)
      const question = questions.find((q) => q.id === id)
      if (question) displayQuestion(question)
    }
  })

  // Export progress
  elements.exportBtn.addEventListener("click", () => {
    const data = JSON.stringify(progress, null, 2)
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "neetcode250_progress.json"
    a.click()
    URL.revokeObjectURL(url)
  })

  // Import progress
  elements.importBtn.addEventListener("click", () => {
    elements.importFile.click()
  })

  elements.importFile.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result)
          progress = { ...progress, ...imported }
          saveProgress()
          updateStats()
          updateCategoryProgress()
          renderQuestionList()
          if (currentQuestion) updateQuestionStatus()
          alert("Progress imported successfully!")
        } catch {
          alert("Invalid file format!")
        }
      }
      reader.readAsText(file)
    }
    e.target.value = ""
  })

  // Clear progress
  elements.clearBtn.addEventListener("click", () => {
    if (
      confirm(
        "Are you sure you want to clear all progress? This cannot be undone!"
      )
    ) {
      progress = {}
      saveProgress()
      updateStats()
      updateCategoryProgress()
      renderQuestionList()
      if (currentQuestion) updateQuestionStatus()
    }
  })
}

// Start the app
init()

