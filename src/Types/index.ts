import { PostType } from '@Redux/services/backendTypes';

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

