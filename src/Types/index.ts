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

interface headerDataElement {
  text: string;
  path: string;
}

export interface profileData {
  userName: string;
}
