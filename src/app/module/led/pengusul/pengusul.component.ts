import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import axios from 'axios';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-pengusul',
  templateUrl: './pengusul.component.html',
  styleUrls: ['./pengusul.component.scss'],
})
export class PengusulComponent implements OnInit {
  formulir = false;
  ledData: any;
  idLedData: any;
  nominalKerugian: any;
  nominalHukum: any;
  recoveryAwal: any;
  recovData: any;
  totalRecov: number = 0;
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  constructor(
    public AddLed: MatDialog,
    public uploadLed: MatDialog,
    public openRecovery: MatDialog,
    public dialogEditLed: MatDialog
  ) {}

  openFormulir() {
    this.formulir = true;
  }
  closeFormulir() {
    this.formulir = false;
  }
  download() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED Berhasil di download',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  openFormLed() {
    this.AddLed.open(AddLed);
  }
  uploadDocument() {
    this.uploadLed.open(Upload);
  }
  openAddRecovery() {
    this.openRecovery.open(AddRecovery);
  }
  editLed() {
    this.dialogEditLed.open(EditLed);
  }
  ngOnInit(): void {
    this.getLed();
    this.getRecovery();
  }

  toRupiah(value: number) {
    const format = value.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp ' + convert?.join('.').split('').reverse().join('');

    return rupiah;
  }

  getLed() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/led?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.ledData = res.data;
    });
  }

  getRecovery() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/recovery?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.recovData = res.data;
      res.data.forEach((el: any) => {
        this.totalRecov += el.recoveryAdd;
      });
      // console.log(this.totalRecov);
    });
  }

  getIdLed(item: any) {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/led/${item.id}`,
    }).then((res) => {
      // console.log(res.data.id, '<<<<<');
      this.idLedData = res.data.id;
      this.nominalKerugian = res.data.totalLoss;
      this.nominalHukum = res.data.legalObligation;
      this.recoveryAwal = res.data.totalRecovery;
    });
  }
}
@Component({
  selector: 'add-led.html',
  templateUrl: './modals/addled/add-led.html',
  styleUrls: ['./modals/addled/style.scss'],
})
export class AddLed implements OnInit {
  testing = true;
  causeData: any;
  netLossData: any;
  riskIssueData: any;
  letData: any;
  finImpData: any;
  nonFinImpData: any;
  randomSerial: string = '';
  randomNumber: any;
  constructor(public dialogRef: MatDialogRef<AddLed>) {}

  ngOnInit(): void {
    this.getCause();
    this.getRiskIssue();
    this.getLet();
    this.getFinImpact();
    this.getNonFinImp();
    this.getRandom();
  }

  getCause() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/cause?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.causeData = res.data;
    });
  }

  getRiskIssue() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/riskIssue?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.riskIssueData = res.data;
    });
  }

  getLet() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/let?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.letData = res.data;
    });
  }

  getFinImpact() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/dampakFin?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.finImpData = res.data;
    });
  }

  getNonFinImp() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/dampakNonFin?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.nonFinImpData = res.data;
    });
  }

  getRandom() {
    const chars =
      '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const serialLength = 10;
    let i: any;

    for (i = 0; i < serialLength; i++) {
      this.randomNumber = Math.floor(Math.random() * chars.length);

      this.randomSerial += chars.substring(
        this.randomNumber,
        this.randomNumber + 1
      );
    }

    // console.log(this.randomSerial);
  }

  kerugian = new FormControl('');
  recovery = new FormControl('');
  level1 = new FormControl('');
  level2 = new FormControl('');
  unit = new FormControl('');
  category = new FormControl('');
  riskIssue = new FormControl('');
  let1 = new FormControl('');
  finImpact = new FormControl('');
  nonFinImpact = new FormControl('');
  totalLoss = new FormControl();
  legalObligation = new FormControl('');
  descriptionObli = new FormControl('');
  totalRecovery = new FormControl();
  netLoss = new FormControl();
  firstDateEvent = new FormControl('');
  dateDetected = new FormControl('');
  cause = new FormControl('');
  spesificCause = new FormControl('');
  descriptionEvent = new FormControl('');

  getNetLoss() {
    this.netLossData = this.totalLoss.value - this.totalRecovery.value;
    // console.log(this.netLossData);
  }

  changePages() {
    const ledValue = {
      kerugian: this.kerugian.value,
      recovery: this.recovery.value,
      level1: this.level1.value,
      level2: this.level2.value,
      unit: this.unit.value,
      category: this.category.value,
      riskIssue: this.riskIssue.value,
      let1: this.let1.value,
      finImpact: this.finImpact.value,
      nonFinImpact: this.nonFinImpact.value,
      totalLoss: this.totalLoss.value,
      legalObligation: this.legalObligation.value,
      descriptionObli: this.descriptionObli.value,
      totalRecovery: this.totalRecovery.value,
      netLoss: this.netLossData,
      firstDateEvent: this.firstDateEvent.value,
      dateDetected: this.dateDetected.value,
      cause: this.cause.value,
      spesificCause: this.spesificCause.value,
      descriptionEvent: this.descriptionEvent.value,
      agreement: 'ONLINE',
      status1: 'WAITING FOR APPROVAL',
      status2: 'WAITING FOR APPROVAL',
      statusPembukuan: 'WAITING FOR APPROVAL',
      tglPembukuan: '',
      noReg: this.randomSerial,
    };

    if (this.testing === false) {
      // console.log(ledValue);

      axios({
        method: 'POST',
        url: `${environment.apiUrl}/led`,
        data: ledValue,
      }).then((res) => {
        // console.log(res.data, '<<<<<');
        this.dialogRef.close();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'LED has been submitted',
          showConfirmButton: false,
          timer: 2000,
        });
      });
    } else {
      this.testing = false;
    }
  }
  cancelAdd() {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'upload-led',
  templateUrl: './modals/uploadLed/upload-led.html',
  styleUrls: ['./modals/uploadLed/style.scss'],
})
export class Upload {
  constructor(public dialogRef: MatDialogRef<Upload>) {}

  cancel() {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED has been submitted',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
@Component({
  selector: 'add-recovery',
  templateUrl: './modals/addrecovery/add-recovery.html',
  styleUrls: ['./modals/addrecovery/style.scss'],
})
export class AddRecovery implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddRecovery>) {}

  ngOnInit(): void {}

  recoveryAdd = new FormControl();
  sumber = new FormControl('');

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    const recoveryValue = {
      recoveryAdd: +this.recoveryAdd.value,
      sumber: this.sumber.value,
      tglBukuRecovery: '',
    };

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/recovery`,
      data: recoveryValue,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.dialogRef.close();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Recovery has been submitted',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}

// edit led

@Component({
  selector: 'edit-led',
  templateUrl: './modals/editled/edit-led.html',
  styleUrls: ['./modals/editled/style.scss'],
})
export class EditLed {
  constructor(public dialogRef: MatDialogRef<EditLed>) {}
  testing = true;

  changePages() {
    if (this.testing === false) {
      this.dialogRef.close();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'LED has been submitted',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.testing = false;
    }
  }
  cancelAdd() {
    this.dialogRef.close();
  }
}

// end edit led
