import { Injectable } from '@angular/core';
import { SegmenMock } from '../../data/segmen/segmen.mock';
@Injectable({ providedIn: 'root' })
export class SegmenService {
  getSegmen = () => {
    return SegmenMock;
  };
}
