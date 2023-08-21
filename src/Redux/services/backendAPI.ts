import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from '@environment/variables';
import {
  AuthReq,
  AuthRes,
  CommentReq,
  CommentRes,
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
  tagTypes: ['AllPosts', 'User'],
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
      providesTags: ['AllPosts'],
    }),

    GetUser: builder.query<UserType, void>({
      query: () => ({
        url: 'posts/user',
      }),
      providesTags: ['User'],
    }),

    CreatePosts: builder.mutation<PostType, CreatePostReq>({
      query: body => ({
        url: 'posts/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AllPosts', 'User'],
    }),

    likePost: builder.mutation<LikeRes, LikeReq>({
      query: body => ({
        url: 'posts/like',
        method: 'PATCH',
        body,
      }),
    }),

    commentPost: builder.mutation<CommentRes, CommentReq>({
      query: body => ({
        url: 'posts/comment',
        method: 'POST',
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
  useCommentPostMutation,
} = backendAPI;
