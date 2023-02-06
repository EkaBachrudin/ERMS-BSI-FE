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
import { AddUser } from './add-users.component';
@Component({
  selector: 'edit-user',
  templateUrl:
    '../../../module/rcsa/user-management/modals/edit-user/edit-user.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/edit-user/style.scss',
  ],
})
export class EditUser implements OnInit {
  nrSelect: string = this.data.item.jabatan;
  item = this.data.item.jabatan;
  editUserForm: any;
  getdata() {
    this.editUserForm = this.formBuilder.group({
      nip: this.data.item.nip,
      nama_lengkap: this.data.item.nama_lengkap,
      email: this.data.item.email,
      unit_kerja: this.data.item.unit_kerja,
      role: this.data.item.role,
      id: this.data.item.id,
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUser>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.getdata();
    console.log(this.item);
  }
  cancel() {
    this.dialogRef.close();
  }

  submit() {}
}
