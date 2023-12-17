import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react'
import Post from './Post'
import { UserDetails } from '../../utils/constants'

const FeedPost = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Fetch all post

    fetch('http://localhost:5000/allposts', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container
      maxW={'container.sm'}
      py={10}
      px={2}
    >
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack
            key={index}
            gap={4}
            alignItems={'flex-start'}
            mb={10}
          >
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack
                gap={2}
                alignItems={'flex-start'}
                justifyContent={'center'}
              >
                <Skeleton
                  height={'10px'}
                  w={{ base: '200px', sm: '100px', md: '300px' }}
                />
              </VStack>
            </Flex>
            <Skeleton
              w={{ base: '200px', sm: '250px', md: '350px', lg: 'full' }}
              h={{ base: '200px', sm: '250px', md: '350px', lg: 'full' }}
            >
              <Box w={'10px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {data
            ? data.map((post, index) => (
                <div key={index}>
                  <Post
                    img={post.photo}
                    bodyData={post.body}
                    userName={post.postedBy.name}
                    avatar={post.postedBy._id}
                  />
                </div>
              ))
            : UserDetails.map((post, index) => (
                <div key={index}>
                  <Post
                    img={post.photo}
                    bodyData={post.body}
                    userName={post.postedBy.name}
                    avatar={post.postedBy._id}
                  />
                </div>
              ))}
        </>
      )}
    </Container>
  )
}

export default FeedPost
