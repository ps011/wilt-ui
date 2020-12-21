import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
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
  visualUrls = [];
  wilts = [];
  backupWilts = [];
  savedWilts = [];
  alerts = [];
  categories = [];
  filters = [];
  userSubscription;
  isLoggedIn: boolean;
  page = 1;
  totalPages = 1;
  constructor(
    private wiltService: WiltService,
    private modalService: NgbModal,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit() {
    this.userSubscription = this.userService.user.subscribe((user) => {
      if (!user) {
        if (localStorage.getItem("token") !== null) {
          this.userService
            .validateToken(`Bearer ${localStorage.getItem("token")}`)
            .subscribe(
              (data) => {
                this.isLoggedIn = true;
                this.userService.setUser(data);
                this.savedWilts = data["saved_wilts"];
              },
              (error) => {
                this.isLoggedIn = false;
                localStorage.removeItem("token");
              }
            );
        }
      } else {
        this.isLoggedIn = true;
      }
    });
    this.getWilts("initial");
    this.wiltService
      .getCategories()
      .subscribe(
        (categories: any) => (this.categories = categories),
        this.handleNetworkError
      );
  }

  getWilts(reason) {
    this.loading = true;
    const tags = this.filters
      .filter((f) => f.type === "tags")
      .map((f) => f.name.toLowerCase());
    const categories = this.filters
      .filter((f) => f.type === "category")
      .map((f) => f.name.toLowerCase());
    this.wiltService
      .getAllWilts(tags, categories, this.page)
      .subscribe((data: any) => {
        if (reason === "bottom" || "initial") {
          this.wilts.push(...data.docs);
          this.backupWilts.push(...this.wilts);
        }
        if (reason === "filter-applied") {
          this.wilts = data.docs;
          this.backupWilts = this.wilts;
          this.page = 1;
        }
        this.totalPages = data.totalPages;
        this.loading = false;
      }, this.handleNetworkError);
  }

  openModal(content) {
    this.modalService.open(content);
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
    this.getWilts("filter-applied");
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

  @HostListener("window:scroll", [])
  loadMore(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.page++;
      if (this.page <= this.totalPages) this.getWilts("bottom");
    }
  }
}
