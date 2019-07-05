import { Component, OnInit } from '@angular/core';
import {NavService} from '../services/nav.service';

@Component({
  selector: 'app-wilt-profile',
  templateUrl: './wilt-profile.component.html',
  styleUrls: ['./wilt-profile.component.scss']
})
export class WiltProfileComponent implements OnInit {

  constructor(public nav: NavService) { }

  ngOnInit() {
    this.nav.show();
  }

}
