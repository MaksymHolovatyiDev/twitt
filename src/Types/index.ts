import { CommentRes, PostType } from '@Redux/services/backendTypes';

export interface formDataValuesType {
  email: string;
  password: string;
  name?: string;
}

export interface PostListType {
  posts: PostType[];
}

export interface setIsOpenType {
  setIsOpen: (open: boolean) => void;
}

export interface profileData {
  userName: string;
}

export interface postUserType {
  name: string;
}

export interface likesType {
  likes: null | number;
  liked: null | boolean;
}

export interface postCommentsType {
  text: string;
  _id: string;
  comments: any;
}
