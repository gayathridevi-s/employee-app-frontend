import Input from '../../Components/Input/Input';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Button from '../../Components/Button/Button';

const Login: FC = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setError] = useState('');

  const navigate = useNavigate();

  const validateInput = () => {
    if (username && password) navigate('/employee');
    else setError('empty username or password');
  };

  return (
    <section className='loginSection'>
      <div className='leftBox'>
        <img src='assets/img/banner.png' alt='banner-image'></img>
      </div>

      <div className='rightBox'>
        <div className='form-wrapper'>
          <div>
            <img src='assets/img/kv-logo.png' alt='logo-image'></img>
          </div>
          <div className='inputBox'>
            <Input
              label='Username'
              type='text'
              placeholder='Username'
              value={username}
              onChange={setUsername}
            />
            <Input
              label='Password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={setPassword}
            />
            <Button label='Login in' onClick={validateInput} />
            <div className='error'>{errorMessage}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
