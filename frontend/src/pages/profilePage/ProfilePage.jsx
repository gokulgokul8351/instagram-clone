import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../component/profile/ProfileHeader'
import ProfileTabs from '../../component/profile/ProfileTabs'
import ProfilePosts from '../../component/profile/ProfilePosts'

const ProfilePage = () => {
  return (
    <Container
      maxW={'container.lg'}
      py={5}
    >
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={'full'}
        mx={'auto'}
        flexDirection={'column'}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={'full'}
        mx={'auto'}
        direction={'column'}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  )
}

export default ProfilePage
