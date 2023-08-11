import Layout from '../../Layout/Layout';
import { FC } from 'react';
import Table from '../../Components/Table/table';
const Employee: FC = () => {
  return (
    <>
      <Layout label='EmployeeDetails' content={<Table/>} />
    </>
  );
};

export default Employee;
