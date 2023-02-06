export interface IDirectorate {
  direktorate: string;
  review: string;
  callsign: string;
  id: number;
}

export class Directorate {
  constructor(
    public direktorate: string,
    public review: string,
    public callsign: string,
    public id: number
  ) {}
}

