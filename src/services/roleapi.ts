import baseApi from '.';

const roleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getrole: builder.query<any, void>({
      query: () => '/roles/'
    })
  })
});

export const { useGetroleQuery } = roleApi;
