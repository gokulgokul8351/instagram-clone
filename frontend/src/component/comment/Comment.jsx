import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({ createdAt, userName, text, profileImg }) => {
  return (
    <Flex gap={4}>
      <Avatar
        src={profileImg}
        name={userName}
        size={'sm'}
      />
      <Flex direction={'column'}>
        <Flex gap={2}>
          <Text
            fontWeight={'bold'}
            fontSize={14}
          >
            {userName}
          </Text>
          <Text fontSize={16}>{text}</Text>
        </Flex>
        <Text
          fontSize={14}
          color={'black'}
        >
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Comment
