/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Box, CSSReset} from '@chakra-ui/react';
import FetchingApi from '../../FetchingApi';
import LoadingLazy from '../../components/loadingComponent';
import CardList from '../../components/CardList';
import { useNavigate } from 'react-router-dom';
import FormFilter from '../../components/Form';
import { useState } from 'react';

const MovieList = () => {
  const { data, loading, years } = FetchingApi()
  const history = useNavigate()
  const [keySearch, setKeySearch] = useState('')
  const [selectedYears, setSelectedYears] = useState('')

  const handleClick = (val) => {
    history(`/movie-detail/${val.id}`)
    localStorage.setItem('response', JSON.stringify(val))
  }

  const filteredMovies = selectedYears ? data.filter(movie => movie.release_date.includes(selectedYears)) : data

  if (loading) {
    return (
      <FlexContainer>
        <LoadingLazy />
      </FlexContainer>
    )
  }

  console.log("key", keySearch)

  return (
    <Box>
      <FlexContainer>
        <HeaderContainer>
          <FormFilter 
            dataFilter={years} 
            searchText={keySearch}
            handleChangeSearch={(e) => setKeySearch(e.target.value)}
            value={selectedYears}
            handleChangeFilter={(e) => setSelectedYears(e.target.value)}
          />
          {/* this is header */}
        </HeaderContainer>

        <GridContainer>
          {filteredMovies?.filter(movie => movie.title.toLowerCase().includes(keySearch.toLowerCase()))
          .map((val, index) => (
            <CardList 
              key={index} 
              title={val.title}
              imageSrc={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
              rating={val.popularity}
              onClick={() => handleClick(val)}
            />
          ))}
        </GridContainer>
      </FlexContainer>    
    </Box>
  )
}

export default MovieList


const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100vw;
  text-align: center;
  /* padding: 64%; */
  margin-top: 50%;
`;


const HeaderContainer = styled.header`
  background-color: white;
  color: #333;
  padding: 20px;
  text-align: center;
  height: 100%;
  width: 100vw;
  position: fixed;
  margin-top: 20%;
`;

const GridContainer = styled(Box)`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 90px;
  padding: 20px;
  text-align: center;
  align-items: center;
  /* margin-top: -50rem; */
  margin-top: -90vw

`;

const GridItem = styled(Box)`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
`;