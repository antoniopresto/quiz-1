import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { Button } from '../Button'

const QuizStepOptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  flex-basis: 100%;
  max-width: 100%;
`

const QuizOptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  flex-basis: 100%;
  max-width: 100%;
  justify-content: space-between;
  min-height: 94px;
  align-items: flex-start;

  .Button {
    width: 36%;
    max-width: 40%;
    font-size: 16px;

    &:nth-child(3),
    &:nth-child(4) {
      align-self: flex-end;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  flex-basis: 100%;
  max-width: 100%;
  align-items: flex-start;
  justify-content: center;

  &.QuizOptions_footer {
    margin-top: 37px;
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

export const QuizStepOptions = props => {
  const {
    options,
    correctAnswer,
    selectedAnswer,
    onSelect,
    onClickNext
  } = props

  const isSubmitted = !!selectedAnswer
  const isAnswerCorrect = correctAnswer && correctAnswer === selectedAnswer

  return (
    <QuizStepOptionsWrapper>
      <Container className="QuizOptions_options">
        <QuizOptionsWrapper className="QuizOptions QuizOptions_OptionsWrapper">
          {options.map(option => {
            const { value } = option
            const isSelectedOption = selectedAnswer && selectedAnswer === value

            let className = isSubmitted
              ? classnames({
                  disabled: !isSelectedOption,
                  success: isSelectedOption && isAnswerCorrect,
                  danger: isSelectedOption && !isAnswerCorrect,
                  'light-success': value === correctAnswer && !isAnswerCorrect
                })
              : ''

            return (
              <Button
                onClick={e => {
                  e.preventDefault()
                  if (isSubmitted) return
                  onSelect(value)
                }}
                key={value}
                className={className}>
                {option.label}
              </Button>
            )
          })}
        </QuizOptionsWrapper>
      </Container>

      {isSubmitted && (
        <Container className={'QuizOptions_footer'}>
          <span className={'result-text'}>
            {isAnswerCorrect ? 'Correct!' : 'Sorry!'}
          </span>

          <Button
            className={'medium'}
            onClick={e => {
              e.preventDefault()
              onClickNext()
            }}>
            Next Question
          </Button>
        </Container>
      )}
    </QuizStepOptionsWrapper>
  )
}
