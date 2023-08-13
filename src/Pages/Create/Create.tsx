import { FC } from 'react';

import Layout from '../../Layout/Layout';
import EnterDetails from '../../Components/EnterDetails/EnterDetails';
import { useParams } from 'react-router-dom';

const CreateEmployee: FC = () => {
  const { id } = useParams();
  const label = id ? 'Edit Employee' : 'Create Employee';

  return (
    <>
      <Layout label={label} actionBoxLabel='' imageUrl='' content={<EnterDetails />} />
    </>
  );
};

export default CreateEmployee;
