import { Injectable } from '@angular/core';
import { RatingCompositeMock } from '../../data/RatingComposite/RatingComposite.mock';

@Injectable({ providedIn: 'root' })
export class RatingCompositeService {
    getRatingComposite = () => {
        return RatingCompositeMock;
    };
}