import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

// components
import { ProgressBar } from '../ProgressBar'
import { Title } from '../Title'
import { Rating } from '../Rating'
import { QuizStepOptions } from './QuizStepOptions'
import { Score } from './Score'

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

const state = {
  progress: 10,
  questionsCount: 20,
  currentQuestion: 16,
  difficultyRating: 3,
  difficulty: 'medium',
  category: 'Entertainment: Video Games',
  text:
    'At the start of a standard game of the Monopoly, if you throw a double six, which square would you land on?',
  correctAnswer: 'Electric Company',
  options: ['Electric Company', 'Water Works', 'Chance', 'Community Chest']
}

const score = {
  maxPossibleScore: 75,
  minPossibleScore: 50,
  currentScore: 67
}

export const Quiz = props => {
  const { className } = props

  const [selectedOption, onSelectOption] = React.useState()
  const onClickNext = () => {}

  return (
    <QuizWrapper className={classnames(className, 'Quiz Quiz_Wrapper')}>
      <ProgressBar progress={state.progress} />

      <Container className={'Quiz_title-wrapper'}>
        <Title>
          Question {state.currentQuestion} of {state.questionsCount}
          <small>{state.category}</small>
        </Title>
        <Rating rating={state.difficultyRating} />
      </Container>

      <Container className={'Quiz_question-body'}>
        <span>{state.text}</span>
      </Container>

      <Container className={'Quiz_options-container'}>
        <QuizStepOptions
          options={state.options}
          correctAnswer={state.correctAnswer}
          selectedAnswer={selectedOption}
          onSelect={onSelectOption}
          onClickNext={onClickNext}
        />
      </Container>

      <Container className={'Quiz_footer'}>
        <Score
          maxPossibleScore={score.maxPossibleScore}
          minPossibleScore={score.minPossibleScore}
          currentScore={score.currentScore}
        />
      </Container>
    </QuizWrapper>
  )
}
