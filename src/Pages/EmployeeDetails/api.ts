import baseApi from '../../services';
import { Employee } from '../Employee/api';

const employeeByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query<{ data: Employee }, string>({
      query: (id) => `/employees/${id}`
    })
  })
});

export const { useGetEmployeeQuery, useLazyGetEmployeeQuery } = employeeByIdApi;
