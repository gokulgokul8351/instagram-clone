import { Box, Flex, Text } from '@chakra-ui/react'
import { BsGrid3X3, BsBookmark, BsSuitHeart } from 'react-icons/bs'
import React from 'react'

const ProfileTabs = () => {
  return (
    <Flex
      w={'full'}
      justifyContent={'center'}
      gap={{ base: 4, sm: 10 }}
      textTransform={'uppercase'}
      fontWeight={'bold'}
    >
      {/* title 1  start */}
      <Flex
        borderTop={'3px solid green'}
        alignItems={'center'}
        p={3}
        gap={1}
        cursor={'pointer'}
      >
        <Box fontSize={20}>
          {' '}
          <BsGrid3X3 />{' '}
        </Box>
        <Text
          fontSize={12}
          display={{ base: 'none', sm: 'block' }}
        >
          Posts
        </Text>
      </Flex>

      {/* title 1 end */}

      {/* title 2  st*/}
      <Flex
        alignItems={'center'}
        p={3}
        gap={1}
        cursor={'pointer'}
      >
        <Box fontSize={20}>
          {' '}
          <BsBookmark />
        </Box>
        <Text
          fontSize={12}
          display={{ base: 'none', sm: 'block' }}
        >
          Save
        </Text>
      </Flex>

      {/* title 2 end */}

      {/* title 3 st*/}
      <Flex
        alignItems={'center'}
        p={3}
        gap={1}
        cursor={'pointer'}
      >
        <Box fontSize={20}>
          <BsSuitHeart />
        </Box>
        <Text
          fontSize={12}
          display={{ base: 'none', sm: 'block' }}
        >
          Likes
        </Text>
      </Flex>

      {/* title 3 end */}
    </Flex>
  )
}

export default ProfileTabs
