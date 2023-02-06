import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
import { getToken } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';
import { GetRcsaByIdInterface } from '../types/getRcsaById.interface';
import { RiskLibraryFilterInterface } from '../types/risklib.interface';
import { RiskLibraryDetailFilterInterface, RiskLibraryDetailInterface } from '../types/riskLibraryDetail.interface';
import { RiskLibraryPut } from '../types/riskLibraryPut.interface';

@Injectable({
  providedIn: 'root'
})
export class RiskLibraryService {

  constructor(private http: HttpClient) {}
  base_url = `${environment.apiUrl}`;
  getRiskLibrary(request : RiskLibraryFilterInterface) {
      let auth_token = getToken()
      return this.http.get(this.base_url+ '/risklibrary/',{
          params : {
              page : request.page,
              size : request.size,
              quarter :request.quarter,
              yearOf :request.yearOf,
              group :request. group
          },
          headers: {
              'Authorization': `Bearer ${auth_token}`
          }
      })
  }

  getRiskLibraryDetails(request : RiskLibraryDetailFilterInterface) {
    let auth_token = getToken()
    return this.http.get(this.base_url+ '/risklibrary/detail/',{
        params : {
            risk_draft : request.risk_draft,
            page : request.page,
            size : request.size,
        },
        headers: {
            'Authorization': `Bearer ${auth_token}`
        }
    })
  }

  PutRiskLibrary(request : RiskLibraryPut) {
    var auth_token = getToken()
    return this.http.put(this.base_url+ '/risklibrary/submitrisk/'+request.id,{
      yearOf: request.yearOf,
      tanggal_mulai: request.tanggal_mulai,
      tanggal_selesai: request.tanggal_selesai,
      quarter: request.quarter,
    },{
        headers: {
            'Authorization': `Bearer ${auth_token}`
        }
    })
  }

  UploadRiskLibrary(formData : FormData) {
    var auth_token = getToken()
    const httpOptions = {
      headers: {
          'Authorization' : `Bearer ${auth_token}`,
          'id_users' : '1',
      }
    }
    return this.http.post(this.base_url+ '/exim/import/risklibrary',formData, httpOptions)
  }

  GetRcsaById(request : GetRcsaByIdInterface) {
    var auth_token = getToken()
    return this.http.put(this.base_url+ '/risklibrary/submitrisk/'+request.id,
    {
        headers: {
            'Authorization': `Bearer ${auth_token}`
        }
    })
  }
  
  getRiskRegister(page : number,size  : number) {
    let auth_token = getToken()
    return this.http.get(this.base_url+ '/risklibrary/detail/',{
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
