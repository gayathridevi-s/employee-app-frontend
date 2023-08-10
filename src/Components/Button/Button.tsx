import { FC } from 'react';

type ButtonPropsTypes = {
  onClick: (e) => void;
  label: string;
};
const Button: FC<ButtonPropsTypes> = (props) => {
  const { label, onClick } = props;

  return <button onClick={onClick}>{label}</button>;
};

export default Button;
