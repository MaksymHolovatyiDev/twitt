import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '@environment/variables';
import {
  AuthReq,
  AuthRes,
  CreatePostReq,
  LikeReq,
  LikeRes,
  PostType,
  UserType,
} from './backendTypes';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: headers => {
    if (!headers.get('Authorization')) {
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const backendAPI = createApi({
  reducerPath: 'backendAPI',
  baseQuery: baseQuery,

  endpoints: builder => ({
    Authorization: builder.mutation<AuthRes, AuthReq>({
      query: data => ({
        url: `auth${data.path}`,
        method: 'POST',
        body: data.body,
      }),
    }),

    GetAllPosts: builder.query<PostType[], void>({
      query: () => ({
        url: 'posts/all',
      }),
    }),

    GetUser: builder.query<UserType, void>({
      query: () => ({
        url: 'posts/user',
      }),
    }),

    CreatePosts: builder.mutation<PostType, CreatePostReq>({
      query: body => ({
        url: 'posts/create',
        method: 'POST',
        body,
      }),
    }),

    likePost: builder.mutation<LikeRes, LikeReq>({
      query: body => ({
        url: 'posts/like',
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const {
  useAuthorizationMutation,
  useGetAllPostsQuery,
  useGetUserQuery,
  useCreatePostsMutation,
  useLikePostMutation,
} = backendAPI;
