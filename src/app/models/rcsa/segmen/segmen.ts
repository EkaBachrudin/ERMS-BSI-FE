export interface ISegmen {
    segmen: string;
    status: string;
    id: number;
  }
  
  export class Segmen {
    constructor(
      public segmen: string,
      public status: string,
      public id: number
    ) {}
  }
  