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
import { IFailure } from 'src/app/models/failure/failure.model';
import { AlertMessage } from 'src/app/utils/helpers';
import { IKeyProcessKantorPusat } from 'src/app/models/rcsa/key-process/keyprocessKantorPusat';
import {
  keyProcessKantorPusatCreateStart,
  keyProcessKantorPusatFetchFailure,
} from 'src/app/state/store/actions/rcsa/keyProcessKantorPusat.action';

//Group
@Component({
  selector: 'add-key-process',
  templateUrl:
    '../../../module/rcsa/maintance/modals/add-key-process/add-key-process.html',
  styleUrls: [
    '../../../module/rcsa/maintance/modals/add-key-process/style.scss',
  ],
})
export class addKeyProcess {
  addKeyPro = this.formBuilder.group({
    unit: ['', Validators.required],
    group: ['', Validators.required],
    keyPro: ['', Validators.required],
  });
  constructor(
    public dialogRef: MatDialogRef<addKeyProcess>,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IKeyProcessKantorPusat = {
      unit: this.addKeyPro.value.unit,
      group: this.addKeyPro.value.group,
      keyPro: this.addKeyPro.value.keyPro,
      id: 10,
      status: 'DRAFTER',
    };

    if (this.addKeyPro.invalid) {
      var failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new keyProcessKantorPusatFetchFailure(failed));
      AlertMessage(failed.message, 'center', 'error');
    } else {
      this.store.dispatch(new keyProcessKantorPusatCreateStart(value));
    }
    this.dialogRef.close();
  }
}
