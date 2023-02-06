import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectorateService {

  constructor(private http: HttpClient) {}
    base_url = `${environment.apiUrl}`;
    getDirectorate(page : number,size  : number) {
        var auth_token = getToken()
        return this.http.get(this.base_url+ '/directorate/',{
            params : {
                page : page,
                size : size
            },
            headers: {
                'Authorization': `Bearer ${auth_token}`
            }
        })

    }
}
