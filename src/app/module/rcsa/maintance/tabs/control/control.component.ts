import { Component, OnInit, AfterContentInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ControlFetchStart } from 'src/app/state/store/actions/rcsa/Control.action';
import { IControl } from 'src/app/models/rcsa/Control/Control.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, AfterContentInit {

  dataSource: any = [];
  constructor
    (
      private store: Store<AppState>,
      private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.store.select('settingControl').pipe(
      map((data: any) => {
        if (data.control) {
          this.dataSource = data.control
        }
      })
    ).subscribe()
  }

  ngAfterContentInit(): void {
    this.store.dispatch(new ControlFetchStart(0, 10));
  }

  settingControl(data) {
    this.dialog.open(SettingControl,
      {
        data: data,
      });
  }
  expand(id: any) {
    let a = document.getElementById(`control${id}`);
    if (a?.className === 'fa fa-chevron-up collapsed') {
      a.className = 'fa fa-chevron-down';
    } else {
      a!.className = 'fa fa-chevron-up';
    }
  }

}

@Component({
  selector: 'setting-control',
  templateUrl: '../../modals/setting-control/setting-control.html',
  styleUrls: ['./control.component.scss']
})

export class SettingControl implements OnInit {

  breakpoint
  temporary: any
  constructor(
    public dialogRef: MatDialogRef<SettingControl>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.temporary = {
      id: data.id,
      Rating: data.Rating,
      Score: data.Score.toString(),
      Status: data.Status,
      Details: {
        Deskripsi: data.Details.Deskripsi,
        Uraian: data.Details.Uraian,
        Sequence: data.Details.Sequence,
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}