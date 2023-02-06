
import { IKeyControl } from "../key-control/keyControl";
import { ILostEventType } from "../let/let";

export interface IKeyRisk {
  group: string;
  keyPro: string;
  keyRisk: string;
  lostEventType: ILostEventType[];
  keyControl: IKeyControl[];
  status: string;
  id: number;
}


