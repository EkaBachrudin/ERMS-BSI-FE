import { Injectable } from '@angular/core';
import { keyProcesskantorPusatMock } from '../../data/key-process/keyProcessKantorPusat.mock';

@Injectable({ providedIn: 'root' })
export class KeyProcessKantorPusatService {
  getkeyprocess = () => {
    return keyProcesskantorPusatMock;
  };
}
