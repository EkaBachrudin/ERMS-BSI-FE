import { Injectable } from '@angular/core';
import { LikeHoodMock } from '../../data/LikeHood/LikeHood.mock';

@Injectable({ providedIn: 'root' })
export class LikeHoodServices {
    getLikeHood = () => {
        return LikeHoodMock;
    };
}