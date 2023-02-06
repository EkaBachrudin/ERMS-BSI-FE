import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'add-department',
  templateUrl:
    '../../../../../../../module/rcsa/user-management/modals/unit-kerja/department/add-department/add-department.html',
  styleUrls: [
    '../../../../../../../module/rcsa/user-management/modals/unit-kerja/department/add-department/style.scss',
  ],
})
export class AddDepartment {
  constructor(public dialogRef: MatDialogRef<AddDepartment>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Berhasil ditambahkan',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
