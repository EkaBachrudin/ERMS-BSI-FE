import { Injectable } from '@angular/core';
import { IhrrMock } from '../../data/Ihrr/Ihrr.mock';

@Injectable({ providedIn: 'root' })
export class IhrrService {
    getIhrr = () => {
        return IhrrMock;
    };
}