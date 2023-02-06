import { GroupInterface } from "./group.interface"

export interface DirectorateInterface {
  review: string
  name: string
  call_sign: string
  id: number
  group: GroupInterface[]
}

export interface DirectorateFilterInterface {
  id: string
  page: number
  size: number
}