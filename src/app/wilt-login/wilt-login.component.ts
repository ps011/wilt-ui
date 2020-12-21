import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../interfaces/user.interface";
import { NavService } from "../services/nav.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-wilt-login",
  templateUrl: "./wilt-login.component.html",
  styleUrls: ["./wilt-login.component.scss"],
})
export class WiltLoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  loading: boolean;
  alerts = [];
  isLoggedInSubscription;
  constructor(private userService: UserService, private router: Router) {}
  ngOnDestroy(): void {
    this.isLoggedInSubscription.unsubscribe();
  }

  ngOnInit() {
    this.isLoggedInSubscription = this.userService.user.subscribe(
      (user: User) => {
        if (user) {
          this.router.navigateByUrl("/home");
        } else if (localStorage.getItem("token")) {
          // this.userService
          //   .validateToken(`Bearer ${localStorage.getItem("token")}`)
          //   .subscribe((data) => {
          //     this.userService.setUser(data);
          //   });
        }
      }
    );
  }

  onLogin() {
    if (
      this.loginForm.value.username === "" ||
      this.loginForm.value.password === ""
    ) {
      this.alerts.push({
        type: "warning",
        strong: "Uh Oh! You are forgetting something",
        message: "Maybe it;s your username or password",
        icon: "ui-1_bell-53",
      });
    } else {
    this.loading = true;
    this.userService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.loading = false;
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        this.userService.setUser(data.user);
      },
      (error) => {
        if (error.status === 401) {
          this.alerts.push({
            type: "danger",
            strong: "Oh snap!",
            message: "I cannot find this Username/Password combination!!",
            icon: "objects_support-17",
          });
        } else if (error.status === 500 || error.status === 0) {
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
    );
  }
  }
}
