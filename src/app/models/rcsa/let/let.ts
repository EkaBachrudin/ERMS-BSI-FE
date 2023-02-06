export interface ILostEventType3 {
    id: number;
    name: string;
}

export interface ILostEventType2 {
    id: number;
    name: string;
    let3: ILostEventType3[]
}

export interface ILostEventType {
    id: number;
    name: string;
    let2: ILostEventType2[]
}
  