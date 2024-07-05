import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { 
  Route, 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements } from "react-router-dom"
import { Feed, Channel, Vidoe, Shearch } from './pages'
import { Layout } from './components'
import './index.css'
import { loader as feedLoader } from './pages/Feed'
import { loader as channelLoader } from './pages/Channel'
import { loader as vidoeLoader } from './pages/Vidoe'
import { loader as shearchLoader } from './pages/Shearch'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Feed />} loader={feedLoader} />
    <Route path='channel/:id' loader={channelLoader} element={<Channel />} />
    <Route path='vidoe/:id' loader={vidoeLoader} element={<Vidoe />} />
    <Route path='shearch/:shearchTerm' loader={shearchLoader} element={<Shearch />} />
  </Route>
))


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
