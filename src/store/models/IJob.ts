import { IBoard, IBoardColumn, IUser } from '.';
import ICompany from './ICompany';

export interface IJob {
  id: string;
  title: string;
  description?: string;
  postUrl?: string;
  location?: {
    address: string;
    lat: number;
    lng: number;
  };
  dateApplied?: string;
  board: IBoard;
  boardColumn: IBoardColumn;
  company: ICompany | string;
  owner?: IUser;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IJobInput {
  title: string;
  board: string;
  boardColumn: string;
  company?: string;
  companyCustom?: string;
}

export interface IJobUpdate {
  title?: string;
  description?: string;
  postUrl?: string;
  location?: {
    address: string;
  };
  dateApplied?: string;
}
