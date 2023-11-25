import { Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ProfessorInfoType } from '../types';
import { colors } from '../utils/colors';

type ProfessorCardProps = {
  onClick: () => void;
  professor: ProfessorInfoType;
};

const ProfessorCard = (props: ProfessorCardProps) => {
  return (
    <motion.div
      onClick={props.onClick}
      style={{
        cursor: 'pointer',
        width: '180px',
        height: '324px',
        background: `linear-gradient(white 70%, ${colors.skku_main})`,
        boxShadow: 'rgba(149, 157, 165, 0.8) 0px 8px 24px',
        borderTopRightRadius: '40px',
        borderBottomLeftRadius: '40px',
        borderTopLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      whileTap={{ scale: 1.1 }}
      whileHover={{
        width: '200px',
        height: '360px',
        background: `linear-gradient(white 4%, ${colors.skku_main})`,
        boxShadow: 'rgba(149, 157, 165, 0.8) 0px 12px 36px',
      }}
    >
      <Text pl='8px' pt='4px'>
        {props.professor.mainSubject}
      </Text>
      <Text pl='8px' fontWeight='700'>
        {props.professor.name}
      </Text>
      <Image
        src={props.professor.imageResizedSrc}
        w='100%'
        objectFit='contain'
        flex={1}
      />
    </motion.div>
  );
};

export default ProfessorCard;
