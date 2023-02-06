import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getGroup(page : number,size  : number) {
    return this.http.get(this.base_url + '/group/', {
      params: {
        page: page,
        size: size,
      },
    });
  }
}
