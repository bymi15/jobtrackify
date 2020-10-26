import { IBoard, IBoardColumn } from '.';
import ICompany from './ICompany';

export default interface IJob {
  id: string;
  title: string;
  description?: string;
  role: string;
  board: IBoard | string;
  boardColumn: IBoardColumn | string;
  company: ICompany | string;
  createdAt?: string;
  updatedAt?: string;
}
