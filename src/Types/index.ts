interface AuthFormDataItem {
  name: string;
  id: string;
  description: string;
}

export interface AuthData {
  text: string;
  formData: AuthFormDataItem[];
}
