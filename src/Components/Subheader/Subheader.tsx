import { FC } from 'react';
import './styles.css';
type subheaderpropstype = {
  label: string;
};
const Subheader: FC<subheaderpropstype> = (props) => {
  return <div className='subheader'>{props.label}</div>;
};

export default Subheader;
