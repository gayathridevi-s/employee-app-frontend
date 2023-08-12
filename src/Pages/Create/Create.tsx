import { FC } from 'react';

import Layout from '../../Layout/Layout';
import EnterDetails from '../../Components/EnterDetails/EnterDetails';

const CreateEmployee: FC = () => {
  return (
    <>
      <Layout label='Create Employee' actionBoxLabel='' imageUrl='' content={<EnterDetails />} />
    </>
  );
};

export default CreateEmployee;
