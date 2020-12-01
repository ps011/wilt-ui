import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-wilt-profile',
  templateUrl: './wilt-profile.component.html',
  styleUrls: ['./wilt-profile.component.scss']
})
export class WiltProfileComponent implements OnInit {
  loading: boolean;
  user: any;
  self = true;
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    const urlSegments = this.router.url.split('/');
    const userId = JSON.parse(localStorage.getItem('user')).id
    if (urlSegments.includes('profile') || urlSegments.includes(userId)) {
      this.self = true;
    } else {
      this.self = false;
    }
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        if (localStorage.getItem("token")) {
          this.userService
            .validateToken(`Bearer ${localStorage.getItem("token")}`)
            .subscribe((data) => {
              this.userService.setLoggedIn(true);
            });
        } else {
          return this.router.navigateByUrl("login");
        }
      } 
      this.loading = true;
      this.userService.getUserDetails(userId)
      .subscribe(user => {
        this.loading = false;
        if (user['profile_image'] === '') {
          user['profile_image'] = 'assets/img/default-avatar.png';
        }
        this.user = user;
      })
    });
  }

}
