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
      //
      const answerByIndex = {
        ...state.answerByIndex,
        [state.stepIndex]: {
          value: action.value,
          isCorrect:
            state.questions[state.stepIndex].correctAnswer === action.value
        }
      }

      return {
        ...state,
        answerByIndex,
        score: parseScore(Object.values(answerByIndex), state.questions.length)
      }
    }

    case ACTIONS.SUBMIT_STEP: {
      const hasMoreSteps = state.stepIndex + 1 < state.questions.length
      const newIndex = hasMoreSteps ? state.stepIndex + 1 : state.stepIndex

      return {
        ...state,
        stepIndex: newIndex,
        currentQuestion: state.questions[newIndex],
        hasMoreSteps
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
      progress: 0,
      questionsCount: questions.length,
      hasMoreSteps: true,
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
