import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { Sidbar } from '../components'
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Vidoes from '../components/Vidoes';


export async function loader({ request }) {

  const [,searchParams] = request.url.split("?");
  const searchTerm = new URLSearchParams(searchParams).get("type") || 'New'
  
  
  const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`)


  return data.items
}



function Home() {

  const vidoes = useLoaderData()


  const [searchParams, setSearchParams] = useSearchParams({type: 'New'});

  return (
    <Stack display='flex' flexDirection={{base: 'column', md: 'row'}} as='main' bg='#000'>

      <Box  p='1em' borderRight="1px solid #888" h={{base: "auto", md: "92vh"}} >
        <Sidbar selectedCategory={searchParams.get('type')} setSelectedCategory={setSearchParams} />

        <Text className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Text>
      </Box>

    

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Text fontSize='2.5em' color="#fff">{searchParams.get('type')} <span style={{color: 'red'}}>Vidoes</span></Text>

        <Vidoes vidoes={vidoes} />
      </Box>
      
      {/* vidoes */}
    </Stack>
  )
}

export default Home