import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'approve-sorh',
  templateUrl:
    '../../../../../../module/rcsa/sorh-rcsa/modals/approve-sorh-jaringan/approve-sorh.html',
  styleUrls: [
    '../../../../../../module/rcsa/sorh-rcsa/modals/approve-sorh-jaringan/style.scss',
  ],
})
export class ApproveSorh {
  constructor(public dialogRef: MatDialogRef<ApproveSorh>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been approved',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
