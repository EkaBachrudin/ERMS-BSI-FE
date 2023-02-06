export interface IKetentuan {
  ketentuan: string;
  deskripsi: object;
  status: string;
  id: number;
}

export class Ketentuan {
  constructor(
    public ketentuan: string,
    public deskripsi: object,
    public status: string,
    public id: number
  ) {}
}
