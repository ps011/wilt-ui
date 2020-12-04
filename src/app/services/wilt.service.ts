import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WiltService {

  constructor(private http: HttpClient) { }

  createWilt(wilt) {
    return this.http.post(`${environment.BASE_URL}/wilt/create`, wilt);
  }

  getAllWilts(tags, categories) {
    let params = new HttpParams();
    if (tags) {
    params = params.append('tags', tags);
    }
    if (categories) {
    params = params.append('category', categories);
    }
    return this.http.get(`${environment.BASE_URL}/wilt/`, {params});
  }

  getWiltDetails(id) {
    return this.http.get(`${environment.BASE_URL}/wilt/${id}`);
  }

  getCategories() {
    return this.http.get(`${environment.BASE_URL}/categories/`);
  }

  upload(formData) {
    return this.http.post('https://api.cloudinary.com/v1_1/designu/raw/upload', formData);
  }
}
