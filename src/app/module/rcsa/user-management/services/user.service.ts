import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
    base_url = `${environment.apiUrl}`;
    getUser(request: requestPagination) {
        let auth_token = getToken()
        return this.http.get(this.base_url+ '/users/',{
            params : {
                page : request.page,
                size : request.size
            },
            headers: {
                'Authorization': `Bearer ${auth_token}`
            }
        })
    }
}
