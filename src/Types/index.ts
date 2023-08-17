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
