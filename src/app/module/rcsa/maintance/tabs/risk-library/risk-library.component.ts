import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IFailure } from 'src/app/models/failure/failure.model';
import { IRiskLibrary } from 'src/app/models/riskLibrary/riskLibrary.model';
import { AppState } from 'src/app/state/app.state';
import { groupFetchStart } from 'src/app/state/store/actions/rcsa/group.action';
import {
  riskLibraryCreateFailure,
  riskLibraryDetailFetchStart,
  riskLibraryFetchStart,
  riskRegisterFetchStart,
} from 'src/app/state/store/actions/rcsa/riskLibrary.action';
import { segmenFetchStart } from 'src/app/state/store/actions/rcsa/segmen.action';
import {
  dataTable,
  DuplicateRcsa,
  SubmitPeriodePengisianRcsa,
} from '../../maintance.component';
import { AddRiskIssue } from '../../modals/add-risk-issue/add-risk-issue.component';
import { AddFileComponent } from './add-file/add-file.component';
import { GroupInterface } from '../../../user-management/types/group.interface';
import { RiskLibraryFilterInterface, RiskLibraryInterface } from './types/risklib.interface';
import { RiskLibraryDetailFilterInterface, RiskLibraryDetailInterface } from './types/riskLibraryDetail.interface';
import { GetRiskRegisterInterface, RiskRegisterFilterInterface } from './types/getRiskRegister.interface';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
import { removeNumberFormat } from 'src/app/utils/helpers';
@Component({
  selector: 'app-risk-library',
  templateUrl: './risk-library.component.html',
  styleUrls: ['./risk-library.component.scss'],
})
export class RiskLibraryComponent implements OnInit {
  rcsaDataId: any[]
  riskRegisterData: GetRiskRegisterInterface[] = [];
  rcsaData: RiskLibraryInterface[] = [];
  riskLibDetails: RiskLibraryDetailFilterInterface[] = [];
  isActiveRowKeyProcess: boolean;
  kelolaRiskLibrary = true;
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  isApprover = localStorage.getItem('role') === 'admin_approve';
  groups: GroupInterface[] = []

  totalElementRiskRegister: number;
  totalPageRiskRegister: number;
  currentPageRiskRegister: number;
  pageSizeRiskRegister: number;

  RiskLibraryFilter : RiskLibraryFilterInterface = {
    quarter : "",
    page :0,
    size : 10,
    yearOf : "",
    group : ""
  }
  riskLibraryDetailsElement = 0;
  riskLibraryDetails: RiskLibraryDetailInterface[] = [];
  isLoading :any
  riskLibraryDetailsRequest: RiskLibraryDetailFilterInterface ={
    page : 0,
    size : 5,
    risk_draft : ""
  }
  groupPaginationSetting: requestPaginationByID = {
    id: '',
    page: 0,
    size: 10,
  }

  totalPage = {
    RiskLibrary: 0,
    RiskLibraryDetail: 0,
    RiskRegister: 0,
    user: 0,
  }
  currentPage = {
    RiskLibrary: 0,
    RiskLibraryDetail: 0,
    RiskRegister: 0,
    user: 0,
  }
  pageSize = {
    RiskLibrary: 10,
    RiskLibraryDetail: 5,
    RiskRegister: 10,
    user: 10,
  }

  isLoadingdata ={
    riskLibrary: true,
    riskLibraryDetail: true,
  }

  riskRegisterPaginationSetting: RiskRegisterFilterInterface = {
    id: '',
    page: 0,
    size: 5,
  }

  removeNumber = removeNumberFormat

  constructor(
    public dialogDuplicateRcsa: MatDialog,
    public dialogRiskIssue: MatDialog,
    public addGroupSegmen: MatDialog,
    public dialogDataTable: MatDialog,
    public dialogPeriodePengisian: MatDialog,
    private Store: Store<AppState>
  ) {

  }
  filterRiskLibs() : void{
    let selected = document.querySelectorAll("select")
    let copyObj = {...this.RiskLibraryFilter}
    selected.forEach(e =>{
      if(e.name=== "quarter"){
        copyObj.quarter = e.value
      }
      if(e.name=== "yearOf"){
        copyObj.yearOf = e.value
      }
      if(e.name=== "group"){
        copyObj.group = e.value
      }
    })
    this.RiskLibraryFilter = copyObj;
    this.Store.dispatch(new riskLibraryFetchStart(this.RiskLibraryFilter));
  }
  ngOnInit(): void {
    this.Store.select('riskLibrary')
      .pipe(
        map((riskLibrary: any) => {
          if(riskLibrary.riskLibrary){
            this.rcsaData = riskLibrary.riskLibrary;
            this.totalPage.RiskLibrary = riskLibrary.totalPages;
            this.currentPage.RiskLibrary = riskLibrary.currentPage;
            this.pageSize.RiskLibrary = riskLibrary.pageSize;
            this.isLoadingdata.riskLibrary = false;
          }
        })
      )
      .subscribe();

    this.Store.select('getRiskRegister')
      .pipe(
        map((data: any) => {
          if (data.getRegister) {
            this.totalElementRiskRegister = data.totalElements
            this.totalPageRiskRegister = data.totalPage
            this.currentPageRiskRegister = data.currentPage
            this.pageSizeRiskRegister = data.pageSize
            this.riskRegisterData = data.getRegister;
          }
        })
      )
    .subscribe();


      this.Store.select('group')
      .pipe(
        map((riskLibrary: any) => {
          if(riskLibrary.group){
            this.groups = riskLibrary.group.filter((e:GroupInterface) => {
              return e.name != null
            });

          }
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new riskLibraryFetchStart(this.RiskLibraryFilter));
    this.Store.dispatch(new groupFetchStart(0, 10 ));
    this.Store.dispatch(new riskRegisterFetchStart(0,5));
  }

  onPageChange(event) {
    this.Store.dispatch(new riskRegisterFetchStart(event.pageIndex, event.pageSize))
  }

  ongPageChange(event: any, type: string, id: any = null) {
    switch (type) {
      case 'RiskLibrary':
        this.Store.dispatch(new riskLibraryFetchStart({...this.RiskLibraryFilter, page: event.pageIndex, size: event.pageSize}));
        break;
      case 'RiskLibraryDetails':
        // this.isLoadingdata.riskLibraryDetail = true;
        this.Store.dispatch(new riskLibraryDetailFetchStart({...this.riskLibraryDetailsRequest, page: event.pageIndex, size: event.pageSize,risk_draft : id}));
        break;
    }
  }
  toggleRowKeyProcess(): void {
    this.isActiveRowKeyProcess = !this.isActiveRowKeyProcess;
  }

  addSegmenGroup(): void {
    this.addGroupSegmen.open(AddFileComponent);
  }

  riskIssue(id: any) {
    this.dialogRiskIssue.open(AddRiskIssue, {
      data: {
        id: id,
      },
    });
  }

  changeRiskRegister() {
    document.getElementById('risk').className = 'active';
    document.getElementById('kelolaRiskLibrary').className = 'nonActive';
    this.kelolaRiskLibrary = false;
  }
  changeKelolaRiskLibrary() {
    document.getElementById('risk').className = 'nonActive';
    document.getElementById('kelolaRiskLibrary').className = 'active';
    this.kelolaRiskLibrary = true;
  }

  duplicateRcsa() {
    this.dialogDuplicateRcsa.open(DuplicateRcsa);
  }
  showTable(id: number) {
    this.dialogDataTable.open(dataTable);
  }

  expand(id: any) {
    this.isLoadingdata.riskLibraryDetail = true;
    this.Store.dispatch(new riskLibraryDetailFetchStart({...this.riskLibraryDetailsRequest, risk_draft : id}));

    this.Store.select('riskLibraryDetails')
    .pipe(
      map((riskLibrary: any) => {
        if(riskLibrary.riskLibraryDetail){
          this.riskLibraryDetails = riskLibrary.riskLibraryDetail
          this.totalPage.RiskLibraryDetail = riskLibrary.totalPages;
          this.currentPage.RiskLibraryDetail = riskLibrary.currentPage;
          this.pageSize.RiskLibraryDetail = riskLibrary.pageSize;
          this.isLoadingdata.riskLibraryDetail = false;
        }
      })
    )
    .subscribe();
    let a = document.getElementById(`rcsa${id}`);
    let elems = document.querySelectorAll(".collapse");
    if (a?.className === 'fa fa-chevron-down') {

    } else {
      a!.className = 'fa fa-chevron-down';
    }
    [].forEach.call(elems, function(el: any) {
        el.className = el.className.replace(/\bshow\b/, "");
    });
  }
  toApproveRR(item: any) {
    const rrValueEdit = {
      unit: item.unit,
      group: item.group,
      startDate: item.startDate,
      endDate: item.endDate,
      year: item.year,
      quartal: item.quartal,
      riskLibrary: [
        {
          keyPro: item.riskLibrary[0].keyPro,
          keyRisk: item.riskLibrary[0].keyRisk,
          let1: item.riskLibrary[0].let1,
          let2: item.riskLibrary[0].let2,
          keyControl: item.riskLibrary[0].keyControl,
          ketentuan: item.riskLibrary[0].ketentuan,
          nameKet: item.riskLibrary[0].nameKet,
        },
      ],
      status: 'APPROVED',
    };
  }

  toRejectRR(item: any) {
    const rrValueEdit = {
      unit: item.unit,
      group: item.group,
      startDate: item.startDate,
      endDate: item.endDate,
      year: item.year,
      quartal: item.quartal,
      riskLibrary: [
        {
          keyPro: item.riskLibrary[0].keyPro,
          keyRisk: item.riskLibrary[0].keyRisk,
          let1: item.riskLibrary[0].let1,
          let2: item.riskLibrary[0].let2,
          keyControl: item.riskLibrary[0].keyControl,
          ketentuan: item.riskLibrary[0].ketentuan,
          nameKet: item.riskLibrary[0].nameKet,
        },
      ],
      status: 'REJECTED',
    };
  }

  submitPeriodePengisianRcsa(id: any) {
    this.dialogPeriodePengisian.open(SubmitPeriodePengisianRcsa, {
      data: {
        id: id,

      },
    });
  }
}

@Component({
  selector: 'add',
  templateUrl: '../../modals/add-rcsa-segmen-group/add.html',
})
export class addRcsa implements OnInit {
  groupPaginationSetting: requestPaginationByID = {
    id: '',
    page: 0,
    size: 10,
  }
  groupKantorPusat: any;
  segmenjaringan: any;

  constructor(
    public dialogRef: MatDialogRef<addRcsa>,
    private Store: Store<AppState>,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  addRscaForm = this.formBuilder.group({
    id: 100,
    unit: ['', Validators.required],
    segmentgroup: ['', Validators.required],
    status: 'DRAFTED',
    periode: '-',
    tanggalMulai: '-',
    tanggalAkhir: '-',
    detail: [],
  });

  selectedTeam = 'All';
  onSelected(value: string): void {
    this.selectedTeam = value;
  }

  ngOnInit(): void {
    this.Store.select('group')
      .pipe(
        map((group: any) => {
          this.groupKantorPusat = group.group;
        })
      )
      .subscribe();
    this.Store.select('segmen')
      .pipe(
        map((segmen: any) => {
          this.segmenjaringan = segmen.segmen;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new groupFetchStart(0, 10));
    this.Store.dispatch(new segmenFetchStart());
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    var value: IRiskLibrary = {
      id: Date.now(),
      unit: this.addRscaForm.value.unit,
      segmentgroup: this.addRscaForm.value.segmentgroup,
      status: this.addRscaForm.value.status,
      periode: this.addRscaForm.value.periode,
      tanggalMulai: this.addRscaForm.value.tanggalMulai,
      tanggalAkhir: this.addRscaForm.value.tanggalAkhir,
      detail: [],
    };

    if (this.addRscaForm.invalid) {
      let failed: IFailure = {
        message: 'Invalid',
        code: 400,
      };
      this.store.dispatch(new riskLibraryCreateFailure(failed));
    }
    this.dialogRef.close();
  }
}
