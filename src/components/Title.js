import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const TitleWrapper = styled.div.attrs({ role: 'title' })`
  width: 100%;
  font-size: 27px;

  > small {
    display: block;
    width: 100%;
    font-size: 42.5%;
    margin: 0;
  }
`

export const Title = props => {
  const { className } = props

  return (
    <TitleWrapper className={classnames(className, 'Title Title_Wrapper')}>
      {props.children}
    </TitleWrapper>
  )
}
