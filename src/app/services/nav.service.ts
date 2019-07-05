import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  visible: boolean;
  loggedIn: boolean
  constructor() { }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  login() {this.loggedIn = true}
}
