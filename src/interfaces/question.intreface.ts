import { IAnswer } from '@/common/interfaces/answer.interface';

export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
  reward: string;
}
