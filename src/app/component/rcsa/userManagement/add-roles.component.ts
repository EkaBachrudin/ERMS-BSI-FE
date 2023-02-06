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
import { IRole } from 'src/app/models/rcsa/role/role.model';
import { IFailure } from 'src/app/models/failure/failure.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {
  roleCreateFailure,
  roleCreateStart,
} from 'src/app/state/store/actions/rcsa/role.action';
import { AlertMessage } from 'src/app/utils/helpers';
@Component({
  selector: 'add-role',
  templateUrl:
    '../../../module/rcsa/user-management/modals/add-role/add-role.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/add-role/style.scss',
  ],
})
export class AddRole {
  addRoleForm = this.formBuilder.group({
    name: ['', Validators.required],
    unit: ['', Validators.required],
    directorat: ['', Validators.required],
    group: ['', Validators.required],
    // permission: [{name: "", module: ""}],
  });

  constructor(
    public dialogRef: MatDialogRef<AddRole>,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IRole = {
      id: 3,
      name: this.addRoleForm.value.name,
      unit: this.addRoleForm.value.unit,
      directorat: this.addRoleForm.value.directorat,
      group: this.addRoleForm.value.group,
      review: 'Approved',
      // permission: [{name: "", module: ""}],
    };

    console.log(this.addRoleForm.value);

    if (this.addRoleForm.invalid) {
      let failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new roleCreateFailure(failed));
      AlertMessage(failed.message, 'center', 'error');
    } else {
      //next update
      // this.store.dispatch(new roleCreateStart(value));
    }
    this.dialogRef.close();
  }
}
