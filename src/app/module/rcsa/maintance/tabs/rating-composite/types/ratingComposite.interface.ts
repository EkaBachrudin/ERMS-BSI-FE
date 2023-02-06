export interface RatingCompositeInterface {
  id: number
  compositeRating: string
  ihrr: number
  control: number
  composite: number
  sequence: number
  review: string
}

export interface RatingCompositeFilterInterface {
  page: number
  size: number
  ihrr: string
  control: string
}