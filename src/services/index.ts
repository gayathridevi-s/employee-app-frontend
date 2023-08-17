import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ['xyz']
});

export default baseApi;
