import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeyProcessService {

  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getKeyprocess(page : number,size  : number) {
      var auth_token = getToken()
      return this.http.get(this.base_url+ '/keyprocess/',{
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
