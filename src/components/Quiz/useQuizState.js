import React from 'react'
import { useQuestions } from './useQuestions'
import { parseScore } from './parseScore'

const ACTIONS = {
  SUBMIT_STEP: 'SUBMIT_STEP',
  SET_STEP_VALUE: 'SET_STEP_VALUE'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_STEP_VALUE: {
      const isAnswerCorrect =
        state.questions[state.stepIndex].correctAnswer === action.value

      const answerByIndex = {
        ...state.answerByIndex,
        [state.stepIndex]: {
          value: action.value,
          isCorrect: isAnswerCorrect
        }
      }

      return {
        ...state,
        answerByIndex,
        isAnswered: true,
        isAnswerCorrect,
        currentAnswer: action.value,
        score: parseScore(Object.values(answerByIndex), state.questions.length)
      }
    }

    case ACTIONS.SUBMIT_STEP: {
      if (!state.answerByIndex[state.stepIndex]) return state

      const maxIndex = state.questions.length - 1
      const newIndex = state.stepIndex + 1
      if (newIndex > maxIndex) return state

      return {
        ...state,
        isAnswered: false,
        isAnswerCorrect: undefined,
        currentAnswer: undefined,
        stepIndex: newIndex,
        currentQuestion: state.questions[newIndex],
        hasMoreSteps: newIndex + 1 < maxIndex,
        progress: Math.round(((newIndex + 1) * 100) / state.questions.length)
      }
    }

    default: {
      return state
    }
  }
}

export function useQuizState() {
  const questions = useQuestions()

  const initialState = React.useMemo(() => {
    return {
      stepIndex: 0,
      progress: Math.round(100 / questions.length),
      questionsCount: questions.length,
      hasMoreSteps: questions.length > 1,
      score: {
        maxPossible: 100,
        minPossible: 0,
        current: 0
      },
      currentQuestion: questions[0],
      questions,
      answerByIndex: {}
    }
  }, [])

  const [state, dispatch] = React.useReducer(reducer, initialState)

  function onClickNext() {
    dispatch({
      type: ACTIONS.SUBMIT_STEP
    })
  }

  function selectAnswer(value) {
    dispatch({
      type: ACTIONS.SET_STEP_VALUE,
      value
    })
  }

  return {
    ...state,
    onClickNext,
    selectAnswer
  }
}
