import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'rejected-sorh-kantor-pusat',
  templateUrl:
    '../../../../../../module/rcsa/sorh-rcsa/modals/kantor-pusat/rejected-sorh-kantor-pusat/rejected-sorh-kantor-pusat.html',
  styleUrls: [
    '../../../../../../module/rcsa/sorh-rcsa/modals/kantor-pusat/rejected-sorh-kantor-pusat/style.scss',
  ],
})
export class RejectedSorhKantorPusat {
  constructor(public dialogRef: MatDialogRef<RejectedSorhKantorPusat>) {}

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
