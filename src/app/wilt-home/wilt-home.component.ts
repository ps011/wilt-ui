import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WiltService } from "../services/wilt.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-wilt-home",
  templateUrl: "./wilt-home.component.html",
  styleUrls: ["./wilt-home.component.scss"],
})
export class WiltHomeComponent implements OnInit, OnDestroy {
  createForm = new FormGroup({
    compact: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    lengthy: new FormControl(""),
    visuals: new FormControl([]),
    tags: new FormControl([]),
  });
  loading: boolean;
  uploading: boolean;
  closeResult: string;
  visualUrls = [];
  wilts: any;
  backupWilts: any;
  savedWilts = [];
  alerts = [];
  categories = [];
  filters = [];
  loggedInSubscription;
  constructor(
    private wiltService: WiltService,
    private modalService: NgbModal,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }

  ngOnInit() {
    this.loggedInSubscription = this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        if (localStorage.getItem("token") !== null) {
          this.userService
            .validateToken(`Bearer ${localStorage.getItem("token")}`)
            .subscribe(
              (data) => {
                this.userService.setUser(data);
                this.userService.setLoggedIn(true);
                this.savedWilts = data["saved_wilts"];
              },
              (error) => {
                this.userService.logout();
                this.router.navigateByUrl("login");
              }
            );
        } else {
          return this.router.navigateByUrl("login");
        }
      } else {
        this.loading = true;
        if (this.savedWilts.length === 0) {
          this.savedWilts = this.userService.user.value["saved_wilts"];
        }
        this.wiltService.getAllWilts(null, null).subscribe((data) => {
          this.loading = false;
          this.wilts = data;
          this.backupWilts = this.wilts;
        }, this.handleNetworkError);
        this.wiltService
          .getCategories()
          .subscribe(
            (categories: any) => (this.categories = categories),
            this.handleNetworkError
          );
      }
    });
  }

  openModal(content) {
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  isWiltSaved(id) {
    return this.savedWilts.indexOf(id) > -1;
  }

  uploadImage(event) {
    this.uploading = true;
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "wilt-ui");
    this.wiltService.upload(formData).subscribe((data: any) => {
      this.visualUrls.push({ name: event.target.files[0].name, url: data.url });
      this.createForm.controls["visuals"].reset();
      this.uploading = false;
    });
  }

  onCreateFormSubmit() {
    if (this.createForm.valid) {
      this.loading = true;
      this.wiltService
        .createWilt({
          compact: this.createForm.get("compact").value,
          lengthy: this.createForm.get("lengthy").value,
          category: this.createForm.get("category").value,
          tags: this.createForm.get("tags").value.split(","),
          visuals: this.visualUrls.map((url) => url.url),
          userId: JSON.parse(localStorage.getItem("user"))._id,
          username: JSON.parse(localStorage.getItem("user")).username,
        })
        .subscribe((data) => {
          this.loading = false;
          this.createForm.reset();
          this.modalService.dismissAll();
        }, this.handleNetworkError);
    } else {
      this.alerts.push({
        type: "danger",
        strong: "Oops!",
        message: "You either missed the category or the compact",
        icon: "objects_support-17",
      });
    }
  }

  onFilterChanged(event) {
    const filterDoesExist = this.filters.find(
      (element) => element.name === event.name && element.type === event.type
    );
    if (!filterDoesExist || filterDoesExist.length === 0) {
      this.filters.push(event);
    } else {
      this.filters.splice(
        this.filters.findIndex(
          (pm) =>
            pm.name === filterDoesExist.name && pm.type === filterDoesExist.type
        ),
        1
      );
    }
    const tags = this.filters
      .filter((f) => f.type === "tags")
      .map((f) => f.name.toLowerCase());
    const categories = this.filters
      .filter((f) => f.type === "category")
      .map((f) => f.name.toLowerCase());
    this.wiltService.getAllWilts(tags, categories).subscribe((data) => {
      this.loading = false;
      this.wilts = data;
      this.backupWilts = this.wilts;
    }, this.handleNetworkError);
  }

  removeImage(index) {
    this.visualUrls.splice(index, 1);
    this.createForm.controls["visuals"].reset();
  }

  identify(index, item) {
    return item.url;
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

  search(event) {
    this.wilts = this.backupWilts.filter((wilt) => {
      return (
        wilt.compact.toLowerCase().includes(event.target.value.toLowerCase()) ||
        wilt.lengthy.toLowerCase().includes(event.target.value.toLowerCase()) ||
        wilt.tags.join(",").includes(event.target.value)
      );
    });
  }

  trackWilt(item, index) {
    return item._id;
  }
}
