export interface ISettingTopRisk {
  setting: string;
  nilai: string;
  status: string;
  id: number;
}

export class SettingRopRisk {
  constructor(
    public setting: string,
    public nilai: string,
    public status: string,
    public id: number
  ) {}
}
