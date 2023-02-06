export interface IAuth {
    email: string;
    password : string
    access_token : string
    role : string
}
export interface IAuthSuccess{
    accessToken: string
    nip: string
    idUsers: number
    name: string
}
export interface ILogin{
  nip : string;
  password : string
}
export class Auth {
  constructor(
    public email: string,
    public id: number,
    private _token: string,
    public payload : any
  ) {}
  get token() {
    return this._token;
  }
}
