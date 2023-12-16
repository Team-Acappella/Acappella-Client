import { ProfessorType } from '../../types';
import imgAhn from './ahn.png';
import imgAhnFixed from './ahn_fixed.png';
import imgJae from './jae.png';
import imgJaeFixed from './jae_fixed.png';
import imgJang from './jang.png';
import imgJangFixed from './jang_fixed.png';
import imgOak from './oak.png';
import imgOakFixed from './oak_fixed.png';
import imgPark from './park.png';
import imgParkFixed from './park_fixed.png';
import imgAhnResized from './resized/ahn.png';
import imgJaeResized from './resized/jae.png';
import imgJangResized from './resized/jang.png';
import imgOakResized from './resized/oak.png';
import imgParkResized from './resized/park.png';
import imgRyangResized from './resized/ryang.png';
import imgRyuResized from './resized/ryu.png';
import imgRyang from './ryang.png';
import imgRyangFixed from './ryang_fixed.png';
import imgRyu from './ryu.png';
import imgRyuFixed from './ryu_fixed.png';

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

const professorFixedImageMap: Record<ProfessorType, string> = {
  [ProfessorType.AHN]: imgAhnFixed,
  [ProfessorType.JAE]: imgJaeFixed,
  [ProfessorType.JANG]: imgJangFixed,
  [ProfessorType.OAK]: imgOakFixed,
  [ProfessorType.PARK]: imgParkFixed,
  [ProfessorType.RYANG]: imgRyangFixed,
  [ProfessorType.RYU]: imgRyuFixed,
};

export { professorFixedImageMap, professorImageMap, professorResizedImageMap };
