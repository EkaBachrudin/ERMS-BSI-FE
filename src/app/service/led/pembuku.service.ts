import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class PembukuService {
  constructor(private http: HttpClient) {}

  base_url = `${environment.apiUrl}`;

  getData() {
    return this.http.get(this.base_url + '/led');
  }
}
