import * as React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

// components
import { ProgressBar } from '../ProgressBar'
import { Title } from '../Title'
import { Rating } from '../Rating'

const QuizWrapper = styled.div`
  width: 100%;
  min-height: 80vh;

  .Quiz_body {
    margin-top: 40px;
  }

  .Quiz_footer {
    align-self: flex-end;
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
  category: 'Entertainment: Video Games'
}

export const Quiz = props => {
  const { className } = props

  return (
    <QuizWrapper className={cx(className, 'Quiz Quiz_Wrapper')}>
      <ProgressBar progress={state.progress} />

      <Container className={'Quiz_body'}>
        <Title>
          Question {state.currentQuestion} of {state.questionsCount}
          <small>{state.category}</small>
        </Title>

        <Rating rating={state.difficultyRating} />
      </Container>

      <Container className={'Quiz_footer'}>Footer</Container>
    </QuizWrapper>
  )
}
