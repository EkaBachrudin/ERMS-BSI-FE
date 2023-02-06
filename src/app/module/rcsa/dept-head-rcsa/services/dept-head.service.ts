import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';
import { postScore } from '../../dcor-head-rcsa/types/dcor.interface';

@Injectable({
  providedIn: 'root'
})
export class DeptHeadService {

  constructor(private http: HttpClient) { }
  base_url = `${environment.apiUrl}`;
  postScore(request: postScore){
    let auth_token = getToken()
    return this.http.post(this.base_url + '/rcsa/add_score/' + request.id, {
      "ihrr" : request.ihrr,
      "likelihood" : request.likelihood,
      "impact" : request.impact,
      "control" : request.control,
      "rating" : request.rating
    },{
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    })
  }
  postSubmit(id){
    let auth_token = getToken()
    return this.http.post(this.base_url + '/rcsa/submitRcsa/' + id, {},{
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    }
  )}
}
