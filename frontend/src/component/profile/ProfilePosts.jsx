import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfilePost from '../../component/profile/ProfilePost'
import { profilePostImg } from '../../utils/constants'

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4].map((_, index) => (
          <VStack key={index}>
            <Skeleton w={'full'}>
              <Box h={'300px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {/* profile post  */}
          {profilePostImg.map((item, index) => (
            <ProfilePost
              key={index}
              img={item.img}
            />
          ))}
        </>
      )}
    </Grid>
  )
}

export default ProfilePosts
