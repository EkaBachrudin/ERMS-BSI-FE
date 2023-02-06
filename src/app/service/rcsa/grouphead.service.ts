import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_CONFIG } from '../URL_Config';

@Injectable({
  providedIn: 'root'
})
export class GroupheadService {

  constructor(private http: HttpClient) { }

  base_url = URL_CONFIG.base_url;

  getRcsaGroupHead() {
    return this.http.get(this.base_url + '/dept_head_rcsa');
  }

  putRcsaGroupHead(parent_id: any, body: any) {
    return this.http.put(this.base_url + '/dept_head_rcsa/' + parent_id, body).subscribe(data => {
      console.log(data);
    })
  }
}
