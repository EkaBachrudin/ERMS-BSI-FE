export interface IUserDelegate {
  id: number;
  user_pengusul: string;
  user_penganti: string;
  role: string;
  status_delegasi: string;
  start_date: string;
  end_date: string;
  status: string;
}

export class UserDelegate {
  constructor(
    public id: number,
    public user_pengusul: string,
    public user_penganti: string,
    public role: string,
    public status_delegasi: string,
    public start_date: string,
    public end_date: string,
    public status: string
  ) {}
}
