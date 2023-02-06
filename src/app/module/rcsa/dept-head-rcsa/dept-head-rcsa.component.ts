import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { SubmitRcsaDeptHead } from 'src/app/shared/components/class/rcsa/dept-head/submit-rcsa-dept-head';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs';
import { IRatingComposite } from 'src/app/models/rcsa/RatingComposite/RatingComposite.model';
import { Details, IDeptHead } from 'src/app/models/rcsa/DeptHead/DeptHead.model';
import { DeptHeadCreateStart, DeptHeadFetchStart } from 'src/app/state/store/actions/rcsa/DeptHead.action';
import { RatingCompositeFetchStart } from 'src/app/state/store/actions/rcsa/RatingComposite.action';
import { RatingCompositeFilterInterface } from '../maintance/tabs/rating-composite/types/ratingComposite.interface';
import { DcorFilterInterface, DcorInterface, DetailByIDFilterInterface, DetailByIDInterface, postScore } from '../dcor-head-rcsa/types/dcor.interface';
import { DcorFetchStart } from 'src/app/state/store/actions/rcsa/dcor.action';
import { RcsaByIDFetchStart } from 'src/app/state/store/actions/rcsa/rcsaByID.action';
import { IhrrFetchStart } from 'src/app/state/store/actions/rcsa/Ihrr.action';
import { IhrrFilterInterface } from '../maintance/tabs/ihrr/types/ihrr.interface';
import { ControlFetchStart } from 'src/app/state/store/actions/rcsa/Control.action';
import { RiskAssessmentComponent } from './modals/risk-assessment/risk-assessment.component';
import { RejectedNoteComponent } from '../modals/rejected-note/rejected-note.component';
import { removeNumberFormat } from 'src/app/utils/helpers';
@Component({
  selector: 'app-dept-head-rcsa',
  templateUrl: './dept-head-rcsa.component.html',
  styleUrls: ['./dept-head-rcsa.component.scss'],
})
export class DeptHeadComponent implements OnInit, AfterContentInit {
  rcsa_dh: any;
  utama = true;
  totalRcsa : number = 0
  totalDinilai : number = 0
  rejectedNote: string;

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

  Math = Math;
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
  isloading: boolean = true;
  isloading2: boolean = true;
  removeNumber = removeNumberFormat
  constructor(
    public dialogDataTableDeptHeadRcsa: MatDialog,
    public dialogRiskAssessment: MatDialog,
    public dialogSubmitRcsaDeptHEad: MatDialog,
    private store: Store<AppState>,
  ) { }

  showData(data: any, no:number) {
    this.dialogDataTableDeptHeadRcsa.open(DataTableDeptHeadRcsa, {
      data: {...data, "no": no},
      height: '90%'
    });
  }
  openRiskAssessment(data, el) {
    this.dialogRiskAssessment.open(RiskAssessmentComponent, {
      data: { ...data, "IdRcsa": el.id, "page": this.currentPage.RcsaByID,"rcsa": this.currentPage.Dcor,"status" : el.currentStatus },
      width: "100%",
      height: "auto"
    });
  }
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
            this.totalRcsa = data.totalElements
          }
        })
      )
      .subscribe();
  }

  closeFormulir() {
    this.utama = true;
  }

  openFormulir() {
    this.utama = false;
  }

  expandByID(id,totalDinilai) {
    this.totalDinilai = totalDinilai;
    this.store.dispatch(new RcsaByIDFetchStart({ ...this.RcsaByIDSetting, id: id }));
  }

  openSubmit(id) {
    this.dialogSubmitRcsaDeptHEad.open(SubmitRcsaDeptHead, {
      data: id,
    });
  }

  ngAfterContentInit() {
    this.store.dispatch(new DcorFetchStart(this.dcorSetting));
  }

  onPageChange(event: any, id: any, type: string) {
    switch (type) {
      case 'Dcor':
        this.store.dispatch(new DcorFetchStart({ ...this.dcorSetting, page: event.pageIndex, size: event.pageSize }));
        break;
      case 'RcsaByID':
        this.store.dispatch(new RcsaByIDFetchStart({ ...this.RcsaByIDSetting, page: event.pageIndex, size: event.pageSize, id: id }));
        break;
    }
  }

  showNoteRejected(event: any, note: string){
    this.dialogDataTableDeptHeadRcsa.open(RejectedNoteComponent, {
      data: note,
      width: '60vh',
    });
  }
}

// data table dept head rcsa

@Component({
  selector: 'data-table-dept-head-rcsa',
  templateUrl:
    './modals/show-data-table-dept-head-rcsa/show-data-table-dept-head-rcsa.html',
  styleUrls: ['./modals/show-data-table-dept-head-rcsa/style.scss'],
})
export class DataTableDeptHeadRcsa implements OnInit, AfterContentInit {
  removeNumber = removeNumberFormat
  dataSource: Details[];
  id : number;
  nomorUrut : number;
  isloading2: boolean = true;
  dataRcsaByID: DetailByIDInterface[] = [];
  totalRcsa : number = 0
  totalPage = {
    RcsaByID: 0,
  }
  currentPage = {
    RcsaByID: 0,
  }
  pageSize = {
    RcsaByID: 10,
  }

  RcsaByIDSetting: DetailByIDFilterInterface = {
    id: '',
    page: 0,
    size: 5,
  }
  math = Math;

  constructor
    (
      private dialogRef: MatDialogRef<DataTableDeptHeadRcsa>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private store: Store<AppState>,
    ) {
    this.id = data.id;
    this.nomorUrut = data.no;
  }


  ngOnInit(): void {
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
            this.totalRcsa = data.totalElements
          }
        })
      )
      .subscribe();
  }

  ngAfterContentInit(): void {
    this.store.dispatch(new RcsaByIDFetchStart({ ...this.RcsaByIDSetting, id: this.id }));
  }

  findTier(text:number, type:any){
    switch (type) {
      case 'Ihrr':
        if(text == 1){
          return "Low"
        }else if(text == 2){
          return "Low to Medium"
        }else if(text == 3){
          return "Medium"
        } else if(text == 4){
          return "Medium to High"
        } else if(text == 5){
          return "High"
        } else {
          return "-"
        }
      case 'Control':
        if(text == 1){
          return "Strong"
        }else if(text == 2){
          return "Satisfactory"
        }else if(text == 3){
          return "Fair"
        } else if(text == 4){
          return "Marginal"
        } else if(text == 5){
          return "Unsatisfactory"
        } else {
          return "-"
        }

      default:
        return "-"
    }
  }

  onPageChange(event: any, id: any, type: string) {
    switch (type) {
      case 'RcsaByID':
        this.store.dispatch(new RcsaByIDFetchStart({ ...this.RcsaByIDSetting, page: event.pageIndex, size: event.pageSize, id: id }));
        break;
    }
  }


  close() {
    this.dialogRef.close();
  }
}

// end data table dept head rcsa
