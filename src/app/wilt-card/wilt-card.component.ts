import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { WiltService } from '../services/wilt.service';

@Component({
  selector: 'app-wilt-card',
  templateUrl: './wilt-card.component.html',
  styleUrls: ['./wilt-card.component.scss']
})
export class WiltCardComponent implements OnInit {
  @Input() item: any;
  @Input() i: number;
  @Input() saved: boolean;
  @Output() filter = new EventEmitter<Object>();

  alerts = [];
  loading: boolean;
  single: boolean;
  constructor(private userService: UserService, 
    private wiltService: WiltService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url.includes('wilt')){
      this.single = true;
      this.i = 1;
      this.activatedRoute.params
      .subscribe(params => {
        this.wiltService.getWiltDetails(params.slug)
        .subscribe(data => {
          this.item = data;
        });
      });
    }
  }


  onFilterChanged(event, type) {
    this.filter.emit({
      name: event.target.innerText,
      type
    });
}

  onSaveWilt(event, wilt) {
    this.saved = !this.saved;
    this.userService.saveWilt(wilt).subscribe((data) => {
      this.userService.setSavedWilts(data);
    }, this.handleNetworkError);
  }

  onShareWilt() {
    navigator.clipboard.writeText(`${location.origin}/wilt/${this.item._id}`);
    this.alerts.push({
      type: "success",
      strong: "Sharing is Caring!",
      message:
        "WILT URL copied to clipboard",
      icon: "ui-1_bell-53",
    });

  }

  handleNetworkError(error) {
    if (error.status >= 400 && error.status < 500) {
      this.alerts.push({
        type: "danger",
        strong: "Oh snap!",
        message: "There is definitely something wrong. Try again 🌀",
        icon: "objects_support-17",
      });
    } else if (error.status >= 500 || error.status === 0) {
      this.alerts.push({
        type: "warning",
        strong: "Impossible has happened!",
        message:
          "The system went to sleep. Wait for sometime till it gets back",
        icon: "ui-1_bell-53",
      });
    }
    this.loading = false;
  }

}
