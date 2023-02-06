import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'rejected-sorh',
  templateUrl:
    '../../../../../../module/rcsa/sorh-rcsa/modals/rejected-sorh-jaringan/rejected-sorh.html',
  styleUrls: [
    '../../../../../../module/rcsa/sorh-rcsa/modals/rejected-sorh-jaringan/style.scss',
  ],
})
export class RejectedSorh {
  constructor(public dialogRef: MatDialogRef<RejectedSorh>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been rejected',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
