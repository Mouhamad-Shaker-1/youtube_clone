



import { Link, useLoaderData } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Box, Stack, Text } from "@chakra-ui/react"
import React from "react";
import ReactPlayer from "react-player";
import Vidoes from "../components/Vidoes"

export async function loader({ params }) {

  const id = params.id
  
  const videoDetailData = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)

  const videosRelatedData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)


  const videoDetail = videoDetailData.items[0]
  const videosRelated = videosRelatedData.items

  return {videoDetail, videosRelated, id}
}


function Vidoe() {

  const { videoDetail, videosRelated, id } = useLoaderData()
  
  console.log(videoDetail, videosRelated)

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (

    <Box bg='#000'>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Text color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Text>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Text variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                </Text>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Text variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Text>
                <Text variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box h={{sm: '100%' ,md: '88vh'}} justifyContent="center" alignItems="center" >
          <Vidoes vidoes={videosRelated} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default Vidoe