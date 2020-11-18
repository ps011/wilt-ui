import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(`${environment.BASE_URL}/users/login`, credentials);
  }

  createUser(user) {
    return this.http.post(`${environment.BASE_URL}/users/create`, user);
  }

  validateToken(token) {
    return this.http.get(`${environment.BASE_URL}/users/validate`, {
      headers: {
        'Authorization': token
      }
    })
  }

  setLoggedIn(isLoggedIn) {
    this.isLoggedIn.next(isLoggedIn);
  }
}
