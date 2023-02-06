import { Injectable } from '@angular/core';
import { DCOR_MOCK } from '../../data/dcor/dcor.mock';

@Injectable({ providedIn: 'root' })
export class DcorService {
    getDcor = () => {
        return DCOR_MOCK;
    };
}