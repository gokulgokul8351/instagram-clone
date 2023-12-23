import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import profileImg from '../../assets/profile/profilepic.jpg'

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
    >
      {/* top */}

      {/* top left side */}

      <AvatarGroup
        size={{ base: 'xl', ms: '2xl' }}
        justifySelf={'center'}
        alignSelf={'flex-start'}
        mx={'auto'}
      >
        <Avatar
          name="Gokul168"
          src={profileImg}
          alt="Gokul168 profile logo"
        />
      </AvatarGroup>

      {/* top right side */}

      <VStack
        alignItems={'start'}
        gap={2}
        mx={'auto'}
        flex={1}
      >
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>King_offical..♥</Text>
          <Flex
            gap={4}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Button
              bg={'green.500'}
              color={'white'}
              _hover={{ bg: 'green.800' }}
              size={{ base: 'xl', md: 'sm' }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        {/* sub column */}

        <Flex
          alignItems={'center'}
          gap={{ base: 2, sm: 4 }}
          flexWrap={'wrap'}
        >
          {/* FOLLOWERS COUNT  */}
          <Text fontSize={{ base: 'small', md: 'sm' }}>
            <Text
              as={'span'}
              fontWeight={'bold'}
              mr={1}
            >
              6
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: 'small', md: 'sm' }}>
            <Text
              as={'span'}
              fontWeight={'bold'}
              mr={1}
            >
              278
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: 'small', md: 'sm' }}>
            <Text
              as={'span'}
              fontWeight={'bold'}
              mr={1}
            >
              302
            </Text>
            Followings
          </Text>
        </Flex>

        {/* fOLLOWERS COUNT END */}

        <Flex
          alignItems={'center'}
          gap={4}
        >
          {/* userName */}
          <Text
            fontSize={'16'}
            fontWeight={'bold'}
          >
            King_offical..♥
          </Text>
        </Flex>
        <Text
          fontSize={'sm'}
          fontWeight={'bold'}
        >
          Be kind of all situation be chill ...☺
        </Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader
