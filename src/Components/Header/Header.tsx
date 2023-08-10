import { FC } from 'react';
import './styles.css';
const Header: FC = () => {
  return (
    <header className='header'>
      <img src='/assets/img/kv-logo.png' alt='kv-image' width={200}></img>
    </header>
  );
};

export default Header;
