import { useLoaderData } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Vidoes from "../components/Vidoes"
import { Box, Text } from "@chakra-ui/react"


export async function loader({ params }) {

  const search = params.shearchTerm
  console.log(search)

  const data = await fetchFromAPI(`search?part=snippet&q=${search}`)


  const vidoes = data.items

  return {vidoes, search}
}

function Shearch() {

  const {vidoes, search} = useLoaderData()

  console.log(vidoes)

  return (
    <Box bg='#000' minH='95vh' p='1em'>

      <Text color='#fff' fontSize='2rem'>Search Results for <span style={{color: 'red'}}>{ search }</span> vidoes</Text>
      <Box mt='2em'>
        <Vidoes vidoes={vidoes} />
      </Box>
    </Box>
  )
}

export default Shearch