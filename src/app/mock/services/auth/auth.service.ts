import {AuthMock} from "../../data/authentication/auth.mock"
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
	LoginAuth = (email : string , password : string) => {
        var users = AuthMock.find(function(item) {
             if(item.email == email && password == item.password){
                 return true
             }
             return false;
           });
         return users
     }
} 