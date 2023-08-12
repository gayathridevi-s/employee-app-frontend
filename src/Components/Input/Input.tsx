import { FC } from 'react';
import './Styles.css';

type InputPropsTypes = {
  value: string;
  onChange: (e) => void;
  label: string;
  placeholder: string;
  type: 'text' | 'password'|'number';
};
const Input: FC<InputPropsTypes> = (props) => {
  return (
    <div>
      <div>{props.label}</div>
      <input
        className='input'
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
