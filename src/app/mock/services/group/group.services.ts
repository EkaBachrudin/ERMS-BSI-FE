import { Injectable } from '@angular/core';
import { GroupMock } from '../../data/group/gruop.mock';

@Injectable({ providedIn: 'root' })
export class GroupService {
  getGroup = () => {
    return GroupMock;
  };
}
