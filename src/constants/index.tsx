import {
  professorFixedImageMap,
  professorImageMap,
  professorResizedImageMap,
} from '../assets/professors';
import {
  ExampleQuestionInfoType,
  ExampleQuestionMediaType,
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
    imageFixedSrc: professorFixedImageMap[ProfessorType.AHN],
    intro: '컴퓨터교육과 안성진 교수입니다.',
    videoLoadingSrc: '/examples/ahn_loading.mp4',
    serverId: 7,
  },
  [ProfessorType.JAE]: {
    type: ProfessorType.JAE,
    name: '김재현',
    description: '김재현 교수님',
    mainSubject: '데이타베이스',
    imageSrc: professorImageMap[ProfessorType.JAE],
    imageResizedSrc: professorResizedImageMap[ProfessorType.JAE],
    imageFixedSrc: professorFixedImageMap[ProfessorType.JAE],
    intro: '반갑습니다. 김재현 교수입니다.',
    videoLoadingSrc: '/examples/jae_loading.mp4',
    serverId: 5,
  },
  [ProfessorType.JANG]: {
    type: ProfessorType.JANG,
    name: '이장원',
    description: '이장원 교수님',
    mainSubject: '컴퓨터구조',
    imageSrc: professorImageMap[ProfessorType.JANG],
    imageResizedSrc: professorResizedImageMap[ProfessorType.JANG],
    imageFixedSrc: professorFixedImageMap[ProfessorType.JANG],
    intro: '안녕하세요. 이장원입니다.',
    videoLoadingSrc: '/examples/jang_loading.mp4',
    serverId: 2,
  },
  [ProfessorType.OAK]: {
    type: ProfessorType.OAK,
    name: '한옥영',
    description: '한옥영 교수님',
    mainSubject: '자료구조',
    imageSrc: professorImageMap[ProfessorType.OAK],
    imageResizedSrc: professorResizedImageMap[ProfessorType.OAK],
    imageFixedSrc: professorFixedImageMap[ProfessorType.OAK],
    intro: '오늘도 행복하시고 건강하세요~',
    videoLoadingSrc: '/examples/oak_loading.mp4',
    serverId: 4,
  },
  [ProfessorType.PARK]: {
    type: ProfessorType.PARK,
    name: '박천수',
    description: '박천수 교수님',
    mainSubject: '피지컬컴퓨팅',
    imageSrc: professorImageMap[ProfessorType.PARK],
    imageResizedSrc: professorResizedImageMap[ProfessorType.PARK],
    imageFixedSrc: professorFixedImageMap[ProfessorType.PARK],
    intro: '안녕하세요, 박천수 교수에요.',
    videoLoadingSrc: '/examples/park_loading.mp4',
    serverId: 6,
  },
  [ProfessorType.RYANG]: {
    type: ProfessorType.RYANG,
    name: '김미량',
    description: '김미량 교수님',
    mainSubject: '컴퓨터교재연구및지도법',
    imageSrc: professorImageMap[ProfessorType.RYANG],
    imageResizedSrc: professorResizedImageMap[ProfessorType.RYANG],
    imageFixedSrc: professorFixedImageMap[ProfessorType.RYANG],
    intro: '안녕하세요. 김미량쌤입니다.',
    videoLoadingSrc: '/examples/ryang_loading.mp4',
    serverId: 3,
  },
  [ProfessorType.RYU]: {
    type: ProfessorType.RYU,
    name: '류은석',
    description: '류은석 교수님',
    mainSubject: '운영체제',
    imageSrc: professorImageMap[ProfessorType.RYU],
    imageResizedSrc: professorResizedImageMap[ProfessorType.RYU],
    imageFixedSrc: professorFixedImageMap[ProfessorType.RYU],
    intro: 'All the best, 류은석입니다.',
    videoLoadingSrc: '/examples/ryu_loading.mp4',
    serverId: 1,
  },
};

export const professorsTypeArray: ProfessorType[] = [
  ProfessorType.RYU,
  //ProfessorType.JANG,
  ProfessorType.RYANG,
  ProfessorType.OAK,
  ProfessorType.JAE,
  ProfessorType.PARK,
  ProfessorType.AHN,
];

export const professorsArray: ProfessorInfoType[] = [
  professorsMap[ProfessorType.RYU],
  //professorsMap[ProfessorType.JANG],
  professorsMap[ProfessorType.RYANG],
  professorsMap[ProfessorType.OAK],
  professorsMap[ProfessorType.JAE],
  professorsMap[ProfessorType.PARK],
  professorsMap[ProfessorType.AHN],
];

export const DUMMY_QUESTION = '등록 전!';
export const DUMMY_ANSWER = (subtitle?: string): ExampleQuestionMediaType => ({
  subtitle: subtitle ?? '등록 전!',
  videoSrc: '/examples/jae_0.mp4',
});

export const questionsMap: Record<ProfessorType, ExampleQuestionInfoType[]> = {
  [ProfessorType.RYU]: [
    {
      index: 0,
      question:
        'Multi-processing과 multi-thread의 구조를 보다가 둘다 공통적으로 register와 stack을 서로 공유하지 않는다는 것을 알게 되었습니다. 책을 읽어보았는데 이유를 정확히 알 수 없어 이유가 무엇인지 궁금합니다.',
      answer: {
        subtitle:
          'Register와 stack은 프로그램의 흐름 분기 시에 프로세스 및 쓰레드마다 별도의 값을 저장해야 하기 때문에 프로세스 및 스레드 간에 공유하지 않는단다. 시험 공부 열심히 하는구나. 좋은 결과 있길 바란다.',
        videoSrc: '/examples/ryu_0.mp4',
      },
    },
    {
      index: 1,
      question:
        'Parent process에서 10개의 child process를 생성하고 execl()을 통해 다른 경로에 위치한 프로그램을 실행시켜보았습니다. 10개 child process 모두 정상적으로 동작하고 종료되나 생성 순서와 무관하게 동작하고 종료된다는 것을 알게 되었습니다. Child process 간에는 우선순위가 없기 때문에 생성 순서와 무관하게 실행되는 것인가요?',
      answer: {
        subtitle:
          '생성된 프로세스들은 병렬적으로 실행되고, 운영체제에 의해 스케쥴링 되기 때문에 무조건 생성된 순서대로 실행되고 종료된다는 보장은 없단다. 시험 공부 열심히 하는구나. 좋은 결과 있길 바란다.',
        videoSrc: '/examples/ryu_1.mp4',
      },
    },
    {
      index: 2,
      question:
        'execl() 시스템 콜을 사용하기 위해선 새로 시작할 프로그램 코드를 미리 생성해놔야 하는 것이 맞나요?',
      answer: {
        subtitle:
          '새로 시작할 소스코드를 컴파일하여 실행파일을 미리 생성해두는 것이 맞아. 그 실행파일 실행 시 전달할 파라미터 값들은 exec()류 시스템콜마다 다르단다. 시험 공부 열심히 하는구나. 좋은 결과 있길 바란다.',
        videoSrc: '/examples/ryu_2.mp4',
      },
    },
    {
      index: 3,
      question:
        '교수님, while문에 ;이 붙어있는 것은 전부 busy wait에 해당하며 CPU 사이클을 낭비하고 있는 것인가요?',
      answer: {
        subtitle:
          '전부라고 단정지을 수 없어. 해당 반복문이 단순히 특정 조건이 만족되는 지를 확인하는 용도일 경우, 대부분 그렇다고 할 수 있을 것 같네. 시험 공부 열심히 하는구나. 좋은 결과 있길 바란다.',
        videoSrc: '/examples/ryu_3.mp4',
      },
    },
  ],
  [ProfessorType.JANG]: [
    {
      index: 0,
      question:
        "'캐시 메모리' 교안 9페이지에서 문제 풀이를 하실 때 L1에서 원하는 데이터를 찾을 확률이 낮은 경우에는 오히려 평균 시간이 길어지므로 L1 캐시를 지우는 게 낫다고 말씀하셨는데, 원하는 데이터를 찾을 확률은 어떻게 확인할 수 있는 건가요?",
      answer: {
        subtitle:
          '데이터를 찾을 확률은 문제에서 주어집니다. 현실적으로는 캐시 미스를 카운트 하는 툴이 있어서 그 툴을 사용해서 실제로 미스 확률을 계산합니다.',
        videoSrc: '/examples/jang_0.mp4',
      },
    },
    { index: 1, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 2, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
    { index: 3, question: DUMMY_QUESTION, answer: DUMMY_ANSWER() },
  ],
  [ProfessorType.RYANG]: [
    {
      index: 0,
      question:
        '기말고사 시험 범위와 관련하여 질문이 있습니다! 교수님께서 기말고사가 오픈북으로 진행된다고 말씀하셨는데, 교재에서만 문제가 나오는 것인지 아니면 학우분들의 발표 자료까지 포함되는 것인지 궁금합니다.',
      answer: {
        subtitle:
          '오픈북인만큼 이번 학기 수업에서 다룬 내용 전부를 포함합니다... 학우들이 발표한 부분도 포함된다고 봐야지요… 잘 준비해서 학기 마무리 잘 하세요…',
        videoSrc: '/examples/ryang_0.mp4',
      },
    },
    {
      index: 1,
      question:
        '정보 교과서를 열람하고 싶은데 어디서 찾아봐야 할 지 모르겠습니다. ',
      answer: {
        subtitle:
          '제 사이트에 방문하시면 선배들이 모아둔 자료를 열람하실 수 있어요.. ',
        videoSrc: '/examples/ryang_1.mp4',
      },
    },
    {
      index: 2,
      question:
        '안녕하세요 교수님, 오늘 제가 코로나 양성을 받아 격리를 하게 되었습니다. 이번주에 발표를 맡았는데, 수업에 참여하는 것이 불가능하여 혹시 다른 학우가 먼저 발표를 해도 괜찮을까요?',
      answer: {
        subtitle:
          '저런… 심하지는 않고? 다른 친구가 양해해주면 괜찮지… 잘 회복되면 좋겠네....',
        videoSrc: '/examples/ryang_2.mp4',
      },
    },
    {
      index: 3,
      question:
        '해외 ICT 교육 발표를 준비하고 있는데, 중간에 국가를 바꿔도 되나요?',
      answer: {
        subtitle:
          '다른 조와 겹치지 않는다면 상관 없습니다.. 다만 조사 과정에서 인터뷰도 포함되는 만큼 시간이… 촉박할수도… 인터뷰 과정을 영상으로 녹화할 수 있다면 더욱 좋을 것 같아요..',
        videoSrc: '/examples/ryang_3.mp4',
      },
    },
  ],
  [ProfessorType.OAK]: [
    {
      index: 0,
      question:
        '교수님! Hash 과제를 하려고 하는데, 과제에서 제공된 key 값의 개수가 137개이고, double hashing으로 중복된 value를 없애고자 한다면 결국 value는 0에서 136 사이의 값이 되어야 하는 건가요?',
      answer: {
        subtitle:
          '안녕하세요? Value 값의 범위에는 제한이 없습니다.. 중간중간 비어도 되니, 더 넉넉하게 잡으셔서 중복을 피하셔도 됩니다.. 화이팅!',
        videoSrc: 'examples/oak_0.mp4',
      },
    },
    {
      index: 1,
      question:
        '포인터 numPtr에 int만큼의 메모리를 할당하고, 해당 포인터가 가리키는 곳의 값을 10으로 설정했습니다. 코드를 실행시키니 “NULL 포인터 numPtr을 역참조하고 있습니다.” 라고 뜨는데, 구글링을 해보아도 문제점을 찾지 못했습니다. 어떤 게 문제인지 알 수 있을까요?',
      answer: {
        subtitle:
          '안녕하세요? 어느 환경에서 실행하셨는지 모르겠지만 본인의 코드에는 문제가 없습니다.. 아마 환경 세팅의 문제가 아닐까 싶네요.. 화이팅!',
        videoSrc: 'examples/oak_1.mp4',
      },
    },
    {
      index: 2,
      question:
        '교수님 프로젝트 주제 선정은 어떻게 진행하면 되나요? 평소에 하고 싶었던 주제를 해도 되는건가요?',
      answer: {
        subtitle:
          '각 조별로 수업 중 배웠던 자료구조 중 하나가 할당됩니다.. 해당 자료구조를 활용하는 창의적인 주제를 떠올려보시기 바랍니다! 여러분들의 창의적인 아이디어를 기대합니다!',
        videoSrc: 'examples/oak_2.mp4',
      },
    },
    {
      index: 3,
      question:
        '교수님 ADT에 대한 개념이 잘 이해가 안됩니다! 조금 쉽게 설명해주실 수 있나요?',
      answer: {
        subtitle:
          'ADT는 데이터의 구체적인 표현을 숨기고, 사용자에게는 데이터를 조작하는 방법만을 제공합니다.. 이렇게 함으로써, 데이터 구조의 구현 세부사항을 사용자로부터 숨길 수 있으며, 이를 통해 데이터 구조의 사용과 구현을 분리할 수 있습니다! ADT에 대해 조원들과 함께 토의해보는 것도 아주 좋을 것 같네요!',
        videoSrc: 'examples/oak_3.mp4',
      },
    },
  ],
  [ProfessorType.JAE]: [
    {
      index: 0,
      question:
        '릴레이션 특성 중 속성의 원자성이란 속성이 다중 값을 가질 수 없다는 것을 의미하는데, 다중 값은 더 분해될 수 있는 값을 말하는 것인가요?',
      answer: {
        subtitle:
          '다중값은 다수개의 전화번호와 같이 여러 개의 값이 있는 경우인데 다중값이 분해되고 안되고는 다른 의미예요.. 만약 주소가 여러 곳일 경우 주소가 다중값을 가질 수 있는데 각각의 주소가 복합 속성일 수도 있지.',
        videoSrc: '/examples/jae_0.mp4',
      },
    },
    {
      index: 1,
      question:
        'ER 다이어그램을 그릴 때, 개체와 개체를 연결하려면 그 사이에 무슨 관계인지 꼭 표기해야 하나요? 아니면 중간에 마름모는 반드시 그려야 하나요?',
      answer: {
        subtitle:
          '현재 사용되고 있는 툴에서는 관계를 표현하는 마름모를 사용하지 않지만 일반적으로 ER 다이어그램을 표현할 때는 관계를 표현하는 마름모를 그려요.',
        videoSrc: '/examples/jae_1.mp4',
      },
    },
    {
      index: 2,
      question:
        '네트워크 데이터 모델의 경우, n:m 관계를 직접적으로 표현하는 것은 불가능하지만 간접적으로는 표현 가능한 것이 맞나요?',
      answer: {
        subtitle:
          '네 맞아요. 네트워크 데이터 모델에서 다대다 관계를 모델링하기 위해서는, 두 데이터 집합 사이의 관계를 나타내는 ‘연결 레코드’ 혹은 ‘연결 엔티티’를 사용할 수 있어요.',
        videoSrc: '/examples/jae_2.mp4',
      },
    },
    {
      index: 3,
      question: '트랜잭션에서 ‘원자성’이 중요한 이유는 무엇인가요? ',
      answer: {
        subtitle:
          '원자성은 트랜잭션이 부분적으로만 실행되는 것을 방지하고, 데이터의 일관성과 신뢰성을 유지하는 데에 중요해요. 은행 계좌 간의 송금의 경우, 한 계좌에서 돈이 출금되고 다른 계좌에 입금되어야 하잖아요? 원자성이 보장되면, 이 두 작업은 모두 성공적으로 수행되거나, 아니면 어떠한 작업도 수행되지 않는 거에요. 이렇게 하면 시스템에 문제가 생겼을 때도 데이터 일관성을 유지할 수 있어요.',
        videoSrc: '/examples/jae_3.mp4',
      },
    },
  ],
  [ProfessorType.PARK]: [
    {
      index: 0,
      question:
        '교수님, 교안에 있는대로 회로를 구성했는데 LED에 불이 들어오지 않습니다.',
      answer: {
        subtitle:
          '우선, 회로를 다시 한 번 보죠.. LED가 에노드인지 캐소드인지 확인하셨나요? 각각에 맞는 연결법으로 다시 시도해보셔야 합니다.',
        videoSrc: 'examples/park_0.mp4',
      },
    },
    {
      index: 1,
      question: '수업시간에 제공해주신 키트에는 어떤 센서가 포함되어 있나요?',
      answer: {
        subtitle:
          '수업시간에 배부한 키트에는 스위치, 온도 센서 뿐만 아니라 다이오드, 가변 저항, 부저 등이 포함되어 있습니다. 만약 전선이나 저항이 부족해진다면 제 사무실로 찾아와주세요..',
        videoSrc: 'examples/park_1.mp4',
      },
    },
    {
      index: 2,
      question:
        'Debouncing을 적용하면 오히려 반응 속도가 느려지는 문제가 생기지 않나요?',
      answer: {
        subtitle:
          '먼저 Debouncing을 적용하는 이유에 대해 생각해 보죠.. Debouncing을 적용하지 않으면 튀는 값을 제대로 잡아내지 못해 오류가 생길 수 있기 때문에, 약간의 반응 속도가 늦어지는 걸 감수하고라도 적용해야 합니다.. 직접 딜레이되는 값을 설정해보며 최적의 값을 찾아보아도 좋겠네요. ',
        videoSrc: 'examples/park_2.mp4',
      },
    },
    {
      index: 3,
      question:
        '아두이노 우노의 성능이 텀 프로젝트를 진행하는 데에 충분할까요?',
      answer: {
        subtitle:
          '아두이노 우노는 간단한 발명품을 만들거나 프로토타이핑을 할 때 매우 적합한 성능을 제공해요.. 14개의 디지털 I/O 핀, 6개의 아날로그 입력 핀, 그리고 마이크로컨트롤러는 충분한 사양을 제공합니다. ',
        videoSrc: 'examples/park_3.mp4',
      },
    },
  ],
  [ProfessorType.AHN]: [
    {
      index: 0,
      question:
        'Distance-Vector routing, Link-State routing 중 더 많이 사용되고 있는 라우팅 방식은 무엇인가요?',
      answer: {
        subtitle:
          '현재 많은 네트워크에서는 Link-State routing 방식이 더 많이 사용됩니다.. Link-State routing은 네트워크의 전체 토폴로지 정보를 가지고 있으며, 이를 이용해 라우팅 결정을 합니다.. 요즘에는 대부분의 기업 및 대규모 네트워크에서 Link-State 기반 프로토콜을 사용하는 추세이지만, 특정 환경에서는 Distance-Vector 라우팅이 적절할 수도 있습니다..',
        videoSrc: 'examples/ahn_0.mp4',
      },
    },
    {
      index: 1,
      question: 'QoS는 무엇의 약자이고, 어떤 상황에서 사용되나요?',
      answer: {
        subtitle:
          'QoS는 Quality of Service의 약자로, 네트워크 트래픽 관리 및 데이터 전송 품질을 나타내는 데 사용됩니다..',
        videoSrc: 'examples/ahn_1.mp4',
      },
    },
    {
      index: 2,
      question:
        'BGP는 interdomain 라우팅 프로토콜로 AS 내부에서 동작하는 것으로 알고 있는데, BGP 세션의 한 종류인 eBGP는 어떻게 두 개의 서로 다른 AS의 라우터 간 정보를 교환하는 데 사용되나요?',
      answer: {
        subtitle:
          '두 AS 간에 라우터가 eBGP 세션을 맺게 되면, 각 라우터는 자신이 속한 AS의 라우팅 정보를 상대방 AS의 라우터에게 알리게 됩니다.. 이 정보에는 네트워크 대역, AS 경로, 다음 홉 정보 등이 포함됩니다.',
        videoSrc: 'examples/ahn_2.mp4',
      },
    },
    {
      index: 3,
      question:
        'IGP(Interior Gateway Protocol)와 EGP(Exterior Gateway Protocol)는 각각 어떤 경우에 사용되나요?',
      answer: {
        subtitle:
          'IGP는 내부 네트워크에서 라우터 사이에 정보를 공유하는 프로토콜입니다.. 같은 조직이나 네트워크 안에서 사용됩니다.. EGP는 서로 다른 조직이나 네트워크 사이에 있는 라우터 간에 정보를 공유하는 프로토콜입니다.. 다른 네트워크 간의 라우팅에 사용됩니다.. 수업 시간에 설명하였으니 강의 영상을 참고하세요.',
        videoSrc: 'examples/ahn_3.mp4',
      },
    },
  ],
};
