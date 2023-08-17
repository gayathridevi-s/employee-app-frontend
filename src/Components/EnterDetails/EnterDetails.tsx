import { FC, useEffect, useState } from 'react';
import './styles.css';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import SmallButton from '../SmallButton/SmallButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateEmployeeMutation } from '../../Pages/Create/api';
import { useGetdepartmentQuery } from '../../services/departmentapi';
import { useGetroleQuery } from '../../services/roleapi';
import { useLazyGetEmployeeQuery } from '../../Pages/EmployeeDetails/api';
import { useEditEmployeeMutation } from '../../services/editapi';
export enum StatusEnum {
  PROBATION = 'Probation',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive'
}
const EnterDetails: FC<{ edit: boolean }> = ({ edit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [experience, setExperience] = useState(0);
  const [city, setCity] = useState('');
  const [addressline1, setAddressLine1] = useState('');
  const [addressline2, setAddressLine2] = useState('');
  const [department, setDepartment] = useState<number>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [departmentId, setDepartmentId] = useState(-1);
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
  const [getEmployeeById, { data: employeeData }] = useLazyGetEmployeeQuery();
  const [createEmployee, { isSuccess }] = useCreateEmployeeMutation();
  const [editEmployee, { isSuccess: isSuccessEdit }] = useEditEmployeeMutation();

  useEffect(() => {
    if (employeeData) {
      setName(employeeData.data.name);
      setDate(employeeData.data.joiningDate);
      setExperience(employeeData.data.experience);
      setCity(employeeData.data.address.city);
      setUsername(employeeData.data.username);
      setAddressLine1(employeeData.data.address.addressLine1);
      setAddressLine2(employeeData.data.address.addressLine2);
      setDepartment(employeeData.data.departmentId);
      setStatus(employeeData.data.status);
      setRole(employeeData.data.role);
    }
  }, [employeeData]);

  useEffect(() => {
    console.log('Consoling', id);
    if (id) getEmployeeById(id);
  }, [id]);
  const { data } = useGetdepartmentQuery();

  const { data: roleData } = useGetroleQuery();
  const roleOptions = roleData?.data?.map((role) => ({
    value: role,
    label: role
  }));

  const statusOptions = [
    { value: StatusEnum.ACTIVE, label: 'Active' },
    { value: StatusEnum.INACTIVE, label: 'Inactive' },
    { value: StatusEnum.PROBATION, label: 'Probation' }
  ];

  const departmentOptions = data?.data.map((department) => ({
    value: department.id,
    label: department.name
  }));

  const handleSubmit = () => {
    // eslint-disable-next-line no-debugger

    if (edit) {
      if (
        name &&
        role &&
        status &&
        experience &&
        date &&
        department &&
        city &&
        addressline1 &&
        addressline2 &&
        username
      )
        editEmployee({
          body: {
            name,
            role,
            status,
            experience: Number(experience),
            joiningDate: date,
            departmentId: department,
            username,
            password,

            address: {
              addressLine1: addressline1,
              addressLine2: addressline2,
              city,
              state: 'Kerala',
              country: 'India',
              pincode: '694124'
            }
          },
          id
        });
    }

    // const employeeToUpdate = employeesData.find((emp) => emp.EmployeeId === Number(id));
    // if (employeeToUpdate) {
    //   const updatedEmployee = {
    //     EmployeeName: name,
    //     EmployeeId: employeeToUpdate.EmployeeId, // Use the EmployeeId of the employee to update
    //     Role: role,
    //     status: status,
    //     experience: experience,
    //     JoiningDate: date,
    //     department: String(department),
    //     address: {
    //       addressLine1: addressline1,
    //       addressLine2: addressline2,
    //       city: city
    //     }
    //   };
    //   console.log('Updated Employee:', updatedEmployee); // Add this log
    //   dispatch(
    //     editEmployee({
    //       employee: updatedEmployee
    //     })
    //   );
    // }
    else if (
      name &&
      role &&
      status &&
      experience &&
      date &&
      department &&
      city &&
      addressline1 &&
      addressline2 &&
      username &&
      password
    ) {
      // eslint-disable-next-line no-debugger

      createEmployee({
        name,
        role,
        status,
        experience: Number(experience),
        joiningDate: date,
        departmentId: department,
        username,
        password,

        address: {
          addressLine1: addressline1,
          addressLine2: addressline2,
          city,
          state: 'Kerala',
          country: 'India',
          pincode: '694124'
        }
      });
    }

    // dispatch(
    //   addEmployee({
    //     employee: {
    //       EmployeeName: name,
    //       Role: role,
    //       status,
    //       experience,
    //       JoiningDate: date,
    //       department,
    //       address: {
    //         addressLine1: addressline1,
    //         addressLine2: addressline2,
    //         city
    //       }
    //     }
    //   })
    // );
  };

  useEffect(() => {
    if (isSuccess) navigate('/employees');
  }, [isSuccess]);
  useEffect(() => {
    if (isSuccessEdit) navigate('/employees');
  }, [isSuccessEdit]);

  const handleCancel = () => {
    if (edit) navigate(`/employee/${id}`);
    else navigate('/employees');
  };

  return (
    <div className='outerBox'>
      <div className='detailBox'>
        <Input
          label='Employee Name'
          type='text'
          placeholder='Employee Name'
          value={name}
          onChange={setName}
        />
        <Input
          label='Joining Date'
          type='text'
          placeholder='Joining Date'
          value={date}
          onChange={setDate}
        />
        <Input
          label='Experience (2 Yrs)'
          type='number'
          placeholder='Experience'
          value={experience}
          onChange={setExperience}
        />
        <Input
          label='Username'
          type='text'
          placeholder='Username'
          value={username}
          onChange={setUsername}
        />
        <Input
          label='Password'
          type='text'
          placeholder='Password'
          value={password}
          onChange={setPassword}
        />

        {departmentOptions && (
          <Dropdown
            label='Department'
            value={department}
            onChange={(value: string) => {
              setDepartment(Number(value));
            }}
            placeholder='Choose Department'
            options={departmentOptions}
          />
        )}
        <Dropdown
          label='Role'
          value={role}
          onChange={(value: string) => setRole(value)}
          placeholder='Choose Role'
          options={roleOptions || []}
        />

        <Dropdown
          label='Status'
          value={status}
          onChange={(value: string) => setStatus(value)}
          placeholder='Status'
          options={statusOptions}
        />

        <div className='addressWrap'>
          <div>Address</div>
          <input
            type='text'
            placeholder='City'
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            type='text'
            value={addressline1}
            placeholder='Address line 1'
            onChange={(e) => {
              setAddressLine1(e.target.value);
            }}
          />
          <input
            type='text'
            value={addressline2}
            placeholder='Address line 2'
            onChange={(e) => {
              setAddressLine2(e.target.value);
            }}
          />
        </div>

        {edit && (
          <div className='inputRow'>
            <label>Employee ID</label>
            <input className='id' type='text' value={id} readOnly />
          </div>
        )}
      </div>

      <div className='buttons'>
        <SmallButton label={edit ? 'Save' : 'Create'} color='blue' onClick={handleSubmit} />
        <SmallButton label='Cancel' color='white' onClick={handleCancel} />
      </div>
    </div>
  );
};

export default EnterDetails;
