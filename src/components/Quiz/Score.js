import * as React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import { colors } from '../../config/colors'

const scoreColors = {
  min: 'rgb(32 99 210)',
  max: 'rgb(0 255 170)',
  current: 'rgb(0 193 195)'
}

const ScoreWrapper = styled.div`
  width: 100%;
`

const LabelsWrapper = styled.div.attrs({
  className: 'Score_ScoreLabelsWrapper'
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  flex-basis: 100%;
  max-width: 100%;
  justify-content: space-between;
  margin-bottom: 3px;
`

const ProgressContainer = styled.div.attrs({
  className: 'Score_ProgressContainer'
})`
  border: solid 1px ${colors.TEXT_RGBA};
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  height: 26px;
`

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.57, 0.65, 0.24, 0.98);
`

export const Score = props => {
  const {
    className,
    maxPossibleScore = 0,
    minPossibleScore = 0,
    currentScore = 0
  } = props

  const styles = React.useMemo(() => {
    const min = `${100 - minPossibleScore}%`
    const max = `${100 - maxPossibleScore}%`
    const current = `${100 - currentScore}%`

    return {
      min: {
        right: min,
        background: scoreColors.min
      },
      max: {
        right: max,
        background: scoreColors.max
      },
      current: {
        right: current,
        background: scoreColors.current
      }
    }
  }, [minPossibleScore, maxPossibleScore, currentScore])

  return (
    <ScoreWrapper className={cx(className, 'Score Score_Wrapper')}>
      <LabelsWrapper title={'Progress status:'}>
        <label tabIndex={0}>Score: {currentScore}%</label>
        <label tabIndex={0}>Max Score: {maxPossibleScore}%</label>
      </LabelsWrapper>

      <ProgressContainer>
        <ProgressBar style={styles.max} className={'max'} />
        <ProgressBar style={styles.current} className={'current'} />
        <ProgressBar style={styles.min} className={'minimum'} />
      </ProgressContainer>
    </ScoreWrapper>
  )
}
