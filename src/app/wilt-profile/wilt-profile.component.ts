import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { WiltService } from "../services/wilt.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-wilt-profile",
  templateUrl: "./wilt-profile.component.html",
  styleUrls: ["./wilt-profile.component.scss"],
})
export class WiltProfileComponent implements OnInit {
  loading: boolean;
  user: any;
  self = true;
  blocked: boolean;
  alerts = [];
  userId;
  constructor(
    public userService: UserService,
    private wiltService: WiltService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    const urlSegments = this.router.url.split("/");
    if (urlSegments.includes("profile") || urlSegments.includes(this.userId)) {
      this.self = true;
      this.userId = localStorage.getItem("userId");
    } else {
      this.self = false;
      this.userId = urlSegments[urlSegments.length - 1];
    }
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        if (localStorage.getItem("token")) {
          this.userService
            .validateToken(`Bearer ${localStorage.getItem("token")}`)
            .subscribe(
              (data) => {
                this.userService.setUser(data);
                this.userService.setLoggedIn(true);
              },
              (error) => this.handleNetworkError(error)
            );
        } else {
          return this.router.navigateByUrl("login");
        }
      } else {
        this.loading = true;
        this.userService.getUserDetails(this.userId).subscribe((user) => {
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
      }
    });
  }

  onTextFieldChanged(event, fieldName) {
    if (this.user[fieldName] !== event.target.innerText) {
      this.loading = true;
      const user = { id: this.user._id };
      user[fieldName] = event.target.innerText;
      this.userService.updateUser(user).subscribe((data: any) => {
        this.user[fieldName] = data[fieldName];
        this.alerts.push({
          type: "success",
          strong: "Thats great!!",
          message: "We got to know more about you",
          icon: "ui-2_like",
        });
        this.loading = false;
      });
    }
  }

  blockUnblockUser() {
    if (this.user["blocked"].indexOf(this.userId) === -1) {
      this.userService.blockUser(this.userId).subscribe((data) => {
        this.userService.setUser(data);
        this.user["blocked"].push(this.userId);
        // setTimeout(() => this.location.back(), 3000);
        this.alerts.push({
          type: "success",
          strong: "Blocked!!!",
          message: "You won't see them again.",
          icon: "ui-2_like",
        });
      });
    } else {
      this.userService.unblockUser(this.userId).subscribe((data) => {
        this.userService.setUser(data);
        this.user["blocked"].splice(
          this.user["blocked"].indexOf(this.userId),
          1
        );
        // setTimeout(() => this.location.back(), 3000);
        this.alerts.push({
          type: "success",
          strong: "Unblocked!!!",
          message: "You can see them again.",
          icon: "ui-2_like",
        });
      });
    }
  }

  followUnfollowUser() {
    if (this.user["followers"].indexOf(this.userId) === -1) {
      this.userService.followUser(this.userId).subscribe((data) => {
        this.userService.setUser(data);
        this.user["followers"].push(this.userId);
        this.alerts.push({
          type: "success",
          strong: "Followed!!!",
          message: "You'll see them in your feeds now",
          icon: "ui-2_like",
        });
      });
    } else {
      this.userService.unfollowUser(this.userId).subscribe((data) => {
        this.userService.setUser(data);
        this.user["followers"].splice(
          this.user["followers"].indexOf(this.userId),
          1
        );
        this.alerts.push({
          type: "success",
          strong: "Unfollowed!!!",
          message: "You won't see them in your feeds now",
          icon: "ui-2_like",
        });
      });
    }
  }

  deleteAccount() {
    this.userService.deleteAccount(this.userId).subscribe((data) => {
      this.router.navigateByUrl("/login");
    });
  }

  isFollowing() {
    return this.user.followers.indexOf(this.userId) > -1;
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
          profile_image: data.url,
        })
        .subscribe((data) => {
          const reader = new FileReader();
          reader.addEventListener(
            "load",
            () => {
              this.user["profile_image"] = reader.result;
            },
            false
          );
          if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
          }
          this.loading = false;
          this.alerts.push({
            type: "success",
            strong: "You Look Great!!",
            message: "Your profile picture is updated",
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
