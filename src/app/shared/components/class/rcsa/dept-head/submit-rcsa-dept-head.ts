import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { DeptheadSubmitStart } from 'src/app/state/store/actions/rcsa/DeptHead.action';
import Swal from 'sweetalert2';

@Component({
  selector: 'submit-rcsa-dept-head',
  templateUrl:
    '../../../../../module/rcsa/dept-head-rcsa/modals/submit-rcsa-dept-head/submit-rcsa-dept-head.html',
  styleUrls: [
    '../../../../../module/rcsa/dept-head-rcsa/modals/submit-rcsa-dept-head/style.scss',
  ],
})
export class SubmitRcsaDeptHead {
  constructor(public dialogRef: MatDialogRef<SubmitRcsaDeptHead>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
   this.store.dispatch(new DeptheadSubmitStart(this.data.id));
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been submitted',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
