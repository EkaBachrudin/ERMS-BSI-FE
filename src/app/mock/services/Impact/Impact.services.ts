import { Injectable } from '@angular/core';
import { ImpactMock } from '../../data/Impact/Impact.mock';

@Injectable({ providedIn: 'root' })
export class ImpactService {
    getImpact = () => {
        return ImpactMock;
    };
}