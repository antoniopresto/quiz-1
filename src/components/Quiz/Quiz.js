import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

// components
import { ProgressBar } from '../ProgressBar'
import { Title } from '../Title'
import { Rating } from '../Rating'
import { QuizStepOptions } from './QuizStepOptions'
import { Score } from './Score'
import { useQuizState } from './useQuizState'

const QuizWrapper = styled.div`
  width: 100%;
  min-height: 80vh;

  .Quiz_title-wrapper {
    margin-top: 26px;
  }

  .Quiz_footer {
    align-self: flex-end;
    padding-top: 100px;
  }

  .Quiz_question-body {
    margin-top: 22px;

    > span {
      font-size: 17.7px;
    }
  }

  .Quiz_options-container {
    margin-top: 30px;
  }
`

const Container = styled.div.attrs({ className: 'Quiz_Container' })`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 400px;
  padding: 5px;
`

export const Quiz = props => {
  const { className } = props
  const state = useQuizState()
  const { currentQuestion, score, questionsCount, answerByIndex } = state

  const currentAnswer = answerByIndex[currentQuestion.index]
    ? answerByIndex[currentQuestion.index].value
    : undefined

  return (
    <QuizWrapper className={classnames(className, 'Quiz Quiz_Wrapper')}>
      <ProgressBar progress={state.progress} />

      <Container className={'Quiz_title-wrapper'}>
        <Title>
          Question {currentQuestion.count} of {questionsCount}
          <small>{currentQuestion.category}</small>
        </Title>
        <Rating rating={currentQuestion.difficultyRating} />
      </Container>

      <Container className={'Quiz_question-body'}>
        <span>{currentQuestion.text}</span>
      </Container>

      <Container className={'Quiz_options-container'}>
        <QuizStepOptions
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
          selectedAnswer={currentAnswer}
          onSelect={state.selectAnswer}
          onClickNext={state.onClickNext}
        />
      </Container>

      <Container className={'Quiz_footer'}>
        <Score
          maxPossibleScore={score.maxPossible}
          minPossibleScore={score.minPossible}
          currentScore={score.current}
        />
      </Container>
    </QuizWrapper>
  )
}
