import { addEmployee, deleteEmployee, editEmployee } from '../actions/employeeAction';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  {
    EmployeeName: 'Gayathri',
    EmployeeId: 4,
    // JoiningId: 8,
    Role: 'Devops',
    status: 'ACTIVE',
    experience: 9,
    // Action: 'none',
    JoiningDate: '11/02/2012',
    departmentId: 2,
    address: {
      id: '5ab12a9c-c870-4593-85d3-238cbd8e2749',
      addressLine1: 'Edachira',
      addressLine2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  },
  {
    EmployeeName: 'anju',
    EmployeeId: 6,
    // JoiningId: 8,
    Role: 'Devops',
    status: 'PROBATION',
    experience: 9,
    // Action: 'none',
    JoiningDate: '11/02/2012',
    departmentId: 2,
    address: {
      id: '5ab12a9c-c870-4593-85d3-238cbd8e2749',
      addressLine1: 'Edachira',
      addressLine2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  }
];

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state = [...state, action.payload];

    return state;
  });
  builder.addCase(editEmployee, (state, action) => {
    const updatedEmployee = action.payload.employee;

    console.log(updatedEmployee);
    console.log(state);
    state = state.map((employee) => {
      console.log(employee);

      return employee.EmployeeId === updatedEmployee.EmployeeId ? updatedEmployee : employee;
    });

    return state;
  });
  builder.addCase(deleteEmployee, (state, action) => {
    const employeeIdtoDelete = action.payload;
    const newState = state.filter((employee) => employee.EmployeeId != employeeIdtoDelete);

    return newState;
  });
});
// const employeeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'EMPLOYEE:CREATE': {
//       const newState = [...state, action.payload.employee];

//       return newState;
//     }
// case 'EMPLOYEE:DELETE': {
//   const employeeIdtoDelete = action.payload;
//   const newState = state.filter((employee) => employee.EmployeeId != employeeIdtoDelete);

//   return newState;
// }
// case 'EMPLOYEE:EDIT': {
// const updatedEmployee = action.payload.employee;

// console.log(updatedEmployee);
// const newState = state.map((employee) =>
//   employee.EmployeeId === updatedEmployee.EmployeeId ? updatedEmployee : employee
// );

// console.log('newEMPLOYEE', newState);

// return newState;
// }

// default:
//   return state;
//   }
// };

export default employeeReducer;
