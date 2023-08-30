/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Box} from '@chakra-ui/react';
import FetchingApi from '../../FetchingApi';
import LoadingLazy from '../../components/loadingComponent';


const MovieList = () => {
  const { data, loading, years } = FetchingApi()

  const handleClick = (val) => {
    console.log(val)
  }

  console.log("loading", years)

  if (loading) {
    return (
      <FlexContainer>
        <LoadingLazy />
      </FlexContainer>
    )
  }


  return (
    <FlexContainer>
      <GridContainer>
        {data?.map((val, index) => (
          <GridItem 
            key={index}
            onClick={() => handleClick(val)}
          >{val.title}</GridItem>
        ))}
        {/* <GridItem>Item 1</GridItem> */}
      </GridContainer>
    </FlexContainer>
  )
}

export default MovieList

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  /* padding: 64%; */
  margin-top: 40%;
`;


const GridContainer = styled(Box)`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
  text-align: center;
  align-items: center;
`;

const GridItem = styled(Box)`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
`;