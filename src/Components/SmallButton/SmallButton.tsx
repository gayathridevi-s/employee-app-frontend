import { FC } from 'react';
import './Styles.css';
export type SmallButtonPropsTypes = {
  color: 'blue' | 'white';
  onClick?: (e) => void;
  label: string;
};
const SmallButton: FC<SmallButtonPropsTypes> = (props) => {
  const { label, onClick, color } = props;
  const buttonClassName = `button ${color === 'blue' ? 'blue-button' : 'white-button'}`;

  return (
    <button className={buttonClassName} onClick={onClick} data-testid='smallbutton-test'>
      {label}
    </button>
  );
};

export default SmallButton;
