import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-wilt-login',
  templateUrl: './wilt-login.component.html',
  styleUrls: ['./wilt-login.component.scss']
})
export class WiltLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  loading: boolean;
  constructor(private userService: UserService, private router: Router, private navService: NavService) { }

  ngOnInit() {
    this.userService.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigateByUrl('/home');
      } else if (localStorage.getItem('token')){
        this.userService.validateToken(`Bearer ${localStorage.getItem('token')}`)
        .subscribe(data => {
          this.userService.setLoggedIn(true);
        });
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    });
  }

  onLogin() {
    this.loading = true;
    this.userService.login(this.loginForm.value)
    .subscribe((data: any) => {
      this.loading = false;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user))
      this.userService.setLoggedIn(true);
    })
  }

}
