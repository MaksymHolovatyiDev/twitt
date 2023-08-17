import { RootState } from '@Redux/store';
import { useSelector } from 'react-redux';

export const useGetTokenState = () => {
  return useSelector((state: RootState) => state.token.token);
};