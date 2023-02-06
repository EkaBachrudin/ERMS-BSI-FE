import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Inject,
  Injectable,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUser } from './add-users.component';
import { IDirectorate } from 'src/app/models/rcsa/directorate/directorate.model';
import { IFailure } from 'src/app/models/failure/failure.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {
  directorateCreateFailure,
  directorateUpdateFailure,
  directorateUpdateStart,
} from 'src/app/state/store/actions/rcsa/directorate.action';
import { AlertMessage } from 'src/app/utils/helpers';
@Component({
  selector: 'edit-direktorate',
  templateUrl:
    '../../../module/rcsa/user-management/modals/edit-direktorate/edit-direktorate.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/edit-direktorate/style.scss',
  ],
})
export class EditDirektorate implements OnInit {
  editDirForm: any;

  getdata() {
    this.editDirForm = this.formBuilder.group({
      id: [this.data.row.id, Validators.required],
      direktorate: [this.data.row.direktorate, Validators.required],
      callsign: [this.data.row.callsign, Validators.required],
    });
    return this.editDirForm;
  }

  constructor(
    public dialogRef: MatDialogRef<EditDirektorate>,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.getdata();
  }
  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IDirectorate = {
      direktorate: this.editDirForm.value.direktorate,
      callsign: this.editDirForm.value.callsign,
      review: this.data.row.review,
      id: this.editDirForm.value.id,
    };

    // console.log(value);
    if (this.editDirForm.invalid) {
      var failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new directorateUpdateFailure(failed));
      AlertMessage(failed.message, 'center', 'error');
    } else {
    }
    this.dialogRef.close();
  }
}
