import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoTitle from '../../../assets/Instagram/inst-title.png'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'

const Login = () => {
  // navigate auth function st

  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  // navigate auth function end

  //   validation st

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //   validation end

  // Toast function st

  const notifySuccess = (msg) => toast.success(msg)
  const notifyError = (msg) => toast.error(msg)

  // Toast function end

  const handleLogin = () => {
    // checking server data for login authentication

    fetch('http://localhost:5000/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // login validation err
        if (data.error) {
          notifyError(data.error)
        } else {
          localStorage.setItem('jwt', data)
          navigate('/')
          notifySuccess(data.message)
        }
      })
  }

  return (
    <>
      <Box
        border={'2px solid blue'}
        borderRadius={4}
        padding={5}
        bg={'whiteAlpha.500'}
      >
        <VStack spacing={4}>
          <Image
            padding={'1rem'}
            width={'10rem'}
            src={logoTitle}
          />

          <Input
            name="email"
            placeholder="Email"
            fontSize={'1.2rem'}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            placeholder=" password"
            fontSize={'1.2rem'}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={handleLogin}
            w={'full'}
            colorScheme="blue"
            size={'sm'}
            fontSize={'1.2rem'}
            padding={'1.3rem'}
          >
            Log in
          </Button>

          {/* options sign up st */}

          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
            w={'full'}
          >
            <Box
              flex={2}
              h={'1px'}
              bg={'gray.400'}
            />
            <Text mx={2}>OR</Text>
            <Box
              flex={2}
              h={'1px'}
              bg={'gray.400'}
            />
          </Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            cursor={'pointer'}
          >
            <FcGoogle fontSize={'2rem'} />
            <Text
              textColor={'blue.500'}
              fontSize={'1.1rem'}
            >
              Log in with Google
            </Text>
          </Flex>

          {/* options sign up end */}
        </VStack>
        {/* log or sing  */}

        <Box>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            borderRadius={4}
            padding={5}
          >
            <Box>Don't have an account</Box>
            <Box
              onClick={() => setIsLogin(!isLogin)}
              textColor={'blue.500'}
              cursor={'pointer'}
            >
              {isLogin ? 'Sign up' : navigate('/auth')}
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Login
