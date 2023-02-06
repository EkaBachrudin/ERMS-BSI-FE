export interface DcorInterface {
  currentStatus: string
  quarter: string
  periode: number
  group_name: string
  ihrr: number
  control: number
  composite: number
  sudahDinilai : number
  id : number
}

export interface DcorFilterInterface {
  page: number
  size: number
}

export interface DetailByIDInterface {
  let1: string
  let2: string
  keycontrol: string
  descriptionItem: DescriptionItem[]
  ketentuan: string
  ihrr: number
  likelihood: number
  impact: number
  control: number
  rating: number
  keyrisk: string
  keyprocess: string

}

export interface DescriptionItem {
  idDesc: number
  description: string
}

export interface DetailByIDFilterInterface {
  id: string
  page: number
  size: number
}

export interface postScore {
  idRcsa : string
  id: number
  ihrr: number
  likelihood: number
  impact: number
  control: number
  rating: number
  page : number
  rcsa : number
}
