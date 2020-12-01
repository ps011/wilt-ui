import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = new BehaviorSubject(false);
  savedWilts = new BehaviorSubject([]);
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

  getUserDetails(id) {
    return this.http.get(`${environment.BASE_URL}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  logout() {
    return this.http.get(`${environment.BASE_URL}/users/logout`)
  }

  saveWilt(wilt) {
    return this.http.post(`${environment.BASE_URL}/users/save`, {
      userId: JSON.parse(localStorage.getItem('user')).id,
      wiltId: wilt._id
    })
  }

  unsaveWilt(wilt) {
    return this.http.post(`${environment.BASE_URL}/users/unsave`, {
      userId: JSON.parse(localStorage.getItem('user')).id,
      wiltId: wilt._id
    })
  }

  setLoggedIn(isLoggedIn) {
    this.isLoggedIn.next(isLoggedIn);
  }

  setSavedWilts(wilts) {
    this.savedWilts.next(wilts);
  }
}
