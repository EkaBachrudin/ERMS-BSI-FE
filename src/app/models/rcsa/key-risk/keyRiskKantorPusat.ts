export interface IKeyRiskKantorPusat {
  group: string;
  keyPro: string;
  keyRisk: string;
  let1: string;
  let2: string;
  let3: string;
  status: string;
  id: number;
}

export class KeyRiskKantorPusat {
  constructor(
    public group: string,
    public keyPro: string,
    public keyRisk: string,
    public let1: string,
    public let2: string,
    public let3: string,
    public status: string,
    public id: number
  ) {}
}
