import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  base_url = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get( this.base_url  + "/UntKrjDir");
  }
  postData(data: any){
    return this.http.post<any>( this.base_url  + "/UntKrjDir",data);
  }
  getData(data:any){
    return this.http.get(this.base_url  + "/UntKrjDir");
  }
  getDataGroup(){
    return this.http.get( this.base_url  + "/UntKrjGruop");
  }

  postDataGroup(data: any){
    return this.http.post<any>( this.base_url  + "/UntKrjGruop",data);
  }

  updateDataGroup(id: any,data: any){
    return this.http.put( this.base_url  + "/UntKrjGruop/" +id ,data);
  }
  deleteDataGroup(id:any){
    return this.http.delete( this.base_url  + "/UntKrjGruop/" +id ).subscribe(() => 'Delete successful');

  }

  getDataRole(){
    return this.http.get( this.base_url  + "/roleData");
  }
  postDataRole(data: any){
    return this.http.post<any>( this.base_url  + "/roleData",data);
  }

  getDataUser(){
    return this.http.get( this.base_url  + "/userdData");
  }

  postDataUser(data: any){
    return this.http.post<any>( this.base_url  + "/userdData",data);
  }

  updateDataDir(id:number,data: any, ){
    return this.http.put( this.base_url  + "/UntKrjDir/" +id ,data);
  }
  deleteDataDir(id:any ){
    return this.http.delete( this.base_url  + "/UntKrjDir/" +id ).subscribe(() => 'Delete successful');
  }
  deleteRole(id:any){
    return this.http.delete(this.base_url +"/roleData/"+id)
  }
  // getDirID(data: any){
  //   return this.http.get(this.base_url+ "/UntKrjDir ");
  // }
}
