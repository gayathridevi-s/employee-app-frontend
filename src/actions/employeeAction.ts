import { createAction } from '@reduxjs/toolkit';
type addEmployeeType = {
  //   id: string;
  EmployeeName: string;
  EmployeeId?: string;
  // JoiningId: 8,
  Role: string;
  status: string;
  experience: string;
  // Action: 'none',
  JoiningDate: string;
  department: string;
  // departmentId: 2,
  address: addressType;
};

type addressType = {
  addressLine1: string;
  addressLine2: string;
  city: string;
};
type deleteType = {
  id: number;
};

export const addEmployee = createAction<{ employee: addEmployeeType }>('EMPLOYEE:CREATE');
export const editEmployee = createAction<{ employee: addEmployeeType }>('EMPLOYEE:EDIT');
export const deleteEmployee = createAction<deleteType>('EMPLOYEE:DELETE');
