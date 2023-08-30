import { Box } from "@chakra-ui/react"
// import { useParams } from "react-router-dom"
import styled from 'styled-components';

const DetailMovie = () => {
  // const { id: movieId } = useParams()

  const detailData = JSON.parse(localStorage.getItem('response'))
  console.log('response', detailData)

  return (
    <Box>
      <FlexContainer>
        <GridContainer>
          <DetailDAta>
            <div>
              <ImageCard>
                <Image src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`} />
              </ImageCard>
            </div>

            <div>
              <ImageCaption>
                <Title>
                  {detailData.title} &nbsp; ({detailData.original_title}) 
                  &nbsp; {detailData.release_date}
                </Title>
                <Description>
                  {detailData.overview}
                </Description> 

                <Audience>
                  <div>rate</div>
                  <div>Vote Count: {detailData.vote_count}</div>
                </Audience>
              </ImageCaption>
            </div>
          </DetailDAta>
        </GridContainer>
      </FlexContainer>
    </Box>
  )
}

export default DetailMovie

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100vw;
  text-align: center;
  /* background-color: red; */
  /* padding: 64%; */
  margin-top: 5%;
`;

const DetailDAta = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  /* background-color: yellow; */
`

const Title = styled.h3`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
`

const GridContainer = styled(Box)`
  width: 70%;
  display: flex;
  gap: 90px;
  padding: 20px;
  text-align: center;
  align-items: center;
  margin-top: 20rem;
  /* margin-top: 90%; */

`;

const Image = styled.img`
  height: 484px;
  width: 383px;
  border-radius: 20px;
`

const Description = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
`

const ImageCard = styled(Box)`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 510px;
  width: 383px;
  margin-top: 10%;
`;

const ImageCaption = styled(Box)`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 510px;
  width: 683px;
  margin-top: 5%;
`;

const Audience = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  align-items: center;
  padding: 30%;
`