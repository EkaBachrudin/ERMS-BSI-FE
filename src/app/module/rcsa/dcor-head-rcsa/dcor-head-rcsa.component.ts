import { Component, OnInit, AfterContentInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs/operators';
import { DcorApproveStart, DcorFetchStart, DcorRejectStart } from 'src/app/state/store/actions/rcsa/dcor.action';
import { Details, IDcor } from 'src/app/models/rcsa/dcor/dcor.model';
import { IRatingComposite } from 'src/app/models/rcsa/RatingComposite/RatingComposite.model';
import { RatingCompositeFetchStart } from 'src/app/state/store/actions/rcsa/RatingComposite.action';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RatingCompositeFilterInterface } from '../maintance/tabs/rating-composite/types/ratingComposite.interface';
import { DcorFilterInterface, DcorInterface, DetailByIDFilterInterface, DetailByIDInterface } from './types/dcor.interface';
import { DcorHeadService } from './services/dcor-head.service';
import { RcsaByIDFetchStart } from 'src/app/state/store/actions/rcsa/rcsaByID.action';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { DataTableDeptHeadRcsa } from '../dept-head-rcsa/dept-head-rcsa.component';
import { RejectedNoteComponent } from '../modals/rejected-note/rejected-note.component';
import { removeNumberFormat } from 'src/app/utils/helpers';
@Component({
  selector: 'app-dcor-head-rcsa',
  templateUrl: './dcor-head-rcsa.component.html',
  styleUrls: ['./dcor-head-rcsa.component.scss'],
})
export class DcorHeadRcsaComponent implements OnInit, AfterContentInit {
  removeNumber = removeNumberFormat
  dataSource: any[] = [];
  Math = Math;
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
  rejectedNote: any;

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
    this.dialog.open(DcorDialogComponent,
      {
        data : data.Details,
        width : "auto"
      });
  }

  expandByID(id){
    this.store.dispatch(new RcsaByIDFetchStart({...this.RcsaByIDSetting, id : id}));
  }

  openApproved(id) {

    this.dialogApproved.open(ApprovedDialog, {
      data:id
    });
  }

  openRejected(id) {
    this.dialogRejected.open(RejectedDialog,{
      data:id
    });
  }
  ngAfterContentInit(): void {
    this.store.dispatch(new DcorFetchStart(this.dcorSetting));
  }

  onPageChange(event: any,id: any, type: string) {
    switch (type) {
      case 'Dcor':
        this.store.dispatch(new DcorFetchStart({ ...this.dcorSetting, page: event.pageIndex, size: event.pageSize }));
        break;
      case 'RcsaByID':
        this.store.dispatch(new RcsaByIDFetchStart({...this.RcsaByIDSetting, page: event.pageIndex, size: event.pageSize, id: id}));
        break;
    }
  }

  showNoteRejected(event: any, note: string){
    this.dialogDataTableDeptHeadRcsa.open(RejectedNoteComponent, {
      data: note,
    });
  }

  showDataView(element : any) {
    this.dialogDataTableDeptHeadRcsa.open(DataTableDeptHeadRcsa, {
      data: element,
      height: '90%'
    });
  }
}
//Dialog Datatable
@Component({
  selector: 'app-dcor-dialog',
  templateUrl: 'modal/dcor-head-rcsa-modal.component.html',
  styleUrls: ['./modal/dcor-head-rcsa-modal.component.scss'],
})

export class DcorDialogComponent implements OnInit {

  dataSource : any = [];
  constructor
  (
    private dialogRef: MatDialogRef<DcorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataSource = data;
  }

  ngOnInit(): void {}
}

//Dialog Approved
@Component({
  selector: 'app-approved-dialog',
  templateUrl: './modal/approved/approved-rcsa.html',
  styleUrls: ['./modal/approved/style.scss'],
})

export class ApprovedDialog implements OnInit {
  constructor(
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<ApprovedDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  switchButton: boolean = false;

  cancel() {
    this.dialogRef.close();
  }
  toggleButton() {
    this.switchButton = !this.switchButton;
  }
  approved() {
    this.store.dispatch(new DcorApproveStart(this.data.id));
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been approved',
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(function () {}, 2000);
  }

  ngOnInit(): void {}
}

//Dialog Rejected
@Component({
  selector: 'app-rejected-dialog',
  templateUrl: './modal/rejected/rejected-rcsa.html',
  styleUrls: ['./modal/rejected/style.scss'],
})

export class RejectedDialog implements OnInit {
  constructor(
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<RejectedDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  note : string;
  cancel() {
    this.dialogRef.close();
  }
  send() {
    const note : any = {
      noted: this.note,
      id : this.data.id
    }
    this.store.dispatch(new DcorRejectStart(note))
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been rejected',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  ngOnInit(): void {}
}
