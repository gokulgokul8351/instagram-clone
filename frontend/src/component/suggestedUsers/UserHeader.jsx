import { Avatar, Box, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const UserHeader = () => {
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
          src="/src/assets/profile/profilepic.png"
          size={'lg'}
          name="Gokul168"
        />
        <Box
          fontSize={18}
          fontWeight={'bold'}
        >
          Gokul168_♥
        </Box>
      </Flex>
      <Link
        as={RouterLink}
        to={'/auth'}
        fontSize={16}
        style={{ textDecoration: 'none' }}
        cursor={'pointer'}
        fontWeight={'medium'}
        color={'whitesmoke'}
        mr={'10px'}
        px={'10px'}
        py={'2px'}
        borderRadius={'4px'}
        bg={'red.500'}
        _hover={{
          bg: 'transparent',
          color: '#000',
          border: '2px solid red ',
        }}
      >
        Log out
      </Link>
    </Flex>
  )
}

export default UserHeader
