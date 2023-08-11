import { FC } from 'react';
import './styles.css';
const statusMap = {
  ACTIVE: { label: 'Active', className: 'Active' },
  INACTIVE: { label: 'Inactive', className: 'Inactive' },
  PROBATION: { label: 'Probation', className: 'Probation' }
};

type StatusPropTypes = {
  status: string;
};
const Status: FC<StatusPropTypes> = (props) => {
  const currentData = statusMap[props.status];

  return <div className={'status ' + currentData.className}>{currentData.label}</div>;
};

export default Status;
