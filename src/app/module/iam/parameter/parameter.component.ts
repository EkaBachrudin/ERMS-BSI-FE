import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss'],
})
export class ParameterComponent implements OnInit {
  constructor(public addIam: MatDialog) {}

  openDialog() {
    this.addIam.open(AddIam);
  }
  ngOnInit(): void {}
}

// add iam

@Component({
  selector: 'add-iam',
  templateUrl: './modals/add-iam/add-iam.html',
  styleUrls: ['./modals/add-iam/style.scss'],
})
export class AddIam {
  constructor(public dialogRef: MatDialogRef<AddIam>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Risk Issue has been submitted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end add iam
