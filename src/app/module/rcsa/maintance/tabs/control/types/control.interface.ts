export interface ControlInterface {
  rating: string
  score: number
  sequence: number
  review: string
  detailsItem: DetailsItem
}

export interface ControlFilterInterface {
  page : number;
  size : number;
}

export interface DetailsItem {
  deskripsi: string
  uraian: string
}
