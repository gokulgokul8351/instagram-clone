import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image, Text } from '@chakra-ui/react'

const FeedPosts = ({ img, bodyData, userName, avatar }) => {
  return (
    <>
      <PostHeader
        userName={userName}
        userAvatar={avatar}
      />
      <Box
        border={'1px solid gray'}
        my={2}
        borderRadius={4}
        overflow={'hidden'}
      >
        <Image
          // w={{ sm: '200px' }}
          src={img}
          alt="user profile image"
        />

        <Box my={2}>
          <Text
            mx={4}
            fontSize={'1rem'}
          >
            <span
              style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
              }}
            >
              {userName}_
            </span>
            <span>{bodyData}</span>
          </Text>
        </Box>
      </Box>
      <PostFooter userName={userName} />
    </>
  )
}

export default FeedPosts
