interface AuthFormDataItem {
  name: string;
  id: string;
}

export interface AuthData {
  text: string;
  formData: AuthFormDataItem[];
}
