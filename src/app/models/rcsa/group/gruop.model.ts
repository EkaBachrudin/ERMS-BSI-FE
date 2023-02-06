export interface IGroup {
  direktorate: string;
  review: string;
  callsign: string;
  group: string;
  id: number;
}

export class Group {
  constructor(
    public direktorate: string,
    public review: string,
    public callsign: string,
    public gruop: string,
    public id: number
  ) {}
}
