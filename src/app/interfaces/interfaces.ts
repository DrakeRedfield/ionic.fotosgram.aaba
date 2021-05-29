export interface IResponse {
  status: boolean,
  token: string,
  user?: IUser,
}

export interface IPostResponse {
  status: boolean;
  page: number;
  post: IPost[];
}

export interface IPost {
  imgs?: string[];
  _id?: string;
  message?: string;
  coords?: string;
  user?: IUser;
  created?: string;
  __v?: number;
  hasCoords?: boolean;
}

export interface IUser {
  avatar?: string;
  _id?: string;
  nombre?: string;
  email?: string;
  __v?: number;
  password?: string,
}