import { type FC } from 'react';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/login/Login';
import Employee from './Pages/Employee/Employee';
import EmployeeDetails from './Pages/EmployeeDetails/EmployeeDetails';
import Create from './Pages/Create/Create';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/employees' element={<Employee />} />
        <Route path='/employees/:id' element={<EmployeeDetails />} />
        <Route path='/create' element={<Create edit={false}/>} />
        <Route path='/employee/:id/edit' element={<Create edit={true}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
