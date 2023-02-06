import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import {
  directorateFetchStart,
  directorateCreateStart,
  directorateCreateFailure,
} from 'src/app/state/store/actions/rcsa/directorate.action';
import { DirectorateService } from 'src/app/mock/services/directorate/directorate.services';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { IDirectorate } from 'src/app/models/rcsa/directorate/directorate.model';
import { IFailure } from 'src/app/models/failure/failure.model';
import { AlertMessage } from 'src/app/utils/helpers';
@Component({
  selector: 'add-direktorate',
  templateUrl:
    '../../../module/rcsa/user-management/modals/add-direktorate/add-direktorate.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/add-direktorate/style.scss',
  ],
})
export class AddDirektorate {
  addDirForm = this.formBuilder.group({
    direktorate: ['', Validators.required],
    callsign: ['', Validators.required],
    review: 'DRAFTED',
  });
  constructor(
    public dialogRef: MatDialogRef<AddDirektorate>,
    private formBuilder: FormBuilder,
    private directorateService: DirectorateService,
    private store: Store<AppState>
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IDirectorate = {
      direktorate: this.addDirForm.value.direktorate,
      callsign: this.addDirForm.value.callsign,
      review: this.addDirForm.value.review,
      id: 10,
    };

    if (this.addDirForm.invalid) {
      var failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new directorateCreateFailure(failed));
      AlertMessage(failed.message, 'center', 'error');
    } else {
    }
    this.dialogRef.close();
  }
}
