import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'approve-sorh-kantor-pusat',
  templateUrl:
    '../../../../../../module/rcsa/sorh-rcsa/modals/kantor-pusat/approve-sorh-kantor-pusat/approve-sorh-kantor-pusat.html',
  styleUrls: [
    '../../../../../../module/rcsa/sorh-rcsa/modals/kantor-pusat/approve-sorh-kantor-pusat/style.scss',
  ],
})
export class ApproveSorhKantorPusat {
  constructor(public dialogRef: MatDialogRef<ApproveSorhKantorPusat>) {}

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
