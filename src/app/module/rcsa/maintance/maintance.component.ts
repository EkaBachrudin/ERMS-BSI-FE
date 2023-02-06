import {
  OnInit,
  Injectable,
  HostListener,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs';
import { groupFetchStart } from 'src/app/state/store/actions/rcsa/group.action';
import { segmenFetchStart } from 'src/app/state/store/actions/rcsa/segmen.action';
import { letFetchStart } from 'src/app/state/store/actions/rcsa/let.action';
import { addKeyRisk } from '../../../shared/components/class/rcsa/maintenance/key-risk/kantor-pusat/addKeyRiskKantorPusat';
import { RiskLibraryPut } from './tabs/risk-library/types/riskLibraryPut.interface';
import { rcsaSubmitAction } from 'src/app/state/store/actions/rcsa/riskLibrary.action';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-maintance',
  templateUrl: './maintance.component.html',
  styleUrls: ['./maintance.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MaintanceComponent implements OnInit {
  kelolaRiskLibrary = true;
  rcsaData: any;
  rcsaDataId: any[] = [];
  childRCSAData: any;
  keyControlData: any;
  dataLet: any;
  letList: any;
  kantorPusatKeyRisk = true;
  kantorPusatKeyProcess = true;
  keyRiskTabs = true;
  isActiveRowKeyProcess = false;
  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';

  // tabs setting rating

  likelihood = true;
  impact = false;
  control = false;
  ihrrPredicate = false;
  ratingComposite = false;

  // end tabs setting rating
  dataIHhr = {
    Sheet1: [
      {
        Color: '#037D5A',
        Likelihood: 1,
        Impact: 1,
        IHRR: 1,
        type: 'STRONG',
      },
      {
        Color: '#B2DE82',
        Likelihood: 1,
        Impact: 2,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#B2DE82',
        Likelihood: 1,
        Impact: 3,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 1,
        Impact: 4,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 1,
        Impact: 5,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#B2DE82',
        Likelihood: 2,
        Impact: 1,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 2,
        Impact: 2,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 2,
        Impact: 3,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 2,
        Impact: 4,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 2,
        Impact: 5,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#B2DE82',
        Likelihood: 3,
        Impact: 1,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 3,
        Impact: 2,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 3,
        Impact: 3,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF9900',
        Likelihood: 3,
        Impact: 4,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF7171',
        Likelihood: 3,
        Impact: 5,
        IHRR: 5,
        type: 'high ',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 4,
        Impact: 1,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 4,
        Impact: 2,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 4,
        Impact: 3,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF7171',
        Likelihood: 4,
        Impact: 4,
        IHRR: 5,
        type: 'high ',
      },
      {
        Color: '#FF7171',
        Likelihood: 4,
        Impact: 5,
        IHRR: 5,
        type: 'high ',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 5,
        Impact: 1,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 5,
        Impact: 2,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF7171',
        Likelihood: 5,
        Impact: 3,
        IHRR: 5,
        type: 'high ',
      },
      {
        Color: '#FF7171',
        Likelihood: 5,
        Impact: 4,
        IHRR: 5,
        type: 'high ',
      },
      {
        Color: '#FF0002',
        Likelihood: 5,
        Impact: 5,
        IHRR: 5,
        type: 'Very high',
      },
    ],
  };
  dataControl = {
    Sheet1: [
      {
        Color: '#037D5A',
        Likelihood: 1,
        Impact: 1,
        IHRR: 1,
        type: 'STRONG',
      },
      {
        Color: '#B2DE82',
        Likelihood: 1,
        Impact: 2,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#B2DE82',
        Likelihood: 1,
        Impact: 3,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 1,
        Impact: 4,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 1,
        Impact: 5,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#B2DE82',
        Likelihood: 2,
        Impact: 1,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 2,
        Impact: 2,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 2,
        Impact: 3,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 2,
        Impact: 4,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 2,
        Impact: 5,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#B2DE82',
        Likelihood: 3,
        Impact: 1,
        IHRR: 2,
        type: 'SATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 3,
        Impact: 2,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 3,
        Impact: 3,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF9900',
        Likelihood: 3,
        Impact: 4,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF7171',
        Likelihood: 3,
        Impact: 5,
        IHRR: 5,
        type: 'UNSATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 4,
        Impact: 1,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 4,
        Impact: 2,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 4,
        Impact: 3,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF7171',
        Likelihood: 4,
        Impact: 4,
        IHRR: 5,
        type: 'UNSATISFACTORY',
      },
      {
        Color: '#FF7171',
        Likelihood: 4,
        Impact: 5,
        IHRR: 5,
        type: 'UNSATISFACTORY',
      },
      {
        Color: '#FFFF8F',
        Likelihood: 5,
        Impact: 1,
        IHRR: 3,
        type: 'FAIR',
      },
      {
        Color: '#FF9900',
        Likelihood: 5,
        Impact: 2,
        IHRR: 4,
        type: 'MARGINAL',
      },
      {
        Color: '#FF7171',
        Likelihood: 5,
        Impact: 3,
        IHRR: 5,
        type: 'UNSATISFACTORY',
      },
      {
        Color: '#FF7171',
        Likelihood: 5,
        Impact: 4,
        IHRR: 5,
        type: 'UNSATISFACTORY',
      },
      {
        Color: '#FF0002',
        Likelihood: 5,
        Impact: 5,
        IHRR: 5,
        type: 'UNSATISFACTORY',
      },
    ],
  };
  constructor(
    public addGroupSegmen: MatDialog,
    public dialogKeyProcess: MatDialog,
    public dialogKeyControl: MatDialog,
    public dialogKetentuan: MatDialog,
    public dialogRiskIssue: MatDialog,
    public dialogPeriodePengisian: MatDialog,
    public dialogDataTable: MatDialog,
    public dialogDuplicateRcsa: MatDialog,
    public dialogEditKeyControl: MatDialog,
    public dialogEditKetentuan: MatDialog,
    public dialogAddLet: MatDialog,
    public dialogEditLet: MatDialog,
    public dialogDeleteKeyControl: MatDialog,
    public dialogDeleteKetentuan: MatDialog,
    public dialogKeyRisk: MatDialog,
    public dialogDeleteLet: MatDialog,
    public dialogSettingLikelihood: MatDialog,
    public dialogSettingImpact: MatDialog,
    private Store: Store<AppState>
  ) {}

  // Tab Let
  ngOnInit(): void {
    this.Store.select('let')
      .pipe(
        map((letData: any) => {
          this.letList = letData.let;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new letFetchStart(0, 10));
  }
  // End Tab Let

  // tab key process

  changeKantorPusatKeyProcess() {
    document.getElementById('kantorPusatKeyProcess').className = 'active';
    // document.getElementById('jaringanKeyProcess').className = 'nonActive';
    this.kantorPusatKeyProcess = true;
  }

  changeJaringanKeyProcess() {
    // document.getElementById('jaringanKeyProcess').className = 'active';
    document.getElementById('kantorPusatKeyProcess').className = 'nonActive';
    this.kantorPusatKeyProcess = false;
  }

  // end tab key process

  changeKantorPusatKeyRisk() {
    document.getElementById('kantorPusatKeyRisk').className = 'active';
    // document.getElementById('jaringanKeyRisk').className = 'nonActive';
    this.kantorPusatKeyRisk = true;
  }

  changeJaringanKeyRisk() {
    // document.getElementById('jaringanKeyRisk').className = 'active';
    document.getElementById('kantorPusatKeyRisk').className = 'nonActive';
    this.kantorPusatKeyRisk = false;
  }

  // tab key risk

  // end tab key risk

  keyRisk() {
    this.dialogKeyRisk.open(addKeyRisk);
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

  // tabs setting rating
  changeLikelihood() {
    document.getElementById('likelihood-setting-rating').className = 'active';
    document.getElementById('impact-setting-rating').className = 'nonActive';
    document.getElementById('control-setting-rating').className = 'nonActive';
    document.getElementById('ihrrpredicate-setting-rating').className =
      'nonActive';
    document.getElementById('ratingcomposite-setting-rating').className =
      'nonActive';
    this.likelihood = true;
    this.impact = false;
    this.control = false;
    this.ihrrPredicate = false;
    this.ratingComposite = false;
  }

  changeImpact() {
    document.getElementById('likelihood-setting-rating').className =
      'nonActive';
    document.getElementById('impact-setting-rating').className = 'active';
    document.getElementById('control-setting-rating').className = 'nonActive';
    document.getElementById('ihrrpredicate-setting-rating').className =
      'nonActive';
    document.getElementById('ratingcomposite-setting-rating').className =
      'nonActive';
    this.likelihood = false;
    this.impact = true;
    this.control = false;
    this.ihrrPredicate = false;
    this.ratingComposite = false;
  }

  changeControl() {
    document.getElementById('likelihood-setting-rating').className =
      'nonActive';
    document.getElementById('impact-setting-rating').className = 'nonActive';
    document.getElementById('control-setting-rating').className = 'active';
    document.getElementById('ihrrpredicate-setting-rating').className =
      'nonActive';
    document.getElementById('ratingcomposite-setting-rating').className =
      'nonActive';
    this.likelihood = false;
    this.impact = false;
    this.control = true;
    this.ihrrPredicate = false;
    this.ratingComposite = false;
  }

  changeIhrrPredicate() {
    document.getElementById('likelihood-setting-rating').className =
      'nonActive';
    document.getElementById('impact-setting-rating').className = 'nonActive';
    document.getElementById('control-setting-rating').className = 'nonActive';
    document.getElementById('ihrrpredicate-setting-rating').className =
      'active';
    document.getElementById('ratingcomposite-setting-rating').className =
      'nonActive';
    this.likelihood = false;
    this.impact = false;
    this.control = false;
    this.ihrrPredicate = true;
    this.ratingComposite = false;
  }

  changeRatingComposite() {
    document.getElementById('likelihood-setting-rating').className =
      'nonActive';
    document.getElementById('impact-setting-rating').className = 'nonActive';
    document.getElementById('control-setting-rating').className = 'nonActive';
    document.getElementById('ihrrpredicate-setting-rating').className =
      'nonActive';
    document.getElementById('ratingcomposite-setting-rating').className =
      'active';
    this.likelihood = false;
    this.impact = false;
    this.control = false;
    this.ihrrPredicate = false;
    this.ratingComposite = true;
  }

  // end tabs setting rating
  // addSegmenGroup() {
  //   this.addGroupSegmen.open(addRcsa);
  // }
  // keyRisk() {
  //   this.dialogKeyRisk.open(addKeyRisk);
  // }

  ketentuan() {
    this.dialogKetentuan.open(addKetentuan);
  }

  editKetentuan() {
    this.dialogEditKetentuan.open(EditKetentuan);
  }
  duplicateRcsa() {
    this.dialogDuplicateRcsa.open(DuplicateRcsa);
  }
  showTable() {
    this.dialogDataTable.open(dataTable);
  }

  deleteKeyControl() {
    this.dialogDeleteKeyControl.open(DeleteKeyControl);
  }

  addLet() {
    this.dialogAddLet.open(AddLet);
  }
  editLet() {
    this.dialogEditLet.open(EditLet);
  }

  deleteKetentuan() {
    this.dialogDeleteKetentuan.open(DeleteKetentuan);
  }

  settingLikelihood() {
    this.dialogSettingLikelihood.open(SettingLikelihood);
  }

  getData() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/keyControl?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, 'ini hoy');
      this.keyControlData = res.data;
    });
  }

  getLet() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/let`,
    }).then((res) => {
      // console.log(res.data[0].let2, '<<<<<');
      this.dataLet = res.data[0].let2;
    });
  }
  toApproveKeyCont(item: any) {
    const updateStatus = {
      unit: item.unit,
      group: item.group,
      keyPro: item.keyPro,
      keyRisk: item.keyRisk,
      keyControl: item.keyControl,
      ketentuan: item.ketentuan,
      nameKet: item.nameKet,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/keyControl/${item.id}`,
      data: updateStatus,
    }).then((_res) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to Approve this',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#68B7FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Approve',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Approve!', 'Succes to Approve.', 'success');
        }
      });
    });
  }

  toRejectKeyCont(item: any) {
    const updateStatus = {
      unit: item.unit,
      group: item.group,
      keyPro: item.keyPro,
      keyRisk: item.keyRisk,
      keyControl: item.keyControl,
      ketentuan: item.ketentuan,
      nameKet: item.nameKet,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/keyControl/${item.id}`,
      data: updateStatus,
    }).then((_res) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to Rejected this',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#68B7FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Reject',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Reject!', 'Succes to Reject.', 'success');
        }
      });
    });
  }
}
@Component({
  selector: 'add-key-control',
  templateUrl: './modals/add-key-control/add-key-control.html',
  styleUrls: ['./modals/add-key-control/style.scss'],
})
export class addKeyControl implements OnInit {
  keyProData: any;
  keyRiskData: any;
  constructor(public dialogRef: MatDialogRef<addKeyControl>) {}

  ngOnInit(): void {
    this.getDataKeyPro();
    this.getDataKeyRisk();
    // this.KantorPusat.ngOnInit()
  }

  cancel() {
    this.dialogRef.close();
  }

  getDataKeyPro() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/keyProcess`,
    }).then((res) => {
      this.keyProData = res.data;
    });
  }

  getDataKeyRisk() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/keyRisk`,
    }).then((res) => {
      this.keyRiskData = res.data;
    });
  }

  unit = new FormControl('');
  group = new FormControl('');
  keyPro = new FormControl('');
  keyRisk = new FormControl('');
  keyControl = new FormControl('');
  ketentuan = new FormControl('');
  nameKet = new FormControl('');

  submit() {
    const valueKeyControl = {
      unit: this.unit.value,
      group: this.group.value,
      keyPro: this.keyPro.value,
      keyRisk: this.keyRisk.value,
      keyControl: this.keyControl.value,
      ketentuan: this.ketentuan.value,
      nameKet: this.nameKet.value,
      status: 'WAITING FOR APPROVAL',
    };

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/keyControl`,
      data: valueKeyControl,
    }).then((_res) => {
      this.dialogRef.close();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'KEY CONTROL has been submitted',
        showConfirmButton: false,
        timer: 1000,
      });
    });
  }
}

@Component({
  selector: 'add-ketentuan',
  templateUrl: './modals/add-ketentuan/add-ketentuan.html',
  styleUrls: ['./modals/add-ketentuan/style.scss'],
})
export class addKetentuan {
  constructor(public dialogRef: MatDialogRef<addKetentuan>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ketentuan has been submitted',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}

// edit key control

@Component({
  selector: 'edit-key-control',
  templateUrl: './modals/edit-key-control/edit-key-control.html',
  styleUrls: ['./modals/edit-key-control/style.scss'],
})
export class EditKeyControl {
  constructor(public dialogRef: MatDialogRef<EditKeyControl>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA edited',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}

// end edit key control

// submit periode pengisian rcsa

@Component({
  selector: 'submit-periode-pengisian-rcsa',
  templateUrl:
    './modals/submit-periode-pengisian-rcsa/submit-periode-pengisian-rcsa.html',
  styleUrls: ['./modals/submit-periode-pengisian-rcsa/style.scss'],
})
export class SubmitPeriodePengisianRcsa {
  dataRCSA: any;

  dateInit: any;

  minStartDate = new Date();
  minEndDate: any;
  checkIsActive: any;
  isActiveCheck: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SubmitPeriodePengisianRcsa>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public Store: Store
  ) {}

  cancel() {
    this.dialogRef.close();
  }
  submitPeriode = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
    year : new FormControl(''),
    quartal : new FormControl(''),
  })


  dateChange() {
    let date = new Date(this.dateInit);
    this.minEndDate = date.setDate(date.getDate() + 1);
  }

  toggleRowKeyProcess(): void {
    this.isActiveCheck = !this.isActiveCheck;
  }

  submit() {
    const rrValueEdit: RiskLibraryPut = {
      tanggal_mulai: this.formatDate(new Date(this.submitPeriode.value.startDate)),
      tanggal_selesai: this.formatDate(new Date(this.submitPeriode.value.endDate)),
      yearOf: parseInt(this.submitPeriode.value.year),
      id: this.data.id,
      quarter: this.submitPeriode.value.quartal,
    };
    this.Store.dispatch(new rcsaSubmitAction(rrValueEdit));
    this.dialogRef.close();
  }
  formatDate(date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
}

// end submit periode pengisian rcsa

// show table

@Component({
  selector: 'show-table',
  templateUrl: './modals/showtable/show-table.html',
  styleUrls: ['./modals/showtable/style.scss'],
})
export class dataTable {
  constructor(public dialogRef: MatDialogRef<dataTable>) {}

  close() {
    this.dialogRef.close();
  }
}

// end show table

// duplicate rcsa

@Component({
  selector: 'duplicate-rcsa',
  templateUrl: './modals/duplicate-rcsa/duplicate-rcsa.html',
  styleUrls: ['./modals/duplicate-rcsa/style.scss'],
})
export class DuplicateRcsa {
  constructor(public dialogRef: MatDialogRef<DuplicateRcsa>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been duplicated',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end duplicate rcsa

// edit key control

@Component({
  selector: 'edit-key-control',
  templateUrl: './modals/edit-key-control/edit-key-control.html',
  styleUrls: ['./modals/edit-key-control/style.scss'],
})
export class KeyControlEdit {
  constructor(public dialogRef: MatDialogRef<EditKeyControl>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Key Control has been submitted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end edit key control

// edit ketentuan

@Component({
  selector: 'edit-ketentuan',
  templateUrl: './modals/edit-ketentuan/edit-ketentuan.html',
  styleUrls: ['./modals/edit-ketentuan/style.scss'],
})
export class EditKetentuan {
  constructor(public dialogRef: MatDialogRef<EditKeyControl>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ketentuan has been submitted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end edit ketentuan

// add let

@Component({
  selector: 'add-let',
  templateUrl: './modals/add-let/add-let.html',
  styleUrls: ['./modals/add-let/style.scss'],
})
export class AddLet {
  constructor(public dialogRef: MatDialogRef<EditKeyControl>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end add let

// edit let

@Component({
  selector: 'edit-let',
  templateUrl: './modals/edit-let/edit-let.html',
  styleUrls: ['./modals/edit-let/style.scss'],
})
export class EditLet {
  constructor(public dialogRef: MatDialogRef<EditKeyControl>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end edit let

// delete key control

@Component({
  selector: 'delete-key-control',
  templateUrl: './modals/delete-key-control/delete-key-control.html',
  styleUrls: ['./modals/delete-key-control/style.scss'],
})
export class DeleteKeyControl {
  constructor(public dialogRef: MatDialogRef<DeleteKeyControl>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end delete key control

// delete ketentuan

@Component({
  selector: 'delete-ketentuan',
  templateUrl: './modals/delete-ketentuan/delete-ketentuan.html',
  styleUrls: ['./modals/delete-ketentuan/style.scss'],
})
export class DeleteKetentuan {
  constructor(public dialogRef: MatDialogRef<DeleteKetentuan>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end delete ketentuan

// delete let

@Component({
  selector: 'delete-let',
  templateUrl: './modals/delete-let/delete-let.html',
  styleUrls: ['./modals/delete-let/style.scss'],
})
export class DeleteLet {
  constructor(public dialogRef: MatDialogRef<DeleteLet>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end delete let

// setting likelihood

@Component({
  selector: 'setting-likelihood',
  templateUrl: './modals/setting-likelihood/setting-likelihood.html',
  styleUrls: ['./modals/setting-likelihood/style.scss'],
})
export class SettingLikelihood {
  constructor(public dialogRef: MatDialogRef<SettingLikelihood>) {}

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end setting likelihood

// setting impact

// end setting impact
