import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getControl(page : number,size  : number) {
      let auth_token = getToken()
      return this.http.get(this.base_url+ '/control/',{
          params : {
              page : page,
              size : size
          },
          headers: {
              'Authorization': `Bearer ${auth_token}`
          }
      })
  }
}
