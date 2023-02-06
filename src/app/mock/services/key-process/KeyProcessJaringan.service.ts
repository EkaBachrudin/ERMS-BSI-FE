import { Injectable } from '@angular/core';
import { keyProcessJaringanMock } from '../../data/key-process/keyProcessJaringan.mock';

@Injectable({ providedIn: 'root' })
export class KeyProcessjaringanService {
  getkeyprocess = () => {
    return keyProcessJaringanMock;
  };
}
