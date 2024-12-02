import { IAnswer } from '@/interfaces/answer.interface';

export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
  reward: string;
}
