import { Injectable } from '@angular/core';
import { DeptHeadMock } from '../../data/DeptHead/DeptHead.mock';

@Injectable({ providedIn: 'root' })
export class DeptHeadService {
    getDeptHead = () => {
        return DeptHeadMock;
    };
}
