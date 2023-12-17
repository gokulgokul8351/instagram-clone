import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import logoTitle from '../../../assets/Instagram/inst-title.png'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  // validate inputs st

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Toast function st

  const notifyError = (msg) => toast.error(msg)
  const notifySuccess = (msg) => toast.success(msg)

  // Toast function end

  // Regex st

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  // Regex end

  const handleLogin = () => {
    // check email regex conditions
    if (!emailRegex.test(email)) {
      notifyError('Invalid Email')
      return
    }

    // check password regex conditions

    if (!passwordRegex.test(password)) {
      notifyError(
        `Password must contain at least one upper case letter, one lower case letter,one number, and one special characters for example : P@ssw0rd  `
      )
      return
    }

    // sending data to server

    fetch('http://localhost:5000/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        userName,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // auth validation error

        if (data.error) {
          notifyError(data.error)
        } else {
          notifySuccess(data.message)

          navigate('/login')
        }
        console.log(data)
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

          {/* signUp st*/}

          <Input
            name="name"
            placeholder="Name"
            fontSize={'1.2rem'}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            name="userName"
            placeholder="userName"
            fontSize={'1.2rem'}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          {/* signUp end */}

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
            type="text"
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
            Sign up
          </Button>

          {/* options login */}

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
            <Box>Already have an account</Box>
            <Box
              onClick={() => setIsLogin(!isLogin)}
              textColor={'blue.500'}
              cursor={'pointer'}
            >
              {isLogin ? 'Log in' : navigate('/login')}
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default AuthForm
