import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Injectable,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { IUserDelegate } from 'src/app/models/userDelegate/userDelegate';
import { IFailure } from 'src/app/models/failure/failure.model';
import {
  userDelegateCreateFailure,
  userDelegateCreateStart,
} from 'src/app/state/store/actions/userDelegate/userDelegate.action';
import { AlertMessage } from 'src/app/utils/helpers';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
@Component({
  selector: 'add-delegate-user',
  templateUrl:
    '../../../module/rcsa/user-management/modals/add-delegate-user/add-delegate-user.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/add-delegate-user/style.scss',
  ],
})
export class AdddelegateUser {
  addDeligateForm = this.formBuilder.group({
    user_pengusul: ['', Validators.required],
    user_penganti: ['', Validators.required],
    role: ['', Validators.required],
    status_delegasi: ['', Validators.required],
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],
  });
  constructor(
    public dialogRef: MatDialogRef<AdddelegateUser>,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IUserDelegate = {
      user_pengusul: this.addDeligateForm.value.user_pengusul,
      user_penganti: this.addDeligateForm.value.user_penganti,
      role: this.addDeligateForm.value.role,
      status_delegasi: this.addDeligateForm.value.status_delegasi,
      start_date: this.addDeligateForm.value.start_date,
      end_date: this.addDeligateForm.value.end_date,
      status: 'Dfrafter',
      id: 2,
    };

    console.log(this.addDeligateForm.value);

    if (this.addDeligateForm.invalid) {
      var failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new userDelegateCreateFailure(failed));
      AlertMessage(failed.message, 'center', 'error');
    } else {
      this.store.dispatch(new userDelegateCreateStart(value));
    }
    this.dialogRef.close();
  }
}
