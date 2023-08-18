import Layout from '../../Layout/Layout';
import { FC } from 'react';
import Table from '../../Components/Table/table';
const Employee: FC = () => {
  return (
    <>
      <Layout
        label='Employee List'
        actionBoxLabel='Create employee'
        imageUrl='/assets/icons/+.svg'
        content={<Table />}
      />
    </>
  );
};

export default Employee;
