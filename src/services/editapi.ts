import { Employee } from '../Pages/Employee/api';
import baseApi from '.';

export const editApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editEmployee: builder.mutation({
      query: (params: { body: Employee, id }) => ({
        url: `/employees/${params.id}`,
        method: 'PUT',
        body: params.body
      })
    })
  })
});
export const { useEditEmployeeMutation } = editApi;
