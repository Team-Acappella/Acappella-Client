export enum ProfessorType {
  OAK = 'Oak',
  JAE = 'Jae',
  RYU = 'Ryu',
  JANG = 'Jang',
  PARK = 'Park',
  AHN = 'Ahn',
  RYANG = 'Ryang',
}

export type ProfessorInfoType = {
  type: ProfessorType;
  name: string;
  description: string;
  mainSubject: string;
  imageSrc: string;
  imageResizedSrc: string;
  intro: string;
};

export type ExampleQuestionMediaType = {
  videoSrc: string;
  audioSrc: string;
  subtitle: string;
};

export type ExampleQuestionInfoType = {
  index: number;
  question: string;
  answer?: ExampleQuestionMediaType; // TODO : fill example answers
};
