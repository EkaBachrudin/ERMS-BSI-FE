import { Injectable } from '@angular/core';
import { UserMock } from '../../data/user/user.mock';
@Injectable({ providedIn: 'root' })
export class UserService {
  getUser = () => {
    return UserMock;
  };
}
