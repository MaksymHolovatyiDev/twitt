import { PostType } from "@Redux/services/backendTypes";

interface AuthFormDataItem {
  name: string;
  id: string;
  type: string;
}

export interface AuthData {
  text: string;
  formData: AuthFormDataItem[];
}

export interface formDataValuesType {
  email: string;
  password: string;
  name?: string;
}

export interface PostListType{
  posts: PostType[];
}

export interface ModalData{
  data: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
  }
}

