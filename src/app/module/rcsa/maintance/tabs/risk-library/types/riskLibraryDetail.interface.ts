export interface RiskLibraryDetailInterface {
    id_keyprocess: number
    id_keyrisk: number
    id_keycontrol: number
    id_ketentuan: number
    id_let1: number
    id_let2: number
    id_let3: number
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

  export interface RiskLibraryDetailFilterInterface {
    page: number;
    size: number;
    risk_draft: string;
  }

  export interface RiskRegisterFilterInterface {
    page: number;
    size: number;
  }
  