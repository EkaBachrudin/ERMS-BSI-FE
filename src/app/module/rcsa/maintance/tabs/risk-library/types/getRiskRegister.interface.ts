export interface GetRiskRegisterInterface {
    directorate_name: string
    group_name: string
    keyprocess: string
    keyrisk: string
    keycontrol: string
    ketentuan: string
    let1: string
    let2: string
    let3: string
    descriptionItem: DescriptionItem[]
  }
  
  export interface DescriptionItem {
    idDesc: number
    description: string
  }

  export interface RiskRegisterFilterInterface {
    id: string
    page: number
    size: number
  }