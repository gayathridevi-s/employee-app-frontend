import { type FC } from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/login/Login';
import Employee from './Pages/Employee/Employee';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/employee' element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
