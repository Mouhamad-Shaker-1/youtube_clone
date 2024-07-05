import { Box, Flex, FormControl, IconButton, Input, Spacer } from "@chakra-ui/react"
import { logo } from "../utils/constants.jsx"
import { Link, useNavigate } from "react-router-dom"
import { SearchIcon } from '@chakra-ui/icons'
import React from "react"





function Header() {
  const navigate = useNavigate()
  const [search, setSearch] = React.useState('');


  function handleChange(event) {

    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearch('')
    navigate(`shearch/${search}`)
  }

  return (
    <Box as="header" p='1rem' bg='#000'>
      <Flex alignItems='center'>
        <Link to='/?type=New'>
          <img src={logo} alt="logo" style={{ height: '3.5rem' }} />
        </Link>

        <Spacer />

        <form onSubmit={handleSubmit}>

          <FormControl w={{md: '26vw', sm: '40vw'}} display='flex' mr={{md:'10rem', sm: '0'}}>
            <Input 
              
              errorBorderColor='#fff' 
              type='text' 
              placeholder="Shearch"
              borderRadius='100px' 
              focusBorderColor='red.600'
              color='#fff'
              value={search}
              onChange={(e) => handleChange(e)}
              />
            <IconButton
              ml='-41px'
              color='red.600'
              bg='transparent'
              borderRadius='50%'
              aria-label='Search database'
              icon={<SearchIcon />}
              />
          </FormControl>
        </form>
      </Flex>
    </Box>
  )
}

export default Header