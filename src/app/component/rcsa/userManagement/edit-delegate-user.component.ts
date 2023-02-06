import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Inject,
  Injectable,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdddelegateUser } from './add-delegate-user.component';
@Component({
  selector: 'edit-delegate-user',
  templateUrl:
    '../../../module/rcsa/user-management/modals/edit-delegate-user/edit-delegate-user.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/edit-delegate-user/style.scss',
  ],
})
export class EditDelegateUser implements OnInit {
  editDelegateUserForm: any;
  getdata() {
    this.editDelegateUserForm = this.formBuilder.group({
      id: this.data.item.id,
      user_pengusul: this.data.item.user_pengusul,
      user_penganti: this.data.item.user_penganti,
      role: this.data.item.role,
      status_delegasi: this.data.item.status_delegasi,
      start_date: this.data.item.start_date,
      end_date: this.data.item.end_date,
      status: this.data.item.status,
    });
    return this.editDelegateUserForm;
  }

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdddelegateUser>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.getdata();
  }
  cancel() {
    this.dialogRef.close();
  }

  submit() {}
}
