import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';
import { IhrrFilterInterface } from '../types/ihrr.interface';

@Injectable({
  providedIn: 'root'
})
export class IhrrService {

  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getIhrr(request : IhrrFilterInterface) {
      let auth_token = getToken()
      return this.http.get(this.base_url+ '/ihrr/',{
          params : {
              page : request.page,
              size : request.size,
              likelihood : request.likelihood,
              impact : request.impact
          },
          headers: {
              'Authorization': `Bearer ${auth_token}`
          }
      })
  }
}
