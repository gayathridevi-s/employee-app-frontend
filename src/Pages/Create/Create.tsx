import { FC } from 'react';

import Layout from '../../Layout/Layout';
import EnterDetails from '../../Components/EnterDetails/EnterDetails';
// import { useParams } from 'react-router-dom';

const CreateEmployee: FC<{ edit: boolean }> = ({ edit }) => {
  // const { id } = useParams();
  const label = edit ? 'Edit Employee' : 'Create Employee';

  return (
    <>
      <Layout label={label} actionBoxLabel='' imageUrl='' content={<EnterDetails edit={edit} />} />
    </>
  );
};

export default CreateEmployee;
