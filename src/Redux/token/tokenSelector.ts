import { RootState } from '@Redux/store';

export const getToken = (state: RootState) => state.token;
