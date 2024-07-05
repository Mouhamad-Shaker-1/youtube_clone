import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from "../utils/constants";
import { Link } from "react-router-dom";

function VidoeCard({ vidoe: { id: { videoId }, snippet } })  {

    return (

      <Card minH='220px' sx={{ boxShadow: "none", borderRadius: 0 }} color='#fff' bg='000' >
        
        <Link to={videoId ? `/vidoe/${videoId}` : `/video/cV2gBU6hKfY`}>
          <Image
            w='100%'
            src={snippet.thumbnails.medium.url || demoThumbnailUrl}
            />
        </Link>

        <Box>
            <Link to={videoId ? `/vidoe/${videoId}` : demoVideoUrl } >
              <Text p='.3em'>{snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Text>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
              <Text color='gray.400'>{ snippet.channelTitle || demoChannelTitle }</Text>
            </Link>
          </Box>

      </Card>

  )
}

export default VidoeCard


// channelId
// : 
// "UCEntWOceT_4muzGj1xYKauQ"
// channelTitle
// : 
// "NULL"
// description
// : 
// "membership link : https://www.youtube.com/channel/UCEntWOceT_4muzGj1xYKauQ/join DONT FORGET TO LIKE AND ..."
// liveBroadcastContent
// : 
// "none"
// publishTime
// : 
// "2024-06-13T14:17:11Z"
// publishedAt
// : 
// "2024-06-13T14:17:11Z"
// thumbnails
// : 
// {default: {…}, medium: {…}, high: {…}}
// title
// : 
// "افتادیم تو لابی عرب های میلیاردر 😳"