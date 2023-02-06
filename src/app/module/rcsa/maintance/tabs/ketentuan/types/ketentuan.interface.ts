export interface KetentuanInterface {
    ketentuan: string
    idKetentuan: number
    status: string
    description: Description[]
  }
  
  export interface Description {
    idDesc: number
    description: string
  }