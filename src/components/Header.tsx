import { Box, Flex, Image, Text } from '@chakra-ui/react';
import imgComedu from '../assets/img_logo_comedu.png';
import { colors } from '../utils/colors';

export const Header = () => {
  return (
    <Flex bg={colors.skku_main} p='8px 24px' w='100%' position='fixed'>
      <Flex
        justify='flex-start'
        align='center'
        gap='12px'
        p='4px 20px'
        borderRadius='2px'
      >
        <Image src={imgComedu} alt='SKKU LOGO' />
        <Box h='24px' w='2px' bgColor='#A0A0A0' />
        <Text fontSize='24px' color='#E3E3E3' fontWeight='600'>
          컴퓨터교육과
        </Text>
      </Flex>
    </Flex>
  );
};
