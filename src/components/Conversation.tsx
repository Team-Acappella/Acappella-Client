import {
  Box,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';

import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { RxTriangleRight } from 'react-icons/rx';
import imgBgConversation from '../assets/img_conversation_bg.jpeg';
import { professorsMap, questionsMap } from '../constants';
import { ExampleQuestionInfoType, ProfessorType } from '../types';
import { colors } from '../utils/colors';

type ConversationProps = {
  selectedProfessorType: ProfessorType;
  setSelectedProfessorType: React.Dispatch<
    React.SetStateAction<ProfessorType | undefined>
  >;
};

const Conversation = (props: ConversationProps) => {
  const professor = professorsMap[props.selectedProfessorType];
  const exampleQuestions = questionsMap[props.selectedProfessorType];

  const [isLoading, setIsLoading] = useState(false);

  const [professorSentence, setProfessorSentence] = useState(professor.intro);
  const [professorMedia, setProfessorMedia] = useState<{
    type: 'image' | 'video';
    src: string;
  }>({ type: 'image', src: professor.imageSrc });

  const onExampleQuestionClick = (question: ExampleQuestionInfoType) => {
    setIsLoading(true);
    setProfessorMedia({ type: 'image', src: professor.imageSrc });
    setTimeout(() => {
      setIsLoading(false);
      if (question.answer) setProfessorSentence(question.answer.subtitle);
      if (question.answer)
        setProfessorMedia({ type: 'video', src: question.answer.videoSrc });
    }, 1000);
  };

  const customQuestionRef = React.useRef<HTMLInputElement>(null);

  const onCustomQuestionEnter = async () => {
    if (isLoading) return;
    const customQuestion = customQuestionRef.current?.value;
    if (!customQuestion) return;
    setIsLoading(true);
    setProfessorMedia({ type: 'video', src: professor.videoLoadingSrc });
    const createVideoResponse = await axios.post(
      'https://www.aca.o-r.kr/create-video',
      {
        question_query: customQuestion,
        professor_id: professor.serverId,
      }
    );
    if (createVideoResponse.status !== 200) {
      return;
    }
    const subtitle = createVideoResponse.data.text;
    const videoId = createVideoResponse.data.talk_id;
    sendRequestWithRetries(videoId, subtitle);
  };

  const sendRequestWithRetries = async (
    videoId: string,
    subtitle: string,
    retries: number = 8,
    interval: number = 2000
  ): Promise<void> => {
    try {
      const res = await axios.post(
        'https://www.aca.o-r.kr/specific',
        { talk_id: videoId },
        { responseType: 'blob' }
      );

      const videoUrl = URL.createObjectURL(res.data);
      setProfessorSentence(subtitle);
      setProfessorMedia({ type: 'video', src: videoUrl });
      setIsLoading(false);
      if (customQuestionRef.current) customQuestionRef.current.value = '';
    } catch (err) {
      if (retries > 0) {
        // 재시도 대기
        await new Promise((resolve) => setTimeout(resolve, interval));
        // 재시도
        await sendRequestWithRetries(videoId, subtitle, retries - 1, interval);
      } else {
        // 모든 재시도 실패
        console.log(err);
        setIsLoading(false);
        setProfessorMedia({ type: 'image', src: professor.imageSrc });
        setProfessorSentence(professor.intro);
        if (customQuestionRef.current) customQuestionRef.current.value = '';
      }
    }
  };

  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <Modal
      isOpen
      onClose={() => props.setSelectedProfessorType(undefined)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent h='96vh' maxW='min(1200px, 100vw - 60px)'>
        <ModalHeader>{professor.name} 교수님과의 대화</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' w='100%' h='100%' flexDirection='column'>
          {isLoading && (
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
              position='absolute'
            />
          )}
          <Flex
            justify='center'
            bg={`url(${imgBgConversation})`}
            bgColor='#bdbdbd'
            bgSize='contain'
            bgRepeat='no-repeat'
            backgroundPosition='center'
            h='62vh'
          >
            {professorMedia.type == 'video' ? (
              <Box
                ref={videoRef}
                as='video'
                src={professorMedia.src}
                h='62vh'
                objectFit='contain'
                alignSelf='flex-end'
                autoPlay
                loop={isLoading}
              />
            ) : (
              <Image
                src={professorMedia.src}
                h='52vh'
                objectFit='contain'
                alignSelf='flex-end'
              />
            )}
          </Flex>
          <Flex
            flexDirection='column'
            align='center'
            gap='8px'
            position='absolute'
            bottom='30vh'
            w='96%'
          >
            <Flex
              bg='linear-gradient(45deg, #bad3b4, #d8f3d1)'
              w='92%'
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
                style={{ minHeight: '52px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Text color='black' fontWeight='500' fontSize='20px'>
                  {professorSentence}
                </Text>
              </motion.div>
            </Flex>
          </Flex>
          {exampleQuestions.length > 0 && (
            <Flex
              bg='linear-gradient(45deg, #bad3b4, #d8f3d1)'
              p='16px'
              pt='20px'
              mt='20px'
              mb='20px'
              borderRadius='4px'
              flexDirection='column'
              gap='8px'
              flex={1}
            >
              <SimpleGrid columns={2} spacing={4}>
                {exampleQuestions.map((question) => (
                  <Box
                    key={question.index}
                    position='relative'
                    onClick={() => onExampleQuestionClick(question)}
                    h='32px'
                    cursor='pointer'
                  >
                    <motion.div
                      style={{
                        zIndex: 99,
                        borderRadius: '8px',
                        height: '32px',
                        overflow: 'hidden',
                        position: 'absolute',
                        background: '#00000000',
                        top: 0,
                        display: 'flex',
                        gap: '6px',
                        padding: '4px 8px',
                      }}
                      whileHover={{
                        zIndex: 100,
                        height: 'auto',
                        background: '#e8f5e4',
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                      }}
                      transition={{ duration: 0 }}
                    >
                      <Box w='20px' h='20px' flex={1}>
                        <RxTriangleRight size={20} />
                      </Box>
                      <span>{question.question}</span>
                    </motion.div>
                  </Box>
                ))}
              </SimpleGrid>
              <Box flex={1} />
              <Input
                ref={customQuestionRef}
                placeholder='직접 입력'
                bg='rgba(256,256,256,0.4)'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onCustomQuestionEnter();
                }}
              />
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Conversation;
