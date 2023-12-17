import React from 'react'
import UserHeader from './UserHeader'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NewUser from './NewUser'
import { NewUserDetails as userDetails } from '../../utils/constants'

const SuggestedUsers = () => {
  return (
    <>
      <VStack
        py={8}
        px={1}
        gap={4}
      >
        <UserHeader />

        {/* suggestion title */}
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          w={'full'}
        >
          <Text
            fontSize={16}
            fontWeight={'bold'}
            color={'gray.500'}
          >
            Suggested for you
          </Text>
          <Text
            fontSize={16}
            fontWeight={'bold'}
            color={'blue.400'}
            cursor={'pointer'}
            _hover={{
              color: 'blue.800',
            }}
          >
            See All
          </Text>
        </Flex>

        {/* users list  */}

        {userDetails.map((user, idx) => (
          <NewUser
            key={idx}
            name={user.name}
            followers={user.followers}
            newUserAvatar={user.avatar}
          />
        ))}

        {/* footer*/}

        <Box
          fontSize={14}
          color={'gray.600'}
          mt={5}
        >
          &copy; 2023 Build By {''}
          <Link
            hrefLang="#"
            style={{ color: 'blue' }}
          >
            Gokul_Front-End_Forever
          </Link>
        </Box>
      </VStack>
    </>
  )
}

export default SuggestedUsers
