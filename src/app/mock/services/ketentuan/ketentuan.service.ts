import { Injectable } from '@angular/core';
import { KetentuanMock } from '../../data/ketebtuan/ketentuan.mock';

@Injectable({ providedIn: 'root' })
export class KetentuanService {
  getKetentuan = () => {
    return KetentuanMock;
  };
}
