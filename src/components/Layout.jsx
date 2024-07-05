import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <Box h='100vh'>
        <Header />
        <Outlet />
    </Box>
  )
}

export default Layout