import { formDataValuesType } from '@Types';

export interface AuthRes {
  access_token: string;
}

export interface AuthReq {
  path: string;
  body: formDataValuesType;
}

export interface PostType {
  _id: string;
  img: string;
  text: string;
  likesNumber: number;
  liked: boolean;
}
