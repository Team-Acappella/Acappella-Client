import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import imgIntro from '../assets/img-intro.png';
import '../styles/type-writer.css';

const Typewriter = ({ content }: { content: string }) => {
  // 각 글자를 span 태그로 분리하여 배열로 생성합니다.
  const letters = content.split('').map((letter, index) => (
    <tspan
      key={index}
      style={{
        animationDelay: `${index * 0.04}s`, // 각 글자에 대해 애니메이션 지연 적용
      }}
    >
      {letter}
    </tspan>
  ));

  return (
    <Box w='1200px' h='30vh'>
      <svg viewBox='0 0 700 400' xmlns='http://www.w3.org/2000/svg'>
        <path
          id='curve'
          d='M102.48,148.6 c5.6-3,91.7-48.4,250.04-47.8 c155.82,0.6,239.12,45.3,245.14,48.5'
          fill='transparent'
        />
        <text>
          <textPath xlinkHref='#curve' className='typewritter'>
            {letters}
          </textPath>
        </text>
      </svg>
    </Box>
  );
};

const Intro = () => {
  return (
    <Flex
      marginTop='70px'
      h='calc(100vh - 272px)'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Typewriter content='Computer Education' />
      <Flex align='center' gap='120px'>
        <motion.div
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            times: [0, 1],
            scale: [3, 1],
            opacity: [0, 1],
          }}
          style={{
            fontWeight: 700,
            color: 'white',
            fontSize: '60px',
            textShadow:
              '3px 0px 7px rgba(0,0,0,0.2), -3px 0px 7px rgba(0,0,0,0.2), 0px 4px 7px rgba(0,0,0,0.2)',
          }}
        >
          AI TUTOR
        </motion.div>
        <motion.img
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 1,
            delay: 2,
            times: [0, 1],
            opacity: [0, 1],
            translateY: [-20, 0],
          }}
          width='320px'
          src={imgIntro}
        />
      </Flex>
    </Flex>
  );
};

export default Intro;
