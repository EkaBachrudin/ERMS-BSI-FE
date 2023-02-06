import { Injectable } from '@angular/core';
import { KeyRiskmock } from '../../data/key-risk/keyRisk.mock';

@Injectable({ providedIn: 'root' })
export class KeyRiskService {
  getkeyRisk = () => {
    return KeyRiskmock;
  };
}
