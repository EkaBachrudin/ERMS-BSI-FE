export interface IRatingComposite {
    id: number;
    CompositeRating: string;
    Ihrr : number;
    Control : number;
    Composite : number;
    Status : String;
}

export class RatingComposite {
    constructor(
        public id: number,
        public CompositeRating: string,
        public Ihrr : number,
        public Control : number,
        public Composite : number,
        public Status : number
    ) {}
}