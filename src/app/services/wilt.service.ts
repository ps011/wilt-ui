import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WiltService {

  constructor(private http: HttpClient) { }

  createWilt(wilt) {
    return this.http.post(`${environment.BASE_URL}/wilt/create`, wilt);
  }

  getAllWilts() {
    return this.http.get(`${environment.BASE_URL}/wilt/`);
  }

  upload(formData) {
    return this.http.post('https://api.cloudinary.com/v1_1/designu/raw/upload', formData);
  }
}
