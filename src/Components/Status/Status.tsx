import { FC } from 'react';
import './styles.css';
import { StatusEnum } from '../EnterDetails/EnterDetails';
const statusMap = {
  Active: { label: StatusEnum.ACTIVE, className: 'Active' },
  Inactive: { label: StatusEnum.INACTIVE, className: 'Inactive' },
  Probation: { label: StatusEnum.PROBATION, className: 'Probation' }
};

type StatusPropTypes = {
  status: string;
};
const Status: FC<StatusPropTypes> = (props) => {
  const currentData = statusMap[props.status];

  return <div className={'status ' + currentData?.className}>{currentData.label}</div>;
};

export default Status;
