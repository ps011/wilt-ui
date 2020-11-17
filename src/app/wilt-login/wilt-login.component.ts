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
  constructor(private userService: UserService, private router: Router, private navService: NavService) { }

  ngOnInit() {
  }

  onLogin() {
    this.userService.login(this.loginForm.value)
    .subscribe(data => {
      // Save data in local storage
      this.navService.login();
      this.router.navigateByUrl('/home');

    })
  }

}
