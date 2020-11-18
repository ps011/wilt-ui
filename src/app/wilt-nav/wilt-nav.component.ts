import { Component, OnInit } from '@angular/core';
import {NavService} from '../services/nav.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-wilt-nav',
  templateUrl: './wilt-nav.component.html',
  styleUrls: ['./wilt-nav.component.scss']
})
export class WiltNavComponent implements OnInit {
  isLoggedIn: boolean;

  constructor( public nav: NavService, private userService: UserService ) {}

  ngOnInit() {
    this.userService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
  }

}
