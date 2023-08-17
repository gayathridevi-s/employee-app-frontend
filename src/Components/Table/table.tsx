import './styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import { useGetEmployeeListQuery } from '../../Pages/Employee/api';
import { useDeleteEmployeeMutation } from '../../services/deleteapi';
import { useEffect, useState } from 'react';

const Table = () => {
  const title = [
    'EmployeeName',
    'EmployeeId',
    'JoiningDate',
    'Role',
    'status',
    'experience',
    'Action'
  ];
  const role = localStorage.getItem('Role');
  const [isRoleAdmin, setRoleAdmin] = useState(false);

  const navigate = useNavigate();
  const handleDelete = (id, e) => {
    e.stopPropagation();
    deleteEmployeeById(id);
  };
  const handleEdit = (id, eve) => {
    eve.stopPropagation();

    navigate(`/employee/${id}/edit`);
  };

  const { data } = useGetEmployeeListQuery();
  const [deleteEmployeeById] = useDeleteEmployeeMutation();

  useEffect(() => {
    if (role == 'Admin') setRoleAdmin(true);
  }, [role]);

  return (
    <table>
      <thead>
        <tr>
          {title.map((item) =>
            item === 'Action' && !isRoleAdmin ? null : <th key={item}>{item}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((obj) => (
          <tr className='data-row' key={obj.id} onClick={() => navigate(`/employees/${obj.id}`)}>
            <td>{obj.name}</td>
            <td>{obj.id}</td>
            <td>{obj.joiningDate}</td>
            <td>{obj.role}</td>
            <td>
              <div className='status-wrap'>
                <Status status={obj.status} />
              </div>
            </td>
            <td>{obj.experience}</td>
            {isRoleAdmin && (
              <td>
                <img
                  src='/assets/icons/699013.png'
                  className='bin'
                  onClick={(e) => handleDelete(obj.id, e)}
                />
                <img
                  src='/assets/icons/editt.png'
                  className='editIcon'
                  onClick={(eve) => handleEdit(obj.id, eve)}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
