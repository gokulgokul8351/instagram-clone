import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const NewUser = ({ name, followers, newUserAvatar }) => {
  const [isFollowed, setIsFollowed] = useState(true)

  const handleFollowers = () => {
    setIsFollowed(!isFollowed)
  }

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
    >
      <Flex
        alignItems={'center'}
        gap={2}
      >
        <Avatar
          src={newUserAvatar}
          name={name}
          size={'md'}
        />
        <VStack
          spacing={2}
          alignItems={'flex-start'}
        >
          <Box
            fontSize={14}
            fontWeight={'bold'}
          >
            {name}
          </Box>
          <Box
            fontSize={12}
            fontWeight={'bold'}
          >
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        onClick={handleFollowers}
        fontSize={14}
        bg={isFollowed ? 'red.500' : 'blue.500'}
        color={'whitesmoke'}
        _hover={{
          border: '2px solid blue',
          bg: 'transparent',
          color: 'black',
        }}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  )
}

export default NewUser
