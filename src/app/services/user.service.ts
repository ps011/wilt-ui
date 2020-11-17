import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('https://wilt-services.herokuapp.com/users/login', credentials);
  }

  createUser(user) {
    return this.http.post('https://wilt-services.herokuapp.com/users/create', user);
  }
}
