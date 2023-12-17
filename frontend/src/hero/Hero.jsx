import React from 'react'
import Navbar from '../component/navbar/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

const Hero = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <Flex>
      {/* navbar */}

      {pathname !== '/auth' && pathname !== '/login' ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Navbar />
        </Box>
      ) : null}

      {/* hero-content */}
      <Box
        flex={1}
        w={{ base: 'calc(100% - 70px', md: 'calc(100% - 240px' }}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Hero
