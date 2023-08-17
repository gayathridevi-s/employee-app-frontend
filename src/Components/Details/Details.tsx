import React, { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import './styles.css';
import { useGetEmployeeQuery } from '../../Pages/EmployeeDetails/api';
import { Employee } from '../../Pages/Employee/api';
const Details: FC = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetEmployeeQuery(id);
  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    if (data && isSuccess) {
      const details = data.data;

      setEmployee(details);
    }
  }, [data, isSuccess]);

  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
  // const employee = employeesData.find((emp) => emp.EmployeeId === Number(id));

  return (
    <div className='details'>
      <div className='topDetails'>
        <div>
          <div className='label'>EmployeeName</div>
          <div className='detailItem'>{employee?.name}</div>
        </div>
        <div>
          <div className='label'>Joining Date</div>
          <div className='detailItem'>{employee?.joiningDate}</div>
        </div>
        <div>
          <div className='label'>Experience</div>
          <div className='detailItem'>{employee?.experience}</div>
        </div>
        <div>
          <div className='label'>Role</div>
          <div className='detailItem'>{employee?.role}</div>
        </div>
        <div>
          <div className='label'>Status</div>
          <div className='detailItem'>{employee?.status}</div>
        </div>
      </div>
      <div className='bottonDetails'>
        <div>
          <div className='label'>Address</div>
          <div className='detailItem'>
            {employee?.address.addressLine1}, {employee?.address.addressLine2},
            {employee?.address.city}
            {/* , {employee.address.state},{employee.address.country}, {employee.address.pincode} */}
          </div>
        </div>
        <div>
          <div className='label'>EmployeeId</div>
          <div className='detailItem'>{employee?.id}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
