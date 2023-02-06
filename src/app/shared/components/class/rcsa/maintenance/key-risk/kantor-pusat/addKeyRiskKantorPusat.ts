import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'add-key-risk-kantor-pusat',
  templateUrl:
    '../../../../../../../module/rcsa/maintance/modals/add-key-risk/add-key-risk..html',
  styleUrls: [
    '../../../../../../../module/rcsa/maintance/modals/add-key-risk/style.scss',
  ],
})
export class addKeyRisk implements OnInit {
  keyProData: any;
  constructor(public dialogRef: MatDialogRef<addKeyRisk>) {}

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KEY RISK has been submitted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
