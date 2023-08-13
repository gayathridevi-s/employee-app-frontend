import './styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import { mockEmployeesData as data } from '../../constants/mockData';

const Table = () => {
  const title = [
    'EmployeeName',
    'EmployeeId',
    'JoiningId',
    'Role',
    'status',
    'experience',
    'Action'
  ];

  const navigate = useNavigate();

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
        {data.map((obj) => (
          <tr
            className='data-row'
            key={obj.EmployeeId}
            onClick={() => navigate(`/employee/${obj.EmployeeId}`)}
          >
            <td>{obj.EmployeeName}</td>
            <td>{obj.EmployeeId}</td>
            <td>{obj.JoiningId}</td>
            <td>{obj.Role}</td>
            <td>
              <div className='status-wrap'>
                <Status status={obj.status} />
              </div>
            </td>
            <td>{obj.experience}</td>
            <td>
              <img src='/assets/icons/699013.png' className='bin' />
              <img src='/assets/icons/editt.png' className='editIcon' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
