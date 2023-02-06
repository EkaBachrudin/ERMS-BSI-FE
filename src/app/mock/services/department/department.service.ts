import { Injectable } from '@angular/core';
import { DepartmentMock } from '../../data/deparment/department.mock';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  getDepartment = () => {
    return DepartmentMock;
  };
}
