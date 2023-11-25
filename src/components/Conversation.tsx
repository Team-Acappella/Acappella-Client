import {
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import imgBgConversation from '../assets/img_conversation_bg.jpeg';
import { professorsMap } from '../constants';
import { ProfessorType } from '../types';
import { colors } from '../utils/colors';

type ConversationProps = {
  selectedProfessorType: ProfessorType;
  setSelectedProfessorType: React.Dispatch<
    React.SetStateAction<ProfessorType | undefined>
  >;
};

const Conversation = (props: ConversationProps) => {
  const professor = professorsMap[props.selectedProfessorType];
  return (
    <Modal
      isOpen
      onClose={() => props.setSelectedProfessorType(undefined)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent h='90vh' maxW='min(1000px, 100vw - 60px)'>
        <ModalHeader>{professor.name} 교수님과의 대화</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            justify='center'
            bg={`url(${imgBgConversation})`}
            bgSize='cover'
            bgRepeat='no-repeat'
            backgroundPosition='center'
            h='70vh'
          >
            <Image
              src={professor.imageSrc}
              h='60vh'
              objectFit='contain'
              alignSelf='flex-end'
            />
          </Flex>
          <Flex flexDirection='column' align='center' marginTop='-160px'>
            <Flex
              bg='linear-gradient(45deg, #bad3b4, #d8f3d1)'
              w='92%'
              h='120px'
              p='16px'
              pt='20px'
              borderRadius='4px'
              flexDirection='column'
              align='flex-start'
            >
              <Box
                p='4px 16px'
                borderRadius='20px'
                bg={colors.skku_main}
                color='white'
                mt='-32px'
                ml='-28px'
                zIndex='2'
                fontWeight='700'
                fontSize='18px'
              >
                {professor.name} 교수님
              </Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Text color='black' fontWeight='500' fontSize='20px'>
                  {professor.intro}
                </Text>
              </motion.div>
            </Flex>
          </Flex>
          <SimpleGrid></SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Conversation;
