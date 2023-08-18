import { FC, useState } from 'react';
import './styles.css';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import SmallButton from '../SmallButton/SmallButton';
import { useNavigate, useParams } from 'react-router-dom';
const EnterDetails: FC = () => {
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [experience, setExperience] = useState(null);
  const [address, setAddress] = useState(null);
  const [addressline1, setAddressLine1] = useState('');
  const [addressline2, setAddressLine2] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const roleOptions = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' }
    // Add more role options if needed
  ];

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
    // Add more status options if needed
  ];

  const departmentOptions = [
    { value: 'ui', label: 'UI' },
    { value: 'development', label: 'Development' },
    { value: 'hr', label: 'Human Resources' }
  ];
  const handleSubmit = () => {
    if (id) console.log('Edited the changes');
    else console.log('Created new Employee');
  };
  const handleCancel = () => {
    if (id) navigate(`/employee/${id}`);
    else navigate('/employee');
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
        <Dropdown
          label='Department'
          value={department}
          onChange={(value: string) => setDepartment(value)}
          placeholder='Choose Department'
          options={departmentOptions}
        />
        <Dropdown
          label='Role'
          value={role}
          onChange={(value: string) => setRole(value)}
          placeholder='Choose Role'
          options={roleOptions}
        />

        <Dropdown
          label='Status'
          value={status}
          onChange={(value: string) => setStatus(value)}
          placeholder='Status'
          options={statusOptions}
        />

        <div className='addressWrap'>
          <Input
            label='Address'
            type='text'
            placeholder='Flat No./House No.'
            value={address}
            onChange={setAddress}
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
        {id && (
          <div className='inputRow'>
            <label>Employee ID</label>
            <input className='id' type='text' value={id} readOnly />
          </div>
        )}
      </div>

      <div className='buttons'>
        <SmallButton label={id ? 'Save' : 'Create'} color='blue' onClick={handleSubmit} />
        <SmallButton label='Cancel' color='white' onClick={handleCancel} />
      </div>
    </div>
  );
};

export default EnterDetails;
