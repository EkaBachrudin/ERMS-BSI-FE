import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthSuccess, ILogin } from '../types/auth.interface';
import { Response } from 'src/app/models/response.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  base_url = `${environment.apiUrl}`;
  login(body: ILogin) : Observable<Response<any>> {
    return this.http.post<Response<any>>(this.base_url + '/auth/login', body);
  }
}
