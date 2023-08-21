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
  name: string;
  likesNumber: number;
  commentsNumber: number;
  isLiked: boolean;
  comments: {
    name: string;
    text: string;
    _id: string;
  };
}

export interface UserType {
  name: string;
  posts: PostType[];
}

export interface CreatePostReq {
  text: string;
  image?: any;
}

export interface LikeReq {
  _id: string;
}

export interface LikeRes {
  liked: boolean;
}

export interface CommentReq {
  _id: string;
  text: string;
}

export interface CommentRes {
  name: string;
  text: string;
  _id: string;
}
