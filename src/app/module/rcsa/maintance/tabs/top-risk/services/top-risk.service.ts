import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopRiskService {

  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getToprisk(request: requestPagination) {
      var auth_token = getToken()
      return this.http.get(this.base_url+ '/rcsa/oprisk',{
          params : {
              page : request.page,
              size : request.size,
          },
          headers: {
              'Authorization': `Bearer ${auth_token}`
          }
      })

  }
}
