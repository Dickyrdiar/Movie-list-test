/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

/**
 * A star rating component that displays a rating as stars.
 * @component
 *
 * @param {number} rating - The rating value between 0 and 5.
 * @returns {JSX.Element} StarRating component.
 */

const StarRating = ({ rating }) => {
  const totalStar = 5;
  const fullStart = Math.floor(rating)
  const hasHalfStar = rating - fullStart >= 0.5

  const starArray = Array(totalStar).fill(0).map((_, index) => {
    if (index < fullStart) {
      return <FaStar key={index} />
    } else if (hasHalfStar && index === fullStart) {
      return <FaStar key={index} style={{ width: '50%' }} />
    } else {
      return <FaStar key={index} style={{ opacity: 0.3 }} />
    }
  })

  /**
   * The rating value between 0 and 5.
  */

  return <StarContainer>{starArray}</StarContainer>

}

export default StarRating

const StarContainer = styled(Box)`
  color: #f0ad4e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`