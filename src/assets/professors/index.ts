import { ProfessorType } from '../../types';
import imgAhn from './ahn.png';
import imgJae from './jae.png';
import imgJang from './jang.png';
import imgOak from './oak.png';
import imgPark from './park.png';
import imgAhnResized from './resized/ahn.png';
import imgJaeResized from './resized/jae.png';
import imgJangResized from './resized/jang.png';
import imgOakResized from './resized/oak.png';
import imgParkResized from './resized/park.png';
import imgRyangResized from './resized/ryang.png';
import imgRyuResized from './resized/ryu.png';
import imgRyang from './ryang.png';
import imgRyu from './ryu.png';

const professorImageMap: Record<ProfessorType, string> = {
  [ProfessorType.AHN]: imgAhn,
  [ProfessorType.JAE]: imgJae,
  [ProfessorType.JANG]: imgJang,
  [ProfessorType.OAK]: imgOak,
  [ProfessorType.PARK]: imgPark,
  [ProfessorType.RYANG]: imgRyang,
  [ProfessorType.RYU]: imgRyu,
};

const professorResizedImageMap: Record<ProfessorType, string> = {
  [ProfessorType.AHN]: imgAhnResized,
  [ProfessorType.JAE]: imgJaeResized,
  [ProfessorType.JANG]: imgJangResized,
  [ProfessorType.OAK]: imgOakResized,
  [ProfessorType.PARK]: imgParkResized,
  [ProfessorType.RYANG]: imgRyangResized,
  [ProfessorType.RYU]: imgRyuResized,
};

export { professorImageMap, professorResizedImageMap };
