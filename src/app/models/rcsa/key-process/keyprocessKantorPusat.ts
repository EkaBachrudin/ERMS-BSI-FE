export interface IKeyProcessKantorPusat {
  unit: string;
  group: string;
  keyPro: string;
  status: string;
  id: number;
}


export class keyProcessKantorPusat {
  constructor(
    public unit: string,
    public group: string,
    public keyPro: string,
    public status: string,
    public id: number
  ) {}
}
