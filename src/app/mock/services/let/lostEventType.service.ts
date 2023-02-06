import { Injectable } from '@angular/core';
import { letMock } from '../../data/let/let.mock';

@Injectable({ providedIn: 'root' })
export class LostEventTypeAction {
  getLet = () => {
    return letMock;
  };
}
