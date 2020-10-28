import { IBoard, IBoardColumn, IUser } from '.';
import ICompany from './ICompany';

export interface IJob {
  id: string;
  title: string;
  description?: string;
  postUrl?: string;
  location?: string;
  dateApplied?: string;
  board: IBoard;
  boardColumn: IBoardColumn;
  company: ICompany;
  owner?: IUser;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IJobInput {
  title: string;
  board: string;
  boardColumn: string;
  company: string;
}
