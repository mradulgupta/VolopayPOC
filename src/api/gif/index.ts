import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_ENDPOINT} from './constants';
import {GIF, RequestParams} from './types';
// few things such as api_key etc are hardcoded here but they can be easily moved to places such as .env files and can be accessed from there
export const trendingApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: `${API_ENDPOINT}/`}),
  reducerPath: 'trendingApi',
  endpoints: builder => ({
    trending: builder.query<GIF, number | void>({
      query: (offset = 0) =>
        `trending?api_key=mLWYigTX7bwSTBTAsWF2l4vqHk73Vb9A&limit=20&offset=${offset}&random_id=e826c9fc5c929e0d6c6d423841a282aa&bundle=messaging_non_clips`,
      transformResponse: (response: {data: GIF}, _meta, _arg) => response.data,
    }),
    search: builder.query<GIF, RequestParams>({
      query: req =>
        `search?api_key=mLWYigTX7bwSTBTAsWF2l4vqHk73Vb9A&q=${req.query}&limit=20&offset=${req.off}&lang=en&random_id=e826c9fc5c929e0d6c6d423841a282aa&bundle=messaging_non_clips`,
      transformResponse: (response: {data: GIF}, _meta, _arg) => response.data,
    }),
  }),
});
export const {useTrendingQuery, useSearchQuery} = trendingApi;
