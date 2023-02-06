import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IImpact } from 'src/app/models/rcsa/Impact/Impact.model';
import { IResponse } from 'src/app/models/IResponse';


@Injectable({
  providedIn: 'root'
})
export class ImpactService {
  BaseUrl = environment.apiUrl 

  constructor( private _httpClient: HttpClient) { }

  getImpact() {
    return this._httpClient.get<IResponse<IImpact[]>>(this.BaseUrl + '/impact',{
      headers: {
        authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjMxMjMxMzEzIiwiZXhwIjoxNjY5MzcwNDM2LCJpYXQiOjE2NjkzNjY4MzZ9.CFwTluDIKYrKSQvLK33wqaj6v6pTgZQoFc2nWJUecRxmtBX3JEAXtnb18sTxUorReB0q-pbs64kEwwiaF3iKzw'
      }
    })
  }
}
