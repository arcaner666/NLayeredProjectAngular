import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../models/loginModel';
import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'https://localhost:44319/api/auth/';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel,);
  }

  isAuthenticated(){
    if(this.localStorageService.get("token")){
      return true;
    } else {
      return false;
    }
  }
}
