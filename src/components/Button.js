import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { colors } from '../config/colors'

const ButtonWrapper = styled.a.attrs({ role: 'button' })`
  text-align: center;
  line-height: 1;
  background-color: ${colors.GRAY};
  color: ${colors.TEXT_RGBA};
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
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

  &.danger {
    background-color: ${colors.DANGER};
    box-shadow: none;
    color: white;
  }

  &.success {
    background-color: ${colors.SUCCESS};
    color: white;
  }
  
  &&.light-success {
    background-color: white;
    color: ${colors.SUCCESS};
    box-shadow: inset 0 0 0 1px;
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }

  &:disabled,
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
    background-color: ${colors.GRAY};
    box-shadow: inset 0 0 0 1px;
  }

  &.light {
    background-color: ${colors.GRAY}!important;
    color: ${colors.TEXT_RGBA};
    box-shadow: inset 0 0 0 1px;
  }
`

export const Button = props => {
  const { className, ...htmlAnchorProps } = props

  return (
    <ButtonWrapper
      tabIndex={0}
      {...htmlAnchorProps}
      className={classnames(className, 'Button Button_Wrapper')}>
      {props.children}
    </ButtonWrapper>
  )
}
