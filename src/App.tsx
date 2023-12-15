import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import bgSkku from './assets/bg_skku.jpeg';
import Conversation from './components/Conversation';
import { Header } from './components/Header';
import Intro from './components/Intro';
import ProfessorCard from './components/ProfessorCard';
import Professors from './components/Professors';
import { professorsArray } from './constants';
import { ProfessorType } from './types';
import useScrollPage from './utils/useScrollPage';

function App() {
  const [selectedProfessorType, setSelectedProfessorType] = useState<
    ProfessorType | undefined
  >(undefined);
  const { page, throttleWheel, onTouchStart, onTouchEnd } = useScrollPage(
    3,
    selectedProfessorType !== undefined
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const firstPageRef = useRef<HTMLDivElement>(null);
  const secondPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (!firstPageRef.current) return;
    if (!secondPageRef.current) return;
    switch (page) {
      case 0:
        wrapperRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        break;
      case 1:
        wrapperRef.current.scrollTo({
          top: firstPageRef.current.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
        break;
      case 2:
        wrapperRef.current.scrollTo({
          top: secondPageRef.current.offsetTop,
          left: 0,
          behavior: 'smooth',
        });

        break;
    }
  }, [page]);

  return (
    <ChakraProvider>
      <Box
        ref={wrapperRef}
        height='100vh'
        overflow='hidden'
        onWheel={throttleWheel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <motion.div
          style={{
            height: '100vh',
            width: '100vw',
            filter: 'grayscale(0.6) contrast(0.75)',
            position: 'absolute',
            top: 0,
            zIndex: -1,
            backgroundImage: `url(${bgSkku})`,
          }}
          animate={page === 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <Header />
        <Intro />
        <Box ref={firstPageRef} />
        <Flex
          justify='center'
          align='center'
          position='relative'
          zIndex='-1'
          h='100vh'
        >
          <Professors />
        </Flex>
        <Box
          h='100vh'
          position='relative'
          boxSizing='border-box'
          ref={secondPageRef}
        >
          <Flex w='100%' gap='20px' align='center' justify='center' h='100%'>
            {professorsArray.map((professor) => (
              <ProfessorCard
                key={professor.type}
                professor={professor}
                onClick={() => setSelectedProfessorType(professor.type)}
              />
            ))}
          </Flex>
        </Box>
        {selectedProfessorType && (
          <Conversation
            selectedProfessorType={selectedProfessorType}
            setSelectedProfessorType={setSelectedProfessorType}
          />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
