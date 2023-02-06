import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Inject,
  Injectable,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {
  groupCreateStart,
  groupCreateFailure,
} from 'src/app/state/store/actions/rcsa/group.action';
import { IGroup } from 'src/app/models/rcsa/group/gruop.model';
import { IFailure } from 'src/app/models/failure/failure.model';
import { AlertMessage } from 'src/app/utils/helpers';

//Group
@Component({
  selector: 'add-group',
  templateUrl:
    '../../../module/rcsa/user-management/modals/add-group/add-group.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/add-group/style.scss',
  ],
})
export class AddGroup {
  addGropForm = this.formBuilder.group({
    direktorate: ['', Validators.required],
    callsign: ['', Validators.required],
    group: ['', Validators.required],
    review: 'DRAFT',
  });
  constructor(
    public dialogRef: MatDialogRef<AddGroup>,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IGroup = {
      direktorate: this.addGropForm.value.direktorate,
      review: this.addGropForm.value.review,
      callsign: this.addGropForm.value.callsign,
      group: this.addGropForm.value.group,
      id: 10,
    };

    if (this.addGropForm.invalid) {
      var failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new groupCreateFailure(failed));
      AlertMessage(failed.message, 'center', 'error');
    } else {
      // this.store.dispatch(new groupCreateStart(value));
    }
    this.dialogRef.close();
  }
}
