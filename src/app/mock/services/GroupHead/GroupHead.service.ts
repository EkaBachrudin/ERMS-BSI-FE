import { Injectable } from '@angular/core';
import { GroupHeadMock } from '../../data/GroupHead/GroupHead.mock';

@Injectable({ providedIn: 'root' })
export class GroupHeadService {
    getGroupHead = () => {
        return GroupHeadMock;
    };
}