import { FC } from 'react';
import './styles.css';

const SideBar: FC = () => {
  return (
    <div className='sideBar'>
      <div className='selected-bar'>
        <div className='iconbg'>
          <div className='icon'>
            <img src='assets/icons/employees.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
