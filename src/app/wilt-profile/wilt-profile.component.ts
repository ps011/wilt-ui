import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { WiltService } from "../services/wilt.service";

@Component({
  selector: "app-wilt-profile",
  templateUrl: "./wilt-profile.component.html",
  styleUrls: ["./wilt-profile.component.scss"],
})
export class WiltProfileComponent implements OnInit {
  loading: boolean;
  user: any;
  self = true;
  alerts = [];
  constructor(
    public userService: UserService,
    private wiltService: WiltService,
    private router: Router
  ) {}

  ngOnInit() {
    const urlSegments = this.router.url.split("/");
    let userId;
    if (urlSegments.includes("profile") || urlSegments.includes(userId)) {
      this.self = true;
      userId = localStorage.getItem("userId");
    } else {
      this.self = false;
      userId = urlSegments[urlSegments.length - 1];
    }
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        if (localStorage.getItem("token")) {
          this.userService
            .validateToken(`Bearer ${localStorage.getItem("token")}`)
            .subscribe(data => {
                this.userService.setUser(data);
                this.userService.setLoggedIn(true);
              },
              (error) => this.handleNetworkError(error)
            );
        } else {
          return this.router.navigateByUrl("login");
        }
      }
      this.loading = true;
      this.userService.getUserDetails(userId).subscribe((user) => {
        this.loading = false;
        if (user["profile_image"] === "") {
          user["profile_image"] = "assets/img/default-avatar.png";
        }

        if (!user["about"] || user["about"] === "") {
          user["about"] =
            "Uh Oh! We know nothing about you. Tell us something interesting !!";
        }
        this.user = user;
      });
    });
  }

  onTextFieldChanged(event, fieldName) {
    if (this.user[fieldName] !== event.target.innerText) {
      this.loading = true;
      const user = {id: this.user._id};
      user[fieldName] = event.target.innerText;
      this.userService.updateUser(user).subscribe((data: any) => {
          this.user[fieldName] = data[fieldName];
          this.alerts.push({
            type: "success",
            strong: "Thats great!!",
            message:
              "We got to know more about you",
            icon: "ui-2_like",
          });
          this.loading = false;
        })
    }
  }

  blockUnblockUser() {

  }

  onProfileImageChanged(event) {
    this.loading = true;
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "wilt-ui");
    this.wiltService.upload(formData).subscribe((data: any) => {
      this.userService
        .updateUser({
          id: this.user._id,
          profile_image: data.url
        })
        .subscribe((data) => {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            this.user['profile_image'] = reader.result;
          }, false);
          if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
          }
          this.loading = false;
          this.alerts.push({
            type: "success",
            strong: "You Look Great!!",
            message:
              "Your profile picture is updated",
            icon: "ui-2_like",
          });
        });
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
      if (error.status === 401) {
        return this.router.navigateByUrl("login");
      }
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
