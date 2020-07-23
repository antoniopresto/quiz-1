import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { Button } from '../Button'

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

export const QuizOptions = props => {
  const { className, options, correctAnswer, selectedAnswer, onSelect } = props

  const isSubmitted = !!selectedAnswer
  const isAnswerCorrect = correctAnswer && correctAnswer === selectedAnswer

  return (
    <QuizOptionsWrapper
      className={classnames(
        className,
        'QuizOptions QuizOptions_OptionsWrapper'
      )}>
      {options.map(option => {
        const isSelectedOption = selectedAnswer && selectedAnswer === option

        let className = isSubmitted
          ? classnames({
              disabled: !isSelectedOption,
              success: isSelectedOption && isAnswerCorrect,
              danger: isSelectedOption && !isAnswerCorrect,
              'light-success': option === correctAnswer && !isAnswerCorrect
            })
          : 'light'

        return (
          <Button
            onClick={e => {
              e.preventDefault()
              if (isSubmitted) return
              onSelect(option)
            }}
            key={option}
            className={className}>
            {option}
          </Button>
        )
      })}
    </QuizOptionsWrapper>
  )
}
