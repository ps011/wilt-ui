import { Component, OnInit } from "@angular/core";
import { NavService } from "../services/nav.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WiltService } from "../services/wilt.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "src/environments/environment";

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
  closeResult: string;
  visualUrls = []
  wilts: any;
  constructor(
    public nav: NavService,
    private wiltService: WiltService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.nav.show();
    this.wiltService.getAllWilts()
    .subscribe(data => this.wilts = data);
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
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', 'wilt-ui');
    this.wiltService.upload(formData)
    .subscribe((data: any) => {
      this.visualUrls.push(data.url);
    });
  }

  onCreateFormSubmit() {
    if (this.createForm.valid) {
      this.wiltService.createWilt({
        compact: this.createForm.get('compact').value,
        lengthy: this.createForm.get('lengthy').value,
        category: this.createForm.get('category').value,
        tags: this.createForm.get('tags').value,
        visuals: this.visualUrls
      }).subscribe((data) => {
        this.createForm.reset();
        this.modalService.dismissAll();
      });
    }
  }
}
