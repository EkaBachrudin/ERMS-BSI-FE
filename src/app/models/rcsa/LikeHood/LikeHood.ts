export interface ILikeHood {
    id: number;
    Score: string;
    PeriodeKejadian: string;
    Status: string;
}

export class LikeHood {
    constructor(
        public id: number,
        public Score: string,
        public PeriodeKejadian: string,
        public Status: string
    ) {}
}