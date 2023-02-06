import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptHeadService {

  constructor(private http: HttpClient) { }
  base_url = "http://localhost:3000";
  
  getDataDeptHead() {
    return this.http.get(this.base_url + "/iam_depthead");
  }
  createDataHead(data:any){
    return this.http.post<any>(this.base_url + "/iam_depthead",data)
  }
  updateDataHead(id:any,data:any){
    return this.http.put(this.base_url + "/iam_depthead/"+id,data)
  }
}
