import { FC } from 'react';
import './styles.css';
export type ButtonPropsTypes = {
  onClick?: (e) => void;
  label: string;
};
const Button: FC<ButtonPropsTypes> = (props) => {
  const { label, onClick } = props;

  return (
    <button className='Button' onClick={onClick} data-testid='button-test'>
      {label}
    </button>
  );
};

export default Button;
