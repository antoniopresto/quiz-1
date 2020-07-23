// TODO
export function parseScore(answers, total) {
  let maxPossible = 100
  let minPossible = 0
  let current = 0
  let correctCount = 0
  let incorrectCount = 0

  answers.forEach(function (answer) {
    if (answer.isCorrect) {
      ++correctCount
    } else {
      ++incorrectCount
    }
  })

  console.log({ correctCount, incorrectCount })

  return {
    maxPossible: 100,
    minPossible: 0,
    current: 0
  }
}
