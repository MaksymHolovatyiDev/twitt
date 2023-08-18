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
  isLiked: boolean;
}

export interface UserType {
  name: string;
  posts: PostType[];
}

export interface CreatePostReq {
  text: string;
  image?: string;
}

export interface LikeReq {
  _id: string;
}

export interface LikeRes {
  liked: boolean;
}
