import * as React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
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
  const {
    className,
    options,
    correctAnswer,
    selectedAnswer: submittedAnswer,
    onSubmit
  } = props
  const [selectedAnswer, setSelectedAnswer] = React.useState(submittedAnswer)

  React.useEffect(() => {
    if (submittedAnswer && submittedAnswer !== selectedAnswer) {
      setSelectedAnswer(submittedAnswer)
    }
  }, [submittedAnswer])

  const isAnswerCorrect = correctAnswer && correctAnswer === submittedAnswer

  return (
    <QuizOptionsWrapper
      className={cx(className, 'QuizOptions QuizOptions_OptionsWrapper')}>
      {options.map(option => {
        const isOptionSelected = setSelectedAnswer && option === selectedAnswer
        const isSubmittedOption = submittedAnswer && submittedAnswer === option

        return (
          <Button
            onClick={e => {
              e.preventDefault()
              setSelectedAnswer(option)
            }}
            key={option}
            className={cx({
              light: !isOptionSelected,
              primary: isOptionSelected,
              danger: !isAnswerCorrect && isSubmittedOption
            })}>
            {option}
          </Button>
        )
      })}
    </QuizOptionsWrapper>
  )
}
