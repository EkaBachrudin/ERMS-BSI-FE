import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeptheadService {

  constructor(private http: HttpClient) { }

  base_url = `${environment.apiUrl}`

  getKRIDeptHead() {
    return this.http.get(this.base_url + '/kri_maintenance')
  }

  getKRIDeptHeadById(parent_id:any) {
    return this.http.get(this.base_url + '/kri_maintenance/' + parent_id);
  }

  putKRIDeptHead(parent_id:any, body:any) {
    return this.http.put(this.base_url + '/kri_maintenance/' + parent_id, body).subscribe(data => {
      console.log(data);
    })
  }
}
