import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { profilePic } from '../../utils/constants'
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from '../../utils/constants'

const Navbar = () => {
  const navigate = useNavigate()
  const navbarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notification',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
      link: '/createPost',
    },
    {
      icon: (
        <Avatar
          size={'sm'}
          name="Gokul"
          src={profilePic.map((img) => img.pic)}
        />
      ),
      text: 'Profile',
      link: '/profile',
    },
  ]

  return (
    <Box
      height={'100vh'}
      borderRight={'3px solid'}
      borderColor={'pink.200'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 'block' }}
    >
      <Flex
        direction={'column'}
        gap={10}
        w={'full'}
        height={'full'}
      >
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'block', md: 'none' }}
          borderRadius={6}
          cursor={'pointer'}
          _hover={{ bg: 'whiteAlpha.200' }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex
          direction={'column'}
          gap={5}
          cursor={'pointer'}
        >
          {navbarItems.map((items, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={items.text}
              placement="right"
              ml={1}
              openDelay={300}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                display={'flex'}
                to={items.link || null}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                {items.icon}
                <Box display={{ base: 'none', md: 'block' }}>{items.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={'Logout'}
          placement="right"
          ml={1}
          openDelay={300}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            display={'flex'}
            as={'button'}
            onClick={() => {
              alert('are you logout!')
              localStorage.clear()
              navigate('/auth')
            }}
            // to={'/auth'}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: 'full' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            mt={'auto'}
          >
            <BiLogOut size={25} />
            <Box display={{ base: 'none', md: 'block' }}>Logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Navbar
