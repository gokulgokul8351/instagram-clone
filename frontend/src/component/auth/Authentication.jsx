import { Flex, Container, Box, VStack, Image } from '@chakra-ui/react'
import AuthForm from './form/AuthForm'
import Login from './login/Login'
import { useLocation } from 'react-router-dom'

// import logoImg from '../../assets/Instagram/bg-logo.jpg'

const Authentication = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Flex
        className=" auth-bg "
        minH={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        px={4}
      >
        <Container
          maxW={'container,md'}
          padding={0}
        >
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
          >
            <VStack>
              {/* condition of login and sign up st */}

              {pathname === '/login' ? <Login /> : <AuthForm />}

              {/* condition of login and sign up end */}

              <Box>Get the app</Box>
              <Flex>
                <Image />
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Authentication
