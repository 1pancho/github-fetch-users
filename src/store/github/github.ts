import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, IRepo } from 'models/models'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_GITHUB_API_URL,
  }),
  endpoints: (build) => ({
    searchUsers: build.query<IUser, string>({
      query: (search: string) => ({
        url: `users/${search}`,
      }),
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
})

export const { useSearchUsersQuery, useGetUserReposQuery } = githubApi
