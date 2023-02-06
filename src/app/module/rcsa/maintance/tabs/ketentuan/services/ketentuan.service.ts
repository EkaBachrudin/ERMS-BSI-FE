import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KetentuanService {

  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getKetentuan(page : number,size  : number) {
      let auth_token = getToken()
      return this.http.get(this.base_url+ '/ketentuan/',{
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
