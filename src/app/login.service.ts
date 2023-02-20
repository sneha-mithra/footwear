import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginURL="http://localhost:8080/login"

  constructor(private httpClient: HttpClient) { }

  log(login:Login): Observable<object>{
    return this.httpClient.post<Login>(`${this.loginURL}`,login);
  }
}
