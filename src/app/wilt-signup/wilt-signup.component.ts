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
  alerts = [];
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
    }, error => {
      if (error.status === 401) {
      this.alerts.push({
            type: 'danger',
            strong: 'Oh snap!',
            message: 'I cannot find this Username/Password combination!!',
            icon: 'objects_support-17'
        })
      } else if (error.status === 500 || error.status === 0) {
        this.alerts.push({
          type: 'warning',
          strong: 'Impossible has happened!',
          message: 'The system went to sleep. Wait for sometime till it gets back',
          icon: 'ui-1_bell-53'
      })
      }
        this.loading = false;
    })
  }

}
