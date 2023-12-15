import {
  professorImageMap,
  professorResizedImageMap,
} from '../assets/professors';
import {
  ExampleQuestionInfoType,
  ProfessorInfoType,
  ProfessorType,
} from '../types';

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

export const DUMMY_QUESTION = '등록 전!';
export const DUMMY_ANSWER = (subtitle?: string) => ({
  subtitle: subtitle ?? '등록 전!',
  videoSrc: '/examples/jae_0.webm',
  audioSrc: '/examples/jae_0.wav',
});

export const questionsMap: Record<ProfessorType, ExampleQuestionInfoType[]> = {
  [ProfessorType.RYU]: [
    {
      index: 0,
      question:
        'Multi-processing과 multi-thread의 구조를 보다가 둘다 공통적으로 register와 stack을 서로 공유하지 않는다는 것을 알게 되었습니다. 책을 읽어보았는데 이유를 정확히 알 수 없어 이유가 무엇인지 궁금합니다.',
      answer: DUMMY_ANSWER(
        'Register와 stack은 프로그램의 흐름 분기 시에 프로세스 및 쓰레드마다 별도의 값을 저장해야 하기 때문에 프로세스 및 스레드 간에 공유하지 않는단다.. 시험 공부 열심히 하는구나.. 좋은 결과 있길 바란다.'
      ),
    },
    {
      index: 1,
      question:
        'Parent process에서 10개의 child process를 생성하고 execl()을 통해 다른 경로에 위치한 프로그램을 실행시켜보았습니다. 10개 child process 모두 정상적으로 동작하고 종료되나 생성 순서와 무관하게 동작하고 종료된다는 것을 알게 되었습니다. Child process 간에는 우선순위가 없기 때문에 생성 순서와 무관하게 실행되는 것인가요?',
      answer: DUMMY_ANSWER(
        '생성된 프로세스들은 병렬적으로 실행되고, 운영체제에 의해 스케쥴링 되기 때문에 무조건 생성된 순서대로 실행되고 종료된다는 보장은 없단다.. 시험 공부 열심히 하는구나.. 좋은 결과 있길 바란다.'
      ),
    },
    {
      index: 2,
      question:
        'execl() 시스템 콜을 사용하기 위해선 새로 시작할 프로그램 코드를 미리 생성해놔야 하는 것이 맞나요?',
      answer: DUMMY_ANSWER(
        '새로 시작할 소스코드를 컴파일하여 실행파일을 미리 생성해두는 것이 맞아.. 그 실행파일 실행 시 전달할 파라미터 값들은 exec()류 시스템콜마다 다르단다.. 시험 공부 열심히 하는구나.. 좋은 결과 있길 바란다.'
      ),
    },
    {
      index: 3,
      question:
        '교수님, while문에 ;이 붙어있는 것은 전부 busy wait에 해당하며 CPU 사이클을 낭비하고 있는 것인가요?',
      answer: DUMMY_ANSWER(
        '전부라고 단정지을 수 없어.. 해당 반복문이 단순히 특정 조건이 만족되는 지를 확인하는 용도일 경우, 대부분 그렇다고 할 수 있을 것 같네.. 시험 공부 열심히 하는구나.. 좋은 결과 있길 바란다.'
      ),
    },
  ],
  [ProfessorType.JANG]: [
    {
      index: 0,
      question:
        "'캐시 메모리' 교안 9페이지에서 문제 풀이를 하실 때 L1에서 원하는 데이터를 찾을 확률이 낮은 경우에는 오히려 평균 시간이 길어지므로 L1 캐시를 지우는 게 낫다고 말씀하셨는데, 원하는 데이터를 찾을 확률은 어떻게 확인할 수 있는 건가요?",
      answer: DUMMY_ANSWER(
        '데이터를 찾을 확률은 문제에서 주어집니다.. 현실적으로는 캐시 미스를 카운트 하는 툴이 있어서 그 툴을 사용해서 실제로 미스 확률을 계산합니다.'
      ),
    },
    { index: 1, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 2, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 3, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
  ],
  [ProfessorType.RYANG]: [
    { index: 0, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 1, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 2, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 3, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
  ],
  [ProfessorType.OAK]: [
    { index: 0, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 1, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 2, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 3, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
  ],
  [ProfessorType.JAE]: [
    {
      index: 0,
      question:
        '릴레이션 특성 중 속성의 원자성이란 속성이 다중 값을 가질 수 없다는 것을 의미하는데, 다중 값은 더 분해될 수 있는 값을 말하는 것인가요?',
      answer: {
        subtitle:
          '다중값은 다수개의 전화번호와 같이 여러 개의 값이 있는 경우인데 다중값이 분해되고 안되고는 다른 의미예요.. 만약 주소가 여러 곳일 경우 주소가 다중값을 가질 수 있는데 각각의 주소가 복합 속성일 수도 있지.',
        videoSrc: '/examples/jae_0.webm',
        audioSrc: '/examples/jae_0.wav',
      },
    },
    {
      index: 1,
      question:
        'ER 다이어그램을 그릴 때, 개체와 개체를 연결하려면 그 사이에 무슨 관계인지 꼭 표기해야 하나요? 아니면 중간에 마름모는 반드시 그려야 하나요?',
      answer: DUMMY_ANSWER(
        '현재 사용되고 있는 툴에서는 관계를 표현하는 마름모를 사용하지 않지만 일반적으로 ER 다이어그램을 표현할 때는 관계를 표현하는 마름모를 그려요.'
      ),
    },
    {
      index: 2,
      question:
        '네트워크 데이터 모델의 경우, n:m 관계를 직접적으로 표현하는 것은 불가능하지만 간접적으로는 표현 가능한 것이 맞나요?',
      answer: DUMMY_ANSWER(
        '네 맞아요. 네트워크 데이터 모델에서 다대다 관계를 모델링하기 위해서는, 두 데이터 집합 사이의 관계를 나타내는 ‘연결 레코드’ 혹은 ‘연결 엔티티’를 사용할 수 있어요.'
      ),
    },
    {
      index: 3,
      question: '트랜잭션에서 ‘원자성’이 중요한 이유는 무엇인가요? ',
      answer: DUMMY_ANSWER(
        '원자성은 트랜잭션이 부분적으로만 실행되는 것을 방지하고, 데이터의 일관성과 신뢰성을 유지하는 데에 중요해요. 은행 계좌 간의 송금의 경우, 한 계좌에서 돈이 출금되고 다른 계좌에 입금되어야 하잖아요? 원자성이 보장되면, 이 두 작업은 모두 성공적으로 수행되거나, 아니면 어떠한 작업도 수행되지 않는 거에요. 이렇게 하면 시스템에 문제가 생겼을 때도 데이터 일관성을 유지할 수 있어요.'
      ),
    },
  ],
  [ProfessorType.PARK]: [
    { index: 0, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 1, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 2, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 3, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
  ],
  [ProfessorType.AHN]: [
    {
      index: 0,
      question:
        'Distance-Vector routing, Link-State routing 중 더 많이 사용되고 있는 라우팅 방식은 무엇인가요?',
      answer: DUMMY_ANSWER(
        '현재 많은 네트워크에서는 Link-State routing 방식이 더 많이 사용됩니다.. Link-State routing은 네트워크의 전체 토폴로지 정보를 가지고 있으며, 이를 이용해 라우팅 결정을 합니다.. 요즘에는 대부분의 기업 및 대규모 네트워크에서 Link-State 기반 프로토콜을 사용하는 추세이지만, 특정 환경에서는 Distance-Vector 라우팅이 적절할 수도 있습니다..'
      ),
    },
    {
      index: 1,
      question: 'QoS는 무엇의 약자이고, 어떤 상황에서 사용되나요?',
      answer: DUMMY_ANSWER(
        'QoS는 Quality of Service의 약자로, 네트워크 트래픽 관리 및 데이터 전송 품질을 나타내는 데 사용됩니다..'
      ),
    },
    { index: 2, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 3, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
  ],
};
