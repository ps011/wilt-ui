import { Component, OnInit } from '@angular/core';
import {NavService} from '../services/nav.service';

@Component({
  selector: 'app-wilt-home',
  templateUrl: './wilt-home.component.html',
  styleUrls: ['./wilt-home.component.scss']
})
export class WiltHomeComponent implements OnInit {
  constructor(public nav: NavService) { }

  ngOnInit() {
    this.nav.show();
  }

}
