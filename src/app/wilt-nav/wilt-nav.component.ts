import { Component, OnInit } from '@angular/core';
import {NavService} from '../services/nav.service';

@Component({
  selector: 'app-wilt-nav',
  templateUrl: './wilt-nav.component.html',
  styleUrls: ['./wilt-nav.component.scss']
})
export class WiltNavComponent implements OnInit {

  constructor( public nav: NavService ) {}

  ngOnInit() {
  }

}
