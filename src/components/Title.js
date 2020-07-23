import * as React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const TitleWrapper = styled.div`
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
    <TitleWrapper className={cx(className, 'Title Title_Wrapper')}>
      {props.children}
    </TitleWrapper>
  )
}

