import { Box } from "@chakra-ui/react"
import styled from "styled-components"
import StarRating from "../RatingComponent"

const CardList = ({ imageSrc, title, content }) => {
  <CardContainer>
    <img src={imageSrc} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
    <StarRating rating={100} />
  </CardContainer>
}

export default CardList

const CardContainer = styled(Box)`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const CardTitle = styled(Text)`
  font-size: 1.5rem;
  margin-bottom: 8px;
`

const CardContent = styled(Text)`
  font-size: 1rem;
  color: #444
`