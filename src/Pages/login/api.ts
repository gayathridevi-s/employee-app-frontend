import baseApi from '../../services';

type loginPayloadType = {
  username: string;
  password: string;
};

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: loginPayloadType) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});
export const { useLoginMutation } = loginApi;
