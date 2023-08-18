import { Routes } from '@Routes';

export const getHeaderData = (page: string) => {
  switch (page) {
    case Routes.Profile:
      return {
        text: 'Posts',
        path: Routes.Default,
      };
    default:
      return {
        text: 'Profile',
        path: Routes.Profile,
      };
  }
};
