import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPost from '../feedPosts/FeedPost'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'

const Home = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        {/* left side */}

        <Box
          flex={2}
          py={10}
          // border={'2px solid blue'}
        >
          <FeedPost />
        </Box>

        {/* right side */}

        <Box
          flex={3}
          mr={20}
          display={{ base: 'none', lg: 'block' }}
          maxW={'300px'}
          // border={'2px solid red'}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  )
}

export default Home
