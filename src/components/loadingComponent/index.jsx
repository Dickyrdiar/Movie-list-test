import { Spinner } from "@chakra-ui/react"
import styled from "styled-components"

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