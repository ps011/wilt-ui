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
  user =  new BehaviorSubject({});
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

  updateUser(user) {
    return this.http.post(`${environment.BASE_URL}/users/update/${user.id}`, user, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  blockUser(user) {
    return this.http.get(`${environment.BASE_URL}/users/block/${user}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  unblockUser(user) {
    return this.http.get(`${environment.BASE_URL}/users/unblock/${user}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  followUser(user) {
    return this.http.get(`${environment.BASE_URL}/users/follow/${user}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  unfollowUser(user) {
    return this.http.get(`${environment.BASE_URL}/users/unfollow/${user}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  deleteAccount(id) {
    return this.http.get(`${environment.BASE_URL}/users/delete/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  logout() {
    this.setLoggedIn(false);
    this.setUser({});
    return this.http.get(`${environment.BASE_URL}/users/logout`)
  }

  saveWilt(wilt) {
    return this.http.post(`${environment.BASE_URL}/users/save`, {
      userId: localStorage.getItem('userId'),
      wiltId: wilt._id
    })
  }

  setLoggedIn(isLoggedIn) {
    this.isLoggedIn.next(isLoggedIn);
  }

  setSavedWilts(wilts) {
    this.savedWilts.next(wilts);
  }

  setUser(user) {
    this.user.next(user);
  }
}
