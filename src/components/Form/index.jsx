/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Container, FormControl, FormLabel, Input, Select, Stack } from "@chakra-ui/react"
import styled from "styled-components"

const FormFilter = ({ 
  searchText,
  handleChangeSearch, 
  dataFilter, 
  value, 
  handleChangeFilter,
}) => {
  return (
    
      <StyledSearchForm>
        <Main>
          <div>
            <FormControl>
              <FormLabel>Filter By Title</FormLabel>
              <Input 
                type={'text'}
                value={searchText}
                onChange={handleChangeSearch}
              />
            </FormControl>
          </div>

          <div>
            <FormControl>
              <FormLabel>Filtet by years</FormLabel>
              <Select value={value} onChange={handleChangeFilter}>
                {dataFilter?.map((val, index) => (
                  // <Option key={index} value={val.years}>{val.years}</Option>
                  <option key={index} value={val}>{val}</option>
                ))}
              </Select>
            </FormControl>
          </div>
        </Main>
      </StyledSearchForm>
    
  )
}

export default FormFilter

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  flex-direction: row;
  /* background-color: red; */
  text-align: center;
  position: fixed;
`

const StyledSearchForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  align-items: center;
 
`;

const FormButton = styled(Button)`
  margin-top: 10px;
`;