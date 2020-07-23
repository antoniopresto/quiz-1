import React from 'react'
import questions from '../../config/questions'

export function useQuestions() {
  return React.useMemo(() => {
    return questions.map(parseQuestion)
  }, [])
}

function parseQuestion(question, index) {
  const allQuestions = question.incorrect_answers.concat(
    question.correct_answer
  )

  const options = shuffle(allQuestions).map(option => ({
    value: option,
    label: decodeURIComponent(option)
  }))

  return {
    count: index + 1,
    index,
    category: decodeURIComponent(question.category),
    difficultyRating: difficultyMap[question.difficulty],
    text: decodeURIComponent(question.question),
    correctAnswer: question.correct_answer,
    type: question.type,
    options
  }
}

const difficultyMap = {
  hard: 3,
  medium: 2,
  easy: 1
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle(array) {
  const len = array.length
  for (let i = len - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1))
    const element = array[i]
    array[i] = array[index]
    array[index] = element
  }
  return array
}
