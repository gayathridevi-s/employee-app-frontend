import React, { FC } from 'react';
import { mockEmployeesData } from '../../constants/mockData';
import { useParams } from 'react-router-dom';
import './styles.css';
const Details: FC = () => {
  const { id } = useParams();
  const employee = mockEmployeesData.find((emp) => emp.EmployeeId === Number(id));

  return (
    <div className='details'>
      <div className='topDetails'>
        <div>
          <div className='label'>EmployeeName</div>
          <div className='detailItem'>{employee.EmployeeName}</div>
        </div>
        <div>
          <div className='label'>Joining Date</div>
          <div className='detailItem'>{employee.JoiningId}</div>
        </div>
        <div>
          <div className='label'>Experience</div>
          <div className='detailItem'>{employee.experience}</div>
        </div>
        <div>
          <div className='label'>Role</div>
          <div className='detailItem'>{employee.Role}</div>
        </div>
        <div>
          <div className='label'>Status</div>
          <div className='detailItem'>{employee.status}</div>
        </div>
      </div>
      <div className='bottonDetails'>
        <div>
          <div className='label'>Address</div>
          <div className='detailItem'>
            {employee.address.addressLine1}, {employee.address.addressLine2},{employee.address.city}
            , {employee.address.state},{employee.address.country}, {employee.address.pincode}
          </div>
        </div>
        <div>
          <div className='label'>EmployeeId</div>
          <div className='detailItem'>{employee.EmployeeId}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
