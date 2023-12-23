import { Avatar, Box, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { profilePic } from '../../utils/constants'

const UserHeader = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // Post details fetch to server

    fetch('http://localhost:5000/allposts', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err))
  }, [])

  // const val = data[data.length - 1].postedBy.name
  // console.log(val)

  // console.log(data[data.length - 1].postedBy)

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
          src={profilePic.map((img) => img.pic)}
          size={'lg'}
          name="Gokul168"
        />
        <Box
          fontSize={18}
          fontWeight={'bold'}
        >
          {/* {val.length ? val : hii} */}King_offical
        </Box>
      </Flex>
      <Link
        as={RouterLink}
        onClick={() => {
          alert('Are you logout')
          localStorage.clear()
          navigate('/auth')
        }}
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
