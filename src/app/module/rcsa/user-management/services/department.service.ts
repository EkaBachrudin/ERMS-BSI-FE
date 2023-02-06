import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getDeparment(page : number,size  : number) {
    let auth_token = getToken();
    return this.http.get(this.base_url + '/department/', {
      params: {
        page: page,
        size: size,
      },
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    });
  }
}
