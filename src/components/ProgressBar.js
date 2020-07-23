import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { colors } from '../config/colors'

const ProgressBarWrapper = styled.div`
  width: 100%;
  display: block;
`

const Progress = styled.div.attrs({ className: 'ProgressBar_Progress' })`
  height: 13px;
  background: ${colors.SUCCESS};
  min-width: 1px;
  transition: width ease-out 500ms;
`

export const ProgressBar = props => {
  const { className, progress = 0 } = props

  return (
    <ProgressBarWrapper
      className={classnames(className, 'ProgressBar ProgressBar_Wrapper')}>
      <Progress style={{ width: `${progress}%` }} />
    </ProgressBarWrapper>
  )
}
