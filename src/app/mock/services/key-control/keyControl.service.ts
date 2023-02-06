import { Injectable } from '@angular/core';
import { KeyControlMock } from '../../data/key-control/keyControl.mock';

@Injectable({ providedIn: 'root' })
export class KeyControlServicem {
  getKeyControl = () => {
    return KeyControlMock;
  };
}
