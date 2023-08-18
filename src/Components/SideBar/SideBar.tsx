import { FC } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const SideBar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='sideBar'>
      <div className='selected-bar' onClick={() => navigate('/employee')}>
        <div className='iconbg'>
          <img src='/assets/icons/employees.svg' alt='' />
        </div>
        <div>Employee List</div>
      </div>
    </div>
  );
};

export default SideBar;
