import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-wilt-signup',
  templateUrl: './wilt-signup.component.html',
  styleUrls: ['./wilt-signup.component.scss']
})
export class WiltSignupComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl('')
  })
  loading: boolean;
  constructor(private userService: UserService, private router: Router, private navService: NavService) { }

  ngOnInit() {
  }

  onSignup() {
    this.loading = true;
    this.userService.createUser(this.signupForm.value)
    .subscribe(data => {
      this.loading = false;
      // Do something here, save JWT
      this.navService.login();
      this.router.navigateByUrl('/home');
    })
  }

}
