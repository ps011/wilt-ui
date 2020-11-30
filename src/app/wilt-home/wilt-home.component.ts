import { Component, OnInit } from "@angular/core";
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
export class WiltHomeComponent implements OnInit {
  createForm = new FormGroup({
    compact: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    lengthy: new FormControl(""),
    visuals: new FormControl([]),
    tags: new FormControl([]),
  });
  loading: boolean;
  closeResult: string;
  visualUrls = [];
  wilts: any;
  savedWilts = [];
  constructor(
    private wiltService: WiltService,
    private modalService: NgbModal,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.isLoggedIn.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        if (localStorage.getItem("token")) {
          this.userService
            .validateToken(`Bearer ${localStorage.getItem("token")}`)
            .subscribe((data) => {
              this.userService.setLoggedIn(true);
            });
        } else {
          return this.router.navigateByUrl("login");
        }
      } 
      this.loading = true;
      this.wiltService.getAllWilts().subscribe(data => {
        this.loading = false;
        this.wilts = data
      });
      this.userService.getUserDetails(JSON.parse(localStorage.getItem('user')).id)
      .subscribe(user => {
        this.savedWilts = user['saved_wilts'];
        this.userService.setSavedWilts(this.savedWilts);
      })
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

  uploadImage(event) {
    this.loading = true;
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "wilt-ui");
    this.wiltService.upload(formData).subscribe((data: any) => {
      this.loading = false;
      this.visualUrls.push(data.url);
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
          tags: this.createForm.get("tags").value.split(','),
          visuals: this.visualUrls,
          userId: JSON.parse(localStorage.getItem('user')).id,
          username: JSON.parse(localStorage.getItem('user')).username
        })
        .subscribe((data) => {
          this.loading = false;
          this.createForm.reset();
          this.modalService.dismissAll();
        });
    }
  }

  onSaveWilt(event, wilt) { 
    event.target.classList.toggle('btn-simple');
      this.userService.saveWilt(wilt)
      .subscribe(data => {
        console.log(data);
        this.userService.setSavedWilts(data);
      });   
  }

  isWiltSaved(id) {
    return this.savedWilts.indexOf(id) > -1;
  }
}
