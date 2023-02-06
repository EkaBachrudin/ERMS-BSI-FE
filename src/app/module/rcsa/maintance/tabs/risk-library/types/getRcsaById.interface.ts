export interface GetRcsaByIdInterface {
    id: number;
    let1: string
    let2: string
    keycontrol: string
    descriptionItem: DescriptionItem[]
    ketentuan: string
    ihrr: any
    likelihood: any
    impact: any
    control: any
    rating: any
    keyrisk: string
    keyprocess: string
  }
  
  export interface DescriptionItem {
    idDesc: number
    description: string
  }