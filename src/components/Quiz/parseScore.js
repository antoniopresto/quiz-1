export function parseScore(answers, totalQuestions) {
  let maxPossible = totalQuestions
  let minPossible = 0
  let current = 0

  let answersCount = answers.length

  answers.forEach(function ({ isCorrect }) {
    if (isCorrect) {
      ++current
      ++minPossible
    } else {
      --maxPossible
    }
  })

  return {
    maxPossible: Math.round((maxPossible * 100) / totalQuestions),
    minPossible: Math.round((minPossible * 100) / totalQuestions),
    current: Math.round((current * 100) / answersCount)
  }
}
