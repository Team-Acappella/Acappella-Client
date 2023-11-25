import {
  professorImageMap,
  professorResizedImageMap,
} from '../assets/professors';
import { ProfessorInfoType, ProfessorType } from '../types';

export const professorsMap: Record<ProfessorType, ProfessorInfoType> = {
  [ProfessorType.AHN]: {
    type: ProfessorType.AHN,
    name: '안성진',
    description: '안성진 교수님',
    mainSubject: '컴퓨터네트워크',
    imageSrc: professorImageMap[ProfessorType.AHN],
    imageResizedSrc: professorResizedImageMap[ProfessorType.AHN],
    intro: '컴퓨터교육과 안성진 교수입니다.',
  },
  [ProfessorType.JAE]: {
    type: ProfessorType.JAE,
    name: '김재현',
    description: '김재현 교수님',
    mainSubject: '데이타베이스',
    imageSrc: professorImageMap[ProfessorType.JAE],
    imageResizedSrc: professorResizedImageMap[ProfessorType.JAE],
    intro: '엉~?',
  },
  [ProfessorType.JANG]: {
    type: ProfessorType.JANG,
    name: '이장원',
    description: '이장원 교수님',
    mainSubject: '컴퓨터구조',
    imageSrc: professorImageMap[ProfessorType.JANG],
    imageResizedSrc: professorResizedImageMap[ProfessorType.JANG],
    intro: '안녕하세요. 이장원입니다.',
  },
  [ProfessorType.OAK]: {
    type: ProfessorType.OAK,
    name: '한옥영',
    description: '한옥영 교수님',
    mainSubject: '자료구조',
    imageSrc: professorImageMap[ProfessorType.OAK],
    imageResizedSrc: professorResizedImageMap[ProfessorType.OAK],
    intro: '오늘도 행복하시고 건강하세요~',
  },
  [ProfessorType.PARK]: {
    type: ProfessorType.PARK,
    name: '박천수',
    description: '박천수 교수님',
    mainSubject: '피지컬컴퓨팅',
    imageSrc: professorImageMap[ProfessorType.PARK],
    imageResizedSrc: professorResizedImageMap[ProfessorType.PARK],
    intro: '안녕하세요, 박천수 교수에요.',
  },
  [ProfessorType.RYANG]: {
    type: ProfessorType.RYANG,
    name: '김미량',
    description: '김미량 교수님',
    mainSubject: '컴퓨터교재연구및지도법',
    imageSrc: professorImageMap[ProfessorType.RYANG],
    imageResizedSrc: professorResizedImageMap[ProfessorType.RYANG],
    intro: '안녕하세요. 김미량쌤입니다.',
  },
  [ProfessorType.RYU]: {
    type: ProfessorType.RYU,
    name: '류은석',
    description: '류은석 교수님',
    mainSubject: '운영체제',
    imageSrc: professorImageMap[ProfessorType.RYU],
    imageResizedSrc: professorResizedImageMap[ProfessorType.RYU],
    intro: 'All the best, 류은석입니다.',
  },
};

export const professorsTypeArray: ProfessorType[] = [
  ProfessorType.RYU,
  ProfessorType.JANG,
  ProfessorType.RYANG,
  ProfessorType.OAK,
  ProfessorType.JAE,
  ProfessorType.PARK,
  ProfessorType.AHN,
];
export const professorsArray: ProfessorInfoType[] = [
  professorsMap[ProfessorType.RYU],
  professorsMap[ProfessorType.JANG],
  professorsMap[ProfessorType.RYANG],
  professorsMap[ProfessorType.OAK],
  professorsMap[ProfessorType.JAE],
  professorsMap[ProfessorType.PARK],
  professorsMap[ProfessorType.AHN],
];
