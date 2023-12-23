import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from '../../utils/constants'

const PostFooter = ({ userName, isProfilePage }) => {
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const handleLike = () => {
    if (like) {
      setLike(false)
      setLikeCount(likeCount - 1)
    } else {
      setLike(true)
      setLikeCount(likeCount + 1)
    }
  }

  return (
    <Box
      mb={12}
      marginTop={'auto'}
    >
      <Flex
        alignItems={'center'}
        gap={4}
        w={'full'}
        pt={2}
        mb={2}
        mt={'4'}
      >
        <Box onClick={handleLike}>
          {!like ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={'pointer'}
          fontSize={18}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text
        fontWeight={600}
        fontSize={'sm'}
      >
        {likeCount} likes
      </Text>

      {/* comment profile st*/}

      {!isProfilePage && (
        <>
          <Text
            fontWeight={700}
            fontSize={'sm'}
          >
            {userName}
            <Text
              as={'span'}
              fontWeight={400}
            >
              Feeling Good
            </Text>
          </Text>
          <Text
            fontSize={'sm'}
            color={'gray'}
          >
            View all 100 comment's
          </Text>
        </>
      )}

      {/* comment profile end*/}

      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
        w={'full'}
      >
        <InputGroup>
          <Input
            borderBottom={'1.5px solid gray'}
            variant={'flushed'}
            placeContent={'Add a comment...'}
            fontSize={14}
            placeholder="Add a comment..."
          />
          <InputRightElement>
            <Button
              fontSize={18}
              color={'blue.700'}
              fontWeight={600}
              bg={'transparent'}
              cursor={'pointer'}
              _hover={{
                color: 'green',
              }}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  )
}

export default PostFooter
