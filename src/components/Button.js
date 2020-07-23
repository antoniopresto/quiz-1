import * as React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import { colors } from '../config/colors'

const ButtonWrapper = styled.a.attrs({ role: 'button' })`
  text-align: center;
  line-height: 1;
  background-color: ${colors.GRAY};
  color: ${colors.TEXT_RGBA};
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px;
  user-select: none;
  opacity: 0.9;

  &:active,
  &:focus,
  &:hover {
    text-decoration: none;
    color: ${colors.TEXT_RGBA_ACTIVE};
  }

  &.primary {
    background-color: ${colors.PRIMARY};
    color: white;

    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
      color: white;
    }
  }

  &.light {
    background-color: ${colors.GRAY};
    color: ${colors.TEXT_RGBA};
  }

  &.danger {
    background-color: ${colors.DANGER};
    box-shadow: inset 0 0 0 1px ${colors.DANGER_ACTIVE};
  }

  &:active {
    opacity: 1;
  }

  &:disabled,
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
    background-color: ${colors.GRAY};
  }
`

export const Button = props => {
  const { className, ...htmlAnchorProps } = props

  return (
    <ButtonWrapper
      tabIndex={0}
      {...htmlAnchorProps}
      className={cx(className, 'Button Button_Wrapper')}>
      {props.children}
    </ButtonWrapper>
  )
}
