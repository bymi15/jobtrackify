export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserUpdate {
  firstName?: string;
  lastName?: string;
}

export interface IUserChangePassword {
  currentPassword?: string;
  password?: string;
}
