import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_CONFIG } from '../URL_Config';

@Injectable({
  providedIn: 'root'
})
export class DcorofficerService {

  constructor(private http: HttpClient) { }

  base_url = URL_CONFIG.base_url;

  getAllDcorOfficer() {
    return this.http.get(this.base_url + '/dcor_officer')
  }
}
