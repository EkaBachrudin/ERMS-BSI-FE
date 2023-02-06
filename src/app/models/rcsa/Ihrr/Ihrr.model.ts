export interface IIhrr {
    id : number;
    IhrrRating : string;
    LikeLiHood : string;
    Impact : string;
    Ihrr : string;
    Status : string;
}

export class Ihrr {
    constructor(
        public id : number,
        public IhrrRating : string,
        public LikeLiHood : string,
        public Impact : string,
        public Ihrr : string,
        public Status : string
    ) {}
}