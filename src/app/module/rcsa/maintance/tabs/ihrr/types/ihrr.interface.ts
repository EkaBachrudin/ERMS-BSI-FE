export interface IhrrInterface {
  id: number
  ihrrRating: string
  likelihood: number
  impact: number
  ihrrSkala25: number
  ihrr: number
  sequence: number
  review: string
}

export interface IhrrFilterInterface {
  page : number;
  size : number;
  likelihood : string;
  impact : string;
}