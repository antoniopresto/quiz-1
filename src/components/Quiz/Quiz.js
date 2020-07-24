import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

// components
import { ProgressBar } from '../ProgressBar'
import { Title } from '../Title'
import { Rating } from '../Rating'
import { QuizStepOptions } from './QuizStepOptions'
import { Score } from '../Score'
import { useQuizState } from './useQuizState'
import { Button } from '../Button'

const QuizWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  @media screen and (min-width: 1024px) {
    min-height: 80vh;
  }

  .Quiz_title-wrapper {
    margin-top: 26px;
  }

  .Quiz_footer {
    align-self: flex-end;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
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

  .Quiz-actions-wrapper {
    text-align: center;
    margin-top: 20px;
    min-height: 120px;
  }

  .QuizOptions_footer {
    margin-top: 27px;

    .result-text {
      width: 100%;
      display: block;
      font-size: 30px;
      text-align: center;
    }

    > .Button {
      margin-top: 20px;
    }
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
  const {
    score,
    questionsCount,
    hasMoreSteps,
    isAnswered,
    isAnswerCorrect,
    currentAnswer,
    currentQuestion
  } = state

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
          isAnswered={isAnswered}
          isAnswerCorrect={isAnswerCorrect}
          onSelect={state.selectAnswer}
          onClickNext={function () {
            if (hasMoreSteps) {
              state.onClickNext()
            }
          }}
        />
      </Container>

      {isAnswered && (
        <Container className={'QuizOptions_footer'}>
          {hasMoreSteps ? (
            <span className={'result-text'}>
              {isAnswerCorrect ? 'Correct!' : 'Sorry!'}
            </span>
          ) : (
            <span className={'result-text'}>
              Your final score is {score.current}%
            </span>
          )}
        </Container>
      )}

      {hasMoreSteps && isAnswered && (
        <Container className={'Quiz-actions-wrapper'}>
          <Button
            className={'medium'}
            onClick={e => {
              e.preventDefault()
              state.onClickNext()
            }}>
            Next Question
          </Button>
        </Container>
      )}

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
