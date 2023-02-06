import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  AfterContentInit,
  Injectable,
  Inject
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IhrrService } from 'src/app/mock/services/Ihrr/Ihrr.services';
import { IIhrr } from 'src/app/models/rcsa/Ihrr/Ihrr.model';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IhrrFetchStart } from 'src/app/state/store/actions/rcsa/Ihrr.action';
import { IhrrFilterInterface } from './types/ihrr.interface';

@Component({
  selector: 'app-ihrr',
  templateUrl: './ihrr.component.html',
  styleUrls: ['./ihrr.component.scss']
})

export class IhrrComponent implements OnInit, AfterContentInit {

  IhrrSettings: any;
  totalPage: number;
  pageSize: number;
  ihrrSetting : IhrrFilterInterface = {
    page: 0,
    size: 5,
    likelihood: "",
    impact: "",
  }
  constructor
    (
      private IhrrService: IhrrService,
      private store: Store<AppState>,
      public dialog: MatDialog
    ) { }

  getIhhrSettings() {
    this.store.select('Ihrr')
      .pipe(
        map((data: any) => {
          if (data.Ihrr) {
            this.pageSize = data.pageSize;
            this.totalPage = data.totalPage;
            this.IhrrSettings = data.Ihrr;
          }
        })
      ).subscribe();
  }

  OpenDialog(item) {
    this.dialog.open(DialogOverviewExampleDialog, {
      data: item
    });
  }

  ngOnInit(): void {
    this.getIhhrSettings();
  }

  ngAfterContentInit(): void {
    this.store.dispatch(new IhrrFetchStart(this.ihrrSetting));
  }

  onPaginateChange($event){
    let copyObj = {...this.ihrrSetting};
    copyObj.page = $event.pageIndex;
    copyObj.size = $event.pageSize;
    this.store.dispatch(new IhrrFetchStart(copyObj));
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./ihrr.component.scss']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IIhrr,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}