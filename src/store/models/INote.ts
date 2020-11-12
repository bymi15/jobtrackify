export interface INote {
  id: string;
  body: string;
  boardId: string;
  jobId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface INoteInput {
  body: string;
  boardId: string;
  jobId?: string;
}

export interface INoteUpdate {
  body?: string;
}
