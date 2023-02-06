import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';
import { RatingCompositeFilterInterface } from '../types/ratingComposite.interface';

@Injectable({
  providedIn: 'root'
})
export class RatingCompositeService {

  constructor(private http: HttpClient) { }
  base_url = `${environment.apiUrl}`;
  getRatingComposite(request: RatingCompositeFilterInterface) {
    let auth_token = getToken()
    return this.http.get(this.base_url + '/rating/', {
      params: {
        page: request.page,
        size: request.size,
        ihrr: request.ihrr,
        control: request.control
      },
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    })
  }
}
