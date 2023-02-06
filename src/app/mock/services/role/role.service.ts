import { Injectable } from '@angular/core';
import { RoleMock } from '../../data/role/role.mock';

@Injectable({ providedIn: 'root' })
export class RoleService {
  getRole = () => {
    return RoleMock;
  };
}
