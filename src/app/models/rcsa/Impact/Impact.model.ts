export interface IImpact {
    rating: string
    score: number
    sequence: any
    review: string
    description: Description
}

export interface Description {
    financial: string
    reputational: string
    regulatoryCompliance: string
    legal: string
    staff: string
    kriminal: string
    customerService: string
}


export class Impact {
    constructor(
        public id: number,
        public Rating: string,
        public Score: string,
        public Status: string,
        public Detail: object
    ) { }
}