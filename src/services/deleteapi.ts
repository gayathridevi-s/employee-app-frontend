import baseApi from '.';

const deleteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['xyz']
    })
  })
});

export const { useDeleteEmployeeMutation } = deleteApi;
