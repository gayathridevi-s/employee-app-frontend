import baseApi from '../../services';
import { Employee } from '../Employee/api';

export const createApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (body: Employee) => ({
        url: '/employees',
        method: 'POST',
        body
      })
    })
  })
});
export const { useCreateEmployeeMutation } = createApi;
