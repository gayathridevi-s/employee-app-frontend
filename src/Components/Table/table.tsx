import './styles.css';
import Status from '../Status/Status';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id, e) => {
    e.stopPropagation();
    dispatch({
      type: 'EMPLOYEE:DELETE',
      payload: id
    });
  };
  const handleEdit = (id, eve) => {
    eve.stopPropagation();
    // const employee = employeesData.find((emp) => emp.EmployeeId === Number(id));
    navigate(`/employee/${id}/edit`);
  };

  return (
    <table>
      <thead>
        <tr>
          {title.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employeesData.map((obj) => (
          <tr
            className='data-row'
            key={obj.EmployeeId}
            onClick={() => navigate(`/employee/${obj.EmployeeId}`)}
          >
            <td>{obj.EmployeeName}</td>
            <td>{obj.EmployeeId}</td>
            <td>{obj.JoiningDate}</td>
            <td>{obj.Role}</td>
            <td>
              <div className='status-wrap'>
                <Status status={obj.status} />
              </div>
            </td>
            <td>{obj.experience}</td>
            <td>
              <img
                src='/assets/icons/699013.png'
                className='bin'
                onClick={(e) => handleDelete(obj.EmployeeId, e)}
              />
              <img
                src='/assets/icons/editt.png'
                className='editIcon'
                onClick={(eve) => handleEdit(obj.EmployeeId, eve)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
