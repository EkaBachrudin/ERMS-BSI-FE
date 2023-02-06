import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddGroup } from './add-group.component';
@Component({
  selector: 'edit-group',
  templateUrl:
    '../../../module/rcsa/user-management/modals/edit-group/edit-group.html',
  styleUrls: [
    '../../../module/rcsa/user-management/modals/edit-group/style.scss',
  ],
})
export class EditGroup implements OnInit {
  editGroupForm: any;

  getdata() {
    this.editGroupForm = this.formBuilder.group({
      id: this.data.item.id,
      group: this.data.item.group,
      callsign: this.data.item.callsign,
      direktorate: this.data.item.direktorate,
    });
    return this.editGroupForm;
  }
  constructor(
    public dialogRef: MatDialogRef<AddGroup>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getdata();
  }
  cancel() {
    this.dialogRef.close();
  }

  submitGruop() {}
}
