import { FC } from 'react';
import Details from '../../Components/Details/Details';
import Layout from '../../Layout/Layout';

const EmployeeDetails: FC = () => {
  return (
    <>
      <Layout label='EmployeeDetails' content={<Details />} />
    </>
  );
};

export default EmployeeDetails;
