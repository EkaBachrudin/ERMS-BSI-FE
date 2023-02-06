import { Injectable } from '@angular/core';
import { UserDelegateMock } from '../../data/userDelegate/userDelegate.mock';
@Injectable({ providedIn: 'root' })
export class UserDelegateService {
  getUserDelegate = () => {
    return UserDelegateMock;
  };
}
