import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const RatingWrapper = styled.div`
  width: 100%;

  .star {
    font-size: 10px;

    opacity: 0.4;
    &.active {
      opacity: 1;
    }

    margin-right: 2px;
    &:last-child {
      margin-right: 0;
    }
  }
`

const Star = ({ active }) => <span className={classnames('star', { active })}>★</span>

export const Rating = props => {
  const { className, rating = 0 } = props

  const stars = React.useMemo(() => {
    const result = []

    for (let i = 0; i < 5; i++) {
      result.push(<Star active={i < rating} key={i} />)
    }

    return result
  }, [rating])

  return (
    <RatingWrapper className={classnames(className, 'Rating Rating_Wrapper')}>
      {stars}
    </RatingWrapper>
  )
}
