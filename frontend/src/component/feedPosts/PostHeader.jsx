import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = ({ userAvatar, userName }) => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
      my={2}
    >
      <Flex
        gap={4}
        alignItems={'center'}
      >
        <Avatar
          w={{ sm: '50px' }}
          src={userAvatar}
          alt="user profile image"
          size={'md'}
        />
        <Flex
          fontSize={18}
          fontWeight={'bold'}
          gap={4}
          cursor={'pointer'}
        >
          {userName}
          <Box textColor={'gray.600'}>• 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Button
          bg={'blue.600'}
          fontSize={18}
          color={'blue.100'}
          fontWeight={'bold'}
          _hover={{
            bgColor: 'transparent',
            border: '2px solid blue',
            color: 'gray.700',
          }}
          transition={'0.2s ease-in-out'}
        >
          Unfollow
        </Button>
      </Box>
    </Flex>
  )
}

export default PostHeader
