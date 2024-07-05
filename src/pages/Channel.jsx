


import { useLoaderData } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Box } from "@chakra-ui/react"
import ChannelCard from "../components/ChannelCard"
import Vidoes from "../components/Vidoes"

export async function loader({ params  }) {
  
  const id = params.id

  const channelDetail = await fetchFromAPI(`channels?part=snippet&id=${id}`)

  const videosChannel = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)

  return {channelDetail, videosChannel}
}

function Channel() {

  const { channelDetail, videosChannel } = useLoaderData()
  
  console.log(channelDetail)

  return (
    <Box bg='#000'>
      <Box bg='red.300' h='300px'></Box>
      <ChannelCard channelDetail={channelDetail?.items[0]} marginTop='-100px' linkOff={true} />

      <Box>
        <Vidoes vidoes={videosChannel.items} />
      </Box>
    </Box>
  )
}

export default Channel