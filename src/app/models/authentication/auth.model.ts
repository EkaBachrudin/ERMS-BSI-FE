export interface IAuth {
    email: string;
    password : string
    access_token : string
    role : string
}

export class Auth {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    public role : string
  ) {}
  get token() {
    return this._token;
  }
}
