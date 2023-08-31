/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


//  * MovieList Component
//  *
//  * This component fetches and displays a list of top-rated movies from the MovieDB API.
//  *
//  *
//  * Props:
//  * - image: display image of movie objects fetched from the API.
//  * - title: thie movie title to display .
//  * - rating : an number from popularity fetched from API.
//  *

import styled from 'styled-components';
import { Box, Text} from '@chakra-ui/react';
import StarRating from '../RatingComponent';

const CardList = ({ imageSrc, title, rating, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <img src={imageSrc} alt={title}/>
      <CardTitle>{title}</CardTitle>
      <StarRating rating={rating} />
    </StyledCard>
  );
};

export default CardList


const StyledCard = styled(Box)`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 140%;
  height: 100%;
  margin-top: 10%;
`;

const CardTitle = styled(Text)`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 10%;
`;

const CardContent = styled(Text)`
  font-size: 12px;
  color: #444;
`;