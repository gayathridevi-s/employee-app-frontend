import { FC } from 'react';
import './styles.css';
type subheaderpropstype = {
  label: string;
};
const Subheader: FC<subheaderpropstype> = (props) => {
  console.log(props);

  return (
    <div className='subheader'>
      <div className='subheader1'>{props.label}</div>
      <div className='actionBox'></div>

    </div>
  );
};

export default Subheader;
