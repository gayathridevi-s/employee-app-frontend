import { FC } from 'react';
import Details from '../../Components/Details/Details';
import Layout from '../../Layout/Layout';

const EmployeeDetails: FC = () => {
  return (
    <>
      <Layout
        label='Employee Details'
        actionBoxLabel='Edit'
        imageUrl='/assets/icons/edit.svg'
        content={<Details />}
      />
    </>
  );
};

export default EmployeeDetails;
