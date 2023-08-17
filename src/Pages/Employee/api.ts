import baseApi from '../../services';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export interface Employee {
  //   id: string;
  name: string;
  id?: string;
  role: string;
  status: string;
  experience: number;
  joiningDate: string;
  departmentId: number;
  username?: string;
  password?: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
}

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ data: Employee[] }, void>({
      query: () => '/employees',
      providesTags: ['xyz']
    })
  })
});

export const { useGetEmployeeListQuery } = employeeApi;
