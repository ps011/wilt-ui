import { Component, OnInit } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from "@angular/router";
import { NavService } from "../services/nav.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-wilt-nav",
  templateUrl: "./wilt-nav.component.html",
  styleUrls: ["./wilt-nav.component.scss"],
})
export class WiltNavComponent implements OnInit {
  isLoggedIn: boolean;
  currentRoute = "/home";
  constructor(
    public nav: NavService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
    this.userService.user.subscribe(
      (isLoggedIn) => (this.isLoggedIn = !!isLoggedIn)
    );
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
