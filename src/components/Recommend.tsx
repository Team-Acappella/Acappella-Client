import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoMdPerson } from 'react-icons/io';
import '../styles/type-writer.css';
import { colors } from '../utils/colors';

const Recommend = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 1,
        delay: 2.5,
      }}
    >
      <Flex
        gap='40px'
        marginTop='68px'
        borderTop={`1px solid ${colors.skku_main}`}
        paddingTop='32px'
        justifyContent={'center'}
      >
        <Text fontSize='28px' whiteSpace='pre-line' fontWeight='600'>
          {'이런 학생들이\n쓰면 좋아요'}
        </Text>
        <Flex gap='24px'>
          <Flex
            flexDirection='column'
            gap='4px'
            alignItems='center'
            justifyContent='center'
          >
            <IoMdPerson size='96px' fill={colors.skku_main} />
            <Text textAlign='center' whiteSpace='pre-line' fontWeight='500'>
              {'교수님과의 대면이\n부끄러운 학생'}
            </Text>
          </Flex>
          <Flex
            flexDirection='column'
            gap='4px'
            alignItems='center'
            justifyContent='center'
          >
            <IoMdPerson size='96px' fill={colors.skku_main} />
            <Text textAlign='center' whiteSpace='pre-line' fontWeight='500'>
              {'질문 줄을\n기다리다 지친 학생'}
            </Text>
          </Flex>
          <Flex
            flexDirection='column'
            gap='4px'
            alignItems='center'
            justifyContent='center'
          >
            <IoMdPerson size='96px' fill={colors.skku_main} />
            <Text textAlign='center' whiteSpace='pre-line' fontWeight='500'>
              {'언제든지 학습에\n접근하고 싶은 학생'}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Recommend;
