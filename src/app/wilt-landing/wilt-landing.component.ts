import { Component, OnInit } from '@angular/core';
import {NavService} from '../services/nav.service';

@Component({
  selector: 'app-wilt-landing',
  templateUrl: './wilt-landing.component.html',
  styleUrls: ['./wilt-landing.component.scss']
})
export class WiltLandingComponent implements OnInit {

  constructor(private nav: NavService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
