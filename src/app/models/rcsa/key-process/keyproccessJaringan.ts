export interface IKeyProcessJaringan {
    unit: string;
    segmen: string;
    keyPro: string;
    status: string;
    id: number;
  }
  
  export class keyProcessJaringan {
    constructor(
      public unit: string,
      public segmen: string,
      public keyPro: string,
      public status: string,
      public id: number
    ) {}
  }
  