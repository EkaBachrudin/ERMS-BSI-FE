export interface IUser {
  id: number;
  nip: string;
  nama_lengkap: string;
  email: string;
  jabatan: string;
  unit_kerja: string;
  role: string;
  status: string;
  riskIntegration: object[];
}

export class User {
  constructor(
    public id: number,
    public nip: string,
    public nama_lengkap: string,
    public email: string,
    public jabatan: string,
    public unit_kerja: string,
    public role: string,
    public status: string
  ) {}
}
