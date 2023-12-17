import {
  Flex,
  GridItem,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Avatar,
  Button,
  Divider,
  VStack,
} from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { commentDetails } from '../../utils/constants'
import Comment from '../comment/Comment'
import PostFooter from '../feedPosts/PostFooter'

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <GridItem
        cursor={'pointer'}
        borderRadius={4}
        overflow={'hidden'}
        border={'1px solid black'}
        position={'relative'}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          position={'absolute'}
          opacity={0}
          _hover={{ opacity: 1 }}
          top={0}
          right={0}
          bottom={0}
          left={0}
          bg={'blackAlpha.600'}
          transition={'all 0.3s ease'}
          zIndex={1}
          justifyContent={'center'}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            gap={50}
          >
            {/* 1 st flex */}

            <Flex>
              <AiFillHeart
                size={40}
                color="indianred"
              />
              <Text
                fontWeight={'bold'}
                ml={2}
                color={'whitesmoke'}
                fontSize={24}
              >
                7
              </Text>
            </Flex>

            {/* 2nd flex */}
            <Flex>
              <FaComment
                size={40}
                color="gray"
              />
              <Text
                fontWeight={'bold'}
                ml={2}
                color={'whitesmoke'}
                fontSize={24}
              >
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* IMG */}

        <Image
          src={img}
          alt="profile post"
          h={'100%'}
          w={'100%'}
          objectFit={'cover'}
        />
      </GridItem>

      {/* modal show */}

      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: '3xl', md: '5xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody
            bg={'gray.200'}
            pb={5}
          >
            <Flex
              gap={4}
              w={{ base: '90%', sm: '70%', md: 'full' }}
              mx={'auto'}
            >
              <Box
                borderRadius={4}
                overflow={'hidden'}
                border={'2px solid red'}
                flex={1.5}
              >
                <Image
                  src={img}
                  alt="profile post"
                />
              </Box>
              <Flex
                flex={1}
                flexDirection={'column'}
                px={10}
                display={{ base: 'none', md: 'flex' }}
              >
                <Flex
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  gap={4}
                >
                  <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Avatar
                      src={img}
                      name="Gokul168"
                      size={'sm'}
                    />
                    <Text
                      fontWeight={'bold'}
                      fontSize={14}
                    >
                      Gokul168_♥
                    </Text>
                  </Flex>
                  <Box _hover={{ bd: 'red.500', color: 'white' }}>
                    <MdDelete
                      size={20}
                      cursor={'pointer'}
                    />
                  </Box>
                </Flex>

                {/* divide st */}

                <Divider
                  my={4}
                  bg={'gray.900'}
                />
                {commentDetails.map((comment, index) => (
                  <VStack
                    key={index}
                    w={'full'}
                    alignItems={'start'}
                    maxW={'350px'}
                    overflow={'auto'}
                  >
                    <Comment
                      createdAt={comment.createdAt}
                      userName={comment.userName}
                      profileImg={comment.profileImg}
                      text={comment.text}
                    />
                  </VStack>
                ))}
                <Divider
                  my={4}
                  bg={'gray.800'}
                />
                <PostFooter isProfilePage={true} />
                {/* divide end */}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost
