import Input from '../../Components/Input/Input';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Button from '../../Components/Button/Button';
import { useLoginMutation } from './api';

const Login: FC = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setError] = useState('');

  const navigate = useNavigate();

  const [login, { data, isSuccess }] = useLoginMutation();
  const validateInput = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    if (username && password) login({ username, password });
    else setError('Invalid username or password');
  };

  useEffect(() => {
    if (data && isSuccess) {
      // eslint-disable-next-line no-debugger

      console.log(data);
      localStorage.setItem('token', data.data.token);

      localStorage.setItem('Role', data.data.employeeDetails.role);
      console.log(data.data.employeeDetails.role);

      navigate('/employees');
    }
  }, [data, isSuccess]);

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
