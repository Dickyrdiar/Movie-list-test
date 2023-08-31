import { Spinner } from "@chakra-ui/react"
import styled from "styled-components"

//  * Lazy component is load react components lazily through code splitting without help from any additional libraries
//  *
//  * This component fetches and displays when a load from fetched api
//  *
//  * Props:
//  * - None
//  *


const LoadingLazy = () => {
  return (
    <LoadingContainer>
      <Spinner size={'xl'} color="green.400" />
    </LoadingContainer>
  )
}

export default LoadingLazy

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`