import { IKetentuan } from "../ketentuan/ketentuan";

export interface IKeyControl {
  name: string;
  unit: string;
  group: string;
  keyPro: string;
  keyRisk: string;
  keyControl: object;
  ketentuan: IKetentuan[];
  nameKet: string;
  status: string;
  id: number;
}

export class keyControl {
  constructor(
    public name: string,
    public unit: string,
    public group: string,
    public keyPro: string,
    public keyRisk: string,
    public keyControl: object,
    public ketentuan: IKetentuan[],
    public nameKet: string,
    public status: string,
    public id: number
  ) {}
}
