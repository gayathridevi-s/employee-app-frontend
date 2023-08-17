import baseApi from '.';
// type departmentType = {
//   id: number;
//   name: string;
// };
const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getdepartment: builder.query<any, void>({
      query: () => '/department/'
    })
  })
});

export const { useGetdepartmentQuery } = departmentApi;
