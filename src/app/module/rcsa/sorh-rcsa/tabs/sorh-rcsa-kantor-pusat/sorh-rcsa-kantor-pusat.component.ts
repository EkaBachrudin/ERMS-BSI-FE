import { ApproveSorhKantorPusat } from 'src/app/shared/components/class/rcsa/sorh/kantor-pusat/approve-sorh-kantor-pusat';
import { RejectedSorhKantorPusat } from 'src/app/shared/components/class/rcsa/sorh/kantor-pusat/rejected-sorh-kantor-pusat';
import { Component, OnInit, AfterContentInit, Inject, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs/operators';
import { DcorApproveStart, DcorFetchStart } from 'src/app/state/store/actions/rcsa/dcor.action';
import { Details, IDcor } from 'src/app/models/rcsa/dcor/dcor.model';
import { IRatingComposite } from 'src/app/models/rcsa/RatingComposite/RatingComposite.model';
import { RatingCompositeFetchStart } from 'src/app/state/store/actions/rcsa/RatingComposite.action';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RcsaByIDFetchStart } from 'src/app/state/store/actions/rcsa/rcsaByID.action';
import { ApprovedDialog, DcorDialogComponent, RejectedDialog } from '../../../dcor-head-rcsa/dcor-head-rcsa.component';
import { DcorHeadService } from '../../../dcor-head-rcsa/services/dcor-head.service';
import { DcorInterface, DetailByIDInterface, DcorFilterInterface, DetailByIDFilterInterface } from '../../../dcor-head-rcsa/types/dcor.interface';
import { DataTableDeptHeadRcsa } from '../../../dept-head-rcsa/dept-head-rcsa.component';
import { RejectedNoteComponent } from '../../../modals/rejected-note/rejected-note.component';
import { removeNumberFormat } from 'src/app/utils/helpers';

@Component({
  selector: 'app-sorh-rcsa-kantor-pusat',
  templateUrl: './sorh-rcsa-kantor-pusat.component.html',
  styleUrls: ['./sorh-rcsa-kantor-pusat.component.scss'],
})
export class SorhRcsaKantorPusatComponent implements OnInit {
  utama = true;
  panelOpenState = false;
  isLoading = false;
  currentStatus = null;
  Math = Math;
  removeNumber = removeNumberFormat


  constructor
    (
      private store: Store<AppState>,
      private dialog: MatDialog,
      public dialogApproved: MatDialog,
      public dialogRejected: MatDialog,
      public DcorByID: DcorHeadService,
      public dialogApproveSorhKantorPusat: MatDialog,
      public dialogRejectedSorhKantorPusat: MatDialog,
      public dialogDataTableDeptHeadRcsa: MatDialog,
      public dialogModalRejectedNoted: MatDialog,
    ) { }

  // open modal
  openApproveSorhKantorPusat() {
    this.dialogApproveSorhKantorPusat.open(ApproveSorhKantorPusat);
  }
  openRejectedSorhKantorPusat(id) {

    this.dialogRejectedSorhKantorPusat.open(RejectedSorhKantorPusat, {});
  }

  openDialog(data) {
    this.dialog.open(DcorDialogComponent,
      {
        data: data.Details,
        width: "auto"
      });
  }

  openApproved(id) {
    this.dialogApproved.open(ApprovedDialog, {
      data: id
    });
  }

  openRejected(id) {
    this.dialogRejected.open(RejectedDialog, {
      data: id
    });
  }
  ngAfterContentInit(): void {
    this.store.dispatch(new DcorFetchStart(this.dcorSetting));
  }

  onPageChange(event: any, id: any) {
    this.store.dispatch(new RcsaByIDFetchStart({ ...this.RcsaByIDSetting, page: event.pageIndex, size: event.pageSize, id: id }));
  }
  // end open modal
  dataSource: any[] = [];
  dataRcsaByID: DetailByIDInterface[] = [];
  dcorSetting: DcorFilterInterface = {
    page: 0,
    size: 10,
  }
  RcsaByIDSetting: DetailByIDFilterInterface = {
    id: '',
    page: 0,
    size: 5,
  }
  totalPage: number;
  currentPage: number;
  pageSize: number;
  rejectedNote: string;

  ngOnInit(): void {
    this.store
      .select('Dcor')
      .pipe(
        map((data: any) => {
          if (data.Dcor) {
            this.isLoading = true
            this.dataSource = data.Dcor;
          }
        })
      )
      .subscribe();
    
  }


  expandByID(id) {
    this.isLoading = true
    let elems = document.querySelectorAll(".collapse");
    [].forEach.call(elems, function (el: any) {
      el.className = el.className.replace(/\bshow\b/, "");
    });
    this.dataRcsaByID = []
    if (this.isLoading == true) {
      this.store
      .select('RcsaByID')
      .pipe(
        map((data: any) => {
          if (data.RcsaByID) {
            this.isLoading = false
            this.totalPage = data.totalPage;
            this.currentPage = data.currentPage;
            this.pageSize = data.pageSize;
            this.dataRcsaByID = data.RcsaByID;
          }
        })
      )
      .subscribe();
      this.store.dispatch(new RcsaByIDFetchStart({ ...this.RcsaByIDSetting, page: 0, size: 5, id: id }));
      this.isLoading = true
    }
  }

  searchCurrentStatus(text) {
    if(text.search('Approved') != -1){
      return this.currentStatus = 'approved'
    } else {
      return null;
    }
  }

  showNoteRejected(event: any, note: string){
    this.dialogDataTableDeptHeadRcsa.open(RejectedNoteComponent, {
      data: note,
    });
  }

  showData(id: number) {
    this.dialogDataTableDeptHeadRcsa.open(DataTableDeptHeadRcsa, {
      data: id,
      height: '100%'
    });
  }
}
