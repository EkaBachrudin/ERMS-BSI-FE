import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Injectable,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user/user';
import { IFailure } from 'src/app/models/failure/failure.model';
import { AlertMessage } from 'src/app/utils/helpers';
import {
  userCreateFailure,
  userCreateStart,
} from 'src/app/state/store/actions/user/user.action';
//user
@Component({
  selector: 'add-user',
  templateUrl:
    '../../../module/rcsa/user-management/modals/add-user/add-user.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/add-user/style.scss',
  ],
})
export class AddUser {
  addUserForm: any = this.formBuilder.group({
    nip: '',
    nama_lengkap: '',
    email: '',
    jabatan: '',
    unit_kerja: '',
    role: '',
    status: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUser>,
    private store: Store<AppState>
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IUser = {
      id: 3,
      nip: this.addUserForm.value.nip,
      nama_lengkap: this.addUserForm.value.nama_lengkap,
      email: this.addUserForm.value.email,
      jabatan: this.addUserForm.value.jabatan,
      unit_kerja: this.addUserForm.value.unit_kerja,
      role: this.addUserForm.value.role,
      status: 'Approval',
      riskIntegration: [],
    };

    if (this.addUserForm.invalid) {
      var failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new userCreateFailure(failed));
      AlertMessage(failed.message, 'center', 'error');
    } else {
      
    }
    this.dialogRef.close();
  }
}
