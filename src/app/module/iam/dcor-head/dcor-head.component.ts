import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dcor-head',
  templateUrl: './dcor-head.component.html',
  styleUrls: ['./dcor-head.component.scss']
})
export class DcorHeadComponent implements OnInit {

  constructor(
    public dialogApproved: MatDialog,
    public dialogRejected: MatDialog
  ) {}

  openApproved() {
    this.dialogApproved.open(Approved);
  }
  openRejected() {
    this.dialogRejected.open(Rejected);
  }
  ngOnInit(): void {}
}
@Component({
  selector: 'approved',
  templateUrl: './modals/approved/approved.html',
  styleUrls: ['./modals/approved/style.scss'],
})
export class Approved {
  constructor(public dialogRef: MatDialogRef<Approved>) {}

  cancel() {
    this.dialogRef.close();
  }
  approved() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'IAM has been Approved',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
@Component({
  selector: 'rejected',
  templateUrl: './modals/rejected/rejected.html',
  styleUrls: ['./modals/rejected/style.scss'],
})
export class Rejected {
  constructor(public dialogRef: MatDialogRef<Rejected>) {}

  cancel() {
    this.dialogRef.close();
  }
  reject() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'IAM has been Rejected',
      showConfirmButton: false,
      timer: 2000,
    });
  }

}
