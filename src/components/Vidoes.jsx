
import { Box, Grid, GridItem, Stack } from '@chakra-ui/react'
import VidoeCard from './VidoeCard'
import ChannelCard from './ChannelCard'

function Vidoes({ vidoes, direction }) {

  const responsivetemplate = {base: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' , md: 'repeat(4, 1fr)'}

  return (
    <Grid 
      w={{ base: "100vw", md: "auto" }} 
      maxH="95%"
      p='10px' 
      templateColumns= {direction == 'column' ? 'repeat(1, 1fr)' : responsivetemplate}
      gap='10px' 
      overflowY='scroll' 
      >
      {vidoes.map((item, idx) => (
        <GridItem key={idx} h='auto'>
          <Box>
            {(item.id.playlistId || item.id.videoId) && <VidoeCard vidoe={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        </GridItem>
      ))}

    </Grid>
  )
}

export default Vidoes