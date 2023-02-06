import { Injectable } from '@angular/core';
import { ControlMock } from '../../data/Control/Control.mock';

@Injectable({ providedIn: 'root' })
export class ControlService {
    getControl = () => {
        return ControlMock;
    };
}