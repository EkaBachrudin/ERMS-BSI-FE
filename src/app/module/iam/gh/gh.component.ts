import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gh',
  templateUrl: './gh.component.html',
  styleUrls: ['./gh.component.scss'],
})
export class GhComponent implements OnInit {
  constructor(public dialogRejected: MatDialog) {}

  approved() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'IAM has been Approved',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  openRejected() {
    this.dialogRejected.open(Rejected);
  }
  ngOnInit(): void {}
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