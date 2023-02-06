import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Dcor, Details } from 'src/app/models/rcsa/dcor/dcor.model';
import { IGroupHead } from 'src/app/models/rcsa/GroupHead/GroupHead.model';
import { AppState } from 'src/app/state/app.state';
import {DcorApproveStart, DcorFetchStart} from 'src/app/state/store/actions/rcsa/dcor.action';
import { RcsaByIDFetchStart } from 'src/app/state/store/actions/rcsa/rcsaByID.action';
import Swal from 'sweetalert2';
import {ApprovedDialog, DcorDialogComponent, RejectedDialog} from '../dcor-head-rcsa/dcor-head-rcsa.component';
import { DcorHeadService } from '../dcor-head-rcsa/services/dcor-head.service';
import { DcorFilterInterface, DcorInterface, DetailByIDFilterInterface, DetailByIDInterface } from '../dcor-head-rcsa/types/dcor.interface';
import { DataTableDeptHeadRcsa } from '../dept-head-rcsa/dept-head-rcsa.component';
import { removeNumberFormat } from 'src/app/utils/helpers';
@Component({
  selector: 'app-group-head-rcsa',
  templateUrl: './group-head-rcsa.component.html',
  styleUrls: ['./group-head-rcsa.component.scss'],
})
export class GroupHeadRcsaComponent implements OnInit, AfterContentInit {
  dataSource: any[] = [];
  dataRcsaByID: DetailByIDInterface[] = [];
  dcorSetting: DcorFilterInterface = {
    page: 0,
    size: 10,
  }
  RcsaByIDSetting: DetailByIDFilterInterface = {
    id: '',
    page: 0,
    size: 10,
  }
  totalPage = {
    Dcor: 0,
    RcsaByID: 0,
  }
  currentPage = {
    Dcor: 0,
    RcsaByID: 0,
  }
  pageSize = {
    Dcor: 10,
    RcsaByID: 10,
  }
  isloading : boolean = true;
  isloading2 : boolean = true;

  rejectedNote: string;

  removeNumber = removeNumberFormat


  constructor
  (
    private store: Store<AppState>,
    private dialog: MatDialog,
    public dialogApproved: MatDialog,
    public dialogRejected: MatDialog,
    public DcorByID : DcorHeadService,
    public dialogDataTableDeptHeadRcsa: MatDialog,

  ) {}

  ngOnInit(): void {
    this.store
      .select('Dcor')
      .pipe(
        map((data: any) => {
          if (data.Dcor) {
            this.isloading = false;
            this.totalPage.Dcor = data.totalPage;
            this.currentPage.Dcor = data.currentPage;
            this.pageSize.Dcor = data.pageSize;
            this.dataSource = data.Dcor;
          }
        })
      )
      .subscribe();


    this.store
      .select('RcsaByID')
      .pipe(
        map((data: any) => {
          if (data.RcsaByID) {
            this.isloading2 = false;
            this.totalPage.RcsaByID = data.totalPage;
            this.currentPage.RcsaByID = data.currentPage;
            this.pageSize.RcsaByID = data.pageSize;
            this.dataRcsaByID = data.RcsaByID;
          }
        })
      )
      .subscribe();

  }



  openDialog(data){

  }

  expandByID(id){
    this.store.dispatch(new RcsaByIDFetchStart({...this.RcsaByIDSetting, id : id}));
  }

  openApproved(id) {
    this.dialogApproved.open(ApprovedDialog, {
      data:id
    });
  }

  openRejected(element) {
    this.dialogRejected.open(RejectedDialog,{
      data:element,
    });
  }
  ngAfterContentInit(): void {
    this.store.dispatch(new DcorFetchStart(this.dcorSetting));
  }

  onPageChange(event: any,id: any, type: string) {
    this.store.dispatch(new RcsaByIDFetchStart({...this.RcsaByIDSetting, page: event.pageIndex, size: event.pageSize, id: id}));
  }

  showNoteRejected(event: any, note: string){
    this.rejectedNote = note;
  }

  showDataView(id: number) {
    this.dialogDataTableDeptHeadRcsa.open(DataTableDeptHeadRcsa, {
      data: id,
      height: '90%'
    });
  }
}
//
// // approved dialog / modals
// @Component({
//   selector: 'approved-rcsa',
//   templateUrl: './modals/approved/approved-rcsa.html',
//   styleUrls: ['./modals/approved/style.scss'],
// })
// export class ApprovedDialog {
//   constructor(
//     public dialogRef: MatDialogRef<ApprovedDialog>,
//     @Inject(MAT_DIALOG_DATA) private _data: any,
//     private store: Store<AppState>
//
// ) {}
//
//   cancel() {
//     this.dialogRef.close();
//   }
//
//   approved() {
//     this.store.dispatch(new DcorApproveStart(this._data.id));
//     this.dialogRef.close();
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: 'RCSA has been approved',
//       showConfirmButton: false,
//       timer: 2000,
//     });
//
//   }
// }

// rejected dialog / modals

@Component({
  selector: 'rejected-rcsa',
  templateUrl: './modals/rejected/rejected-rcsa.html',
  styleUrls: ['./modals/rejected/style.scss'],
})
export class GroupHeadRejectedDialog {
  constructor(public dialogRef: MatDialogRef<GroupHeadRejectedDialog>) {}

  cancel() {
    this.dialogRef.close();
  }

  send() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been rejected',
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(function () {}, 2000);
  }
}

// show data table group head rcsa

@Component({
  selector: 'data-table-group-head-rcsa',
  templateUrl: './modals/data-table/data-table-group-head-rcsa.html',
  styleUrls: ['./modals/data-table/style.scss'],
})
export class DataTableGroupHeadRcsa {
  dataSource : any = [];
  constructor
  (
    private dialogRef: MatDialogRef<DataTableGroupHeadRcsa>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataSource = data;
  }

  close() {
    this.dialogRef.close();
  }
}

// end show data table group head rcsa
