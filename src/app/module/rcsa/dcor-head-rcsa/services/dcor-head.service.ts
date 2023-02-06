import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';
import { DcorFilterInterface, DetailByIDFilterInterface } from '../types/dcor.interface';

@Injectable({
  providedIn: 'root'
})
export class DcorHeadService {

  constructor(private http: HttpClient) { }
  base_url = `${environment.apiUrl}`;
  getDcor(request: DcorFilterInterface) {
    let auth_token = getToken()
    return this.http.get(this.base_url + '/rcsa/', {
      params: {
        page: request.page,
        size: request.size,
      }
    })
  }
  getDcorByID(request: DetailByIDFilterInterface) {
    let auth_token = getToken()
    return this.http.get(this.base_url + '/rcsa/' + request.id,  {
      params: {
        page: request.page,
        size: request.size,
      },
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    })
  }
  approveRcsa(id : any){
    let auth_token = getToken()
    return this.http.post(this.base_url + '/rcsa/' + id,{},  {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    })
  }
  rejectRcsa(payload: any ){
    let auth_token = getToken()
    return this.http.post(this.base_url + '/rcsa/rejected/' + payload.id,{
      "noted" : payload.noted
    },  {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    })
  }
}
