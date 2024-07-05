import { Avatar, Box, Card, Text, Image } from "@chakra-ui/react"
import { demoProfilePicture } from "../utils/constants"
import { Link } from "react-router-dom"


function ChannelCard({ channelDetail, marginTop, linkOff }) {
    console.log(channelDetail)
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop,
            }}
        >
            <Link to={!linkOff && `/channel/${channelDetail?.id?.channelId}`}>
                <Card bg='transparent' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <Image
                            
                        src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Text variant="h6">
                        {channelDetail?.snippet?.title}
                    </Text>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Text sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Text>
                    )}
                </Card>
            </Link>
        </Box>
    )
}

export default ChannelCard