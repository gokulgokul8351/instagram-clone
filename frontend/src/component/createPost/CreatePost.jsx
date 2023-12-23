import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import loadingImg from '../../assets/Instagram/privewImg.png' // preview img is loading
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { profilePic } from '../../utils/constants'

const CreatePost = () => {
  //
  const [fileImg, setFileImg] = useState(loadingImg)
  const [image, setImage] = useState()
  const [body, setBody] = useState()
  const [url, setUrl] = useState()

  // navigate function
  const navigate = useNavigate()

  // Toast function inputs
  const postSuccess = (msg) => toast.success(msg)
  const postError = (msg) => toast.error(msg)

  // preview dummy imag fix st

  const handleChangeFile = (e) => {
    setFileImg(URL.createObjectURL(e.target.files[0]))
    setImage(e.target.files[0])
  }
  // preview dummy imag fix end

  useEffect(() => {
    if (url) {
      //   saving post to mongodb

      fetch('http://localhost:5000/createPost', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
        body: JSON.stringify({
          body,
          photo: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // mongodb data post add validate
          if (data.error) {
            postError(data.error)
          } else {
            postSuccess('Successfully Posted...☺')
            navigate('/')
          }
        })
        .catch((err) => console.log(err))
    }
  }, [url])

  //  posting image to cloudinary ==>   validate post input st

  const newPostSend = () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'insta-clone')
    data.append('cloud_name', 'instaclouddata1')
    fetch('https://api.cloudinary.com/v1_1/instaclouddata1/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Container>
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          w={'full'}
          h={'100vh'}
        >
          <Box
            border={'2px solid gray'}
            p={6}
            borderRadius={'10px'}
          >
            {/* main layout st */}

            {/* header flex*/}

            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              //   borderBottom={'2px solid red'}
            >
              <Flex
                alignItems={'center'}
                gap={2}
              >
                <Avatar
                  name="Gokul"
                  size={'md'}
                  src={profilePic.map((img) => img.pic)}
                />
                <Text fontWeight={'bold'}>Gokul168</Text>
              </Flex>

              <Text
                fontWeight={'bolder'}
                fontSize={'lg'}
                color={'pink.500'}
              >
                Create New Post
              </Text>
            </Flex>

            {/* image flex */}

            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              mx={2}
              my={'4rem'}
            >
              <Image
                src={fileImg}
                width={'150px'}
                height={'150px'}
              />
            </Flex>

            {/* choose file flex */}

            <Flex
              justifyContent={'flex-start'}
              alignItems={'center'}
              gap={4}
              pb={6}
              //   borderBottom={'2px solid red'}
            >
              <input
                className="chooseFile"
                type="file"
                accept="image/*"
                onChange={handleChangeFile}
              />
            </Flex>

            {/* user profile */}

            {/* comment textarea */}
            <Flex>
              <InputGroup>
                <Input
                  borderBottom={'1.5px solid gray'}
                  variant={'flushed'}
                  placeContent={'write a caption....'}
                  fontSize={14}
                  placeholder="Write a caption ..... ☺"
                  _placeholder={{
                    color: 'gary',
                  }}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <InputRightElement>
                  <Button
                    fontSize={20}
                    color={'blue.700'}
                    fontWeight={700}
                    bg={'transparent'}
                    cursor={'pointer'}
                    _hover={{
                      color: 'darkBlue',
                    }}
                    onClick={newPostSend}
                  >
                    Post
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>

            {/* main layout end */}
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default CreatePost
