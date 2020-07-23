import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { colors } from '../config/colors'

const PageWrapperWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  flex-basis: 100%;
  max-width: 100%;
  height: 100vh;
  background-color: ${colors.GRAY};
  align-items: center;
  justify-content: center;
`

export const PageContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 560px;
  padding: 5px;
  background-color: white;
`

export const PageWrapper = props => {
  const { className } = props

  return (
    <PageWrapperWrapper className={classnames(className, 'PageWrapper')}>
      <PageContainer className={'PageContainer PageWrapper_PageContainer'}>
        {props.children}
      </PageContainer>
    </PageWrapperWrapper>
  )
}
