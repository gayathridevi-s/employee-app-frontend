import { FC, useEffect, useState } from 'react';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';

type subheaderpropstype = {
  label: string;
  labelActionbox: string;
  imageUrl: string;
};
const Subheader: FC<subheaderpropstype> = (props) => {
  console.log(props);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleActionBoxClick = () => {
    if (props.labelActionbox === 'Edit')
      navigate(`/employee/${id}/edit`); // Navigate to the edit page
    else if (props.labelActionbox === 'Create employee') navigate('/create'); // Navigate to the create employee page
  };
  const role = localStorage.getItem('Role');
  const [isRoleAdmin, setRoleAdmin] = useState(false);

  useEffect(() => {
    if (role == 'Admin') setRoleAdmin(true);
  }, [role]);

  return (
    <div className='subheader'>
      <div className='subheader1'>{props.label}</div>
      {props.labelActionbox !== '' && isRoleAdmin && (
        <div className='actionBox' onClick={handleActionBoxClick}>
          <div className='round'>
            <div className='image-wrap '>
              <img src={props.imageUrl} className='image' />
            </div>
          </div>
          {props.labelActionbox}
        </div>
      )}
    </div>
  );
};

export default Subheader;
