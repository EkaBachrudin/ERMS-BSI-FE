import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MaintenanceService } from 'src/app/service/kri/maintenance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kri-maintenance',
  templateUrl: './kri-maintenance.component.html',
  styleUrls: ['./kri-maintenance.component.scss'],
})
export class KriMaintenanceComponent implements OnInit {
  constructor(
    public dialogSubmitKeyIndicator: MatDialog,
    public dialogAddJaringanKri: MatDialog,
    public dialogSubmitAllKri: MatDialog,
    public dialogAddKeyRiskIndicator: MatDialog,
    private maintenance: MaintenanceService,
    public dialogEditKeyRiskIndicator: MatDialog
  ) {}

  kri_maintenance: any;
  role: any;
  SubmitKeyIndicator(parent_id: any, body: any) {
    this.dialogSubmitKeyIndicator.open(SubmitKeyRiskIndicator, {
      data: {
        id: parent_id,
        obj: body,
      },
    });
  }
  addJaringanKri() {
    this.dialogAddJaringanKri.open(AddJaringanKri);
  }
  submitKri() {
    this.dialogSubmitAllKri.open(SubmitAllKri);
  }
  addKeyRiskIndicator(parent_id: any, obj: any) {
    this.dialogAddKeyRiskIndicator.open(AddKeyRiskIndicator, {
      data: {
        id: parent_id,
        obj: obj,
      },
    });
  }
  editKeyRiskIndicator() {
    this.dialogEditKeyRiskIndicator.open(EditKeyRiskIndicator);
  }

  isApproved(parent_id: any, body: any) {
    body.status = 'APPROVED';
    this.maintenance.putKri(parent_id, body);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI divisi has been approved',
      showConfirmButton: false,
      timer: 1000,
    });

    setTimeout(function () {}, 1000);
  }

  isReject(parent_id: any, body: any) {
    body.status = 'REJECTED';
    this.maintenance.putKri(parent_id, body);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'KRI divisi has been rejected',
      showConfirmButton: false,
      timer: 1000,
    });

    setTimeout(function () {}, 1000);
  }

  ngOnInit(): void {
    this.kri_maintenance = this.maintenance.getKri();
    this.role = localStorage.getItem('role');
  }
}

// submit key risk indicator

@Component({
  selector: 'submit-key-risk-indicator',
  templateUrl:
    './modals/submit-key-risk-indicator/submit-key-risk-indicator.html',
  styleUrls: ['./modals/submit-key-risk-indicator/style.scss'],
})
export class SubmitKeyRiskIndicator {
  constructor(
    public dialogRef: MatDialogRef<SubmitKeyRiskIndicator>,
    private maintenance: MaintenanceService,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  start_date = new FormControl('');
  end_date = new FormControl('');
  periode = new FormControl('');
  tahun = new FormControl('');

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    const sd = this.start_date.value?.split('-');
    const ed = this.end_date.value?.split('-');
    console.log(sd?.join('/'));
    this._data.obj.tanggal_mulai = sd?.join('/');
    this._data.obj.tanggal_akhir = ed?.join('/');
    this._data.obj.periode = this.periode.value;
    this._data.obj.tahun = this.tahun.value;
    this._data.obj.status = 'WAITING FOR APPROVE';

    this.maintenance.putKri(this._data.id, this._data.obj);

    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI has been submitted',
      showConfirmButton: false,
      timer: 1000,
    });

    setTimeout(function () {}, 2000);
  }
}

// end submit key risk indicator

// add jaringan kri

@Component({
  selector: 'add-jaringan-kri',
  templateUrl: './modals/add-jaringan-kri/add-jaringan-kri.html',
})
export class AddJaringanKri {
  constructor(
    public dialogRef: MatDialogRef<AddJaringanKri>,
    private maintenance: MaintenanceService
  ) {}

  unit = new FormControl('');
  jaringan = new FormControl('');

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    const data_kri = {
      kri: this.unit.value,
      jaringan_group: this.jaringan.value,
      periode: '-',
      tahun: '-',
      tanggal_mulai: '-',
      tanggal_akhir: '-',
      status_group_head: 'WAITING FOR APPROVE',
      status_dcor_head: 'WAITING FOR CHECK',
      status_dept_head: 'NOT SUBMITTED',
      status: 'DRAFTED',
      child_kri: [],
    };

    this.maintenance.postKri(data_kri);

    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI divisi has been added',
      showConfirmButton: false,
      timer: 1000,
    });

    setTimeout(function () {}, 1000);
  }
}

// end add jaringan kri

// submit all kri

@Component({
  selector: 'submit-all-kri',
  templateUrl: './modals/submit-all-kri/submit-all-kri.html',
  styleUrls: ['./modals/submit-all-kri/style.scss'],
})
export class SubmitAllKri {
  constructor(public dialogRef: MatDialogRef<SubmitAllKri>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI divisi has been added',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
// end submit all kri

// add key risk indicator

@Component({
  selector: 'add-key-risk-indicator',
  templateUrl: './modals/add-key-risk-indicator/add-key-risk-indicator.html',
  styleUrls: ['./modals/add-key-risk-indicator/style.scss'],
})
export class AddKeyRiskIndicator {
  constructor(
    public dialogRef: MatDialogRef<AddKeyRiskIndicator>,
    private maintenance: MaintenanceService,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  kri = new FormControl('');
  jenis_kri = new FormControl('');

  ukuran_1 = new FormControl('');
  ukuran_2 = new FormControl('');
  operation_variable = new FormControl('');

  jenis_green = new FormControl('');
  nilai_green = new FormControl('');
  simbol_green = new FormControl('');

  jenis_yellow_1 = new FormControl('');
  nilai_yellow_1 = new FormControl('');
  simbol_yellow_1 = new FormControl('');

  jenis_yellow_2 = new FormControl('');
  nilai_yellow_2 = new FormControl('');
  simbol_yellow_2 = new FormControl('');

  jenis_red = new FormControl('');
  nilai_red = new FormControl('');
  simbol_red = new FormControl('');

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    const id = 0;

    const child_kri = {
      id: id,
      kri: this.kri.value,
      ukuran: [
        {
          id_ukuran: 1,
          nilai: 0,
          desc: this.ukuran_1.value,
        },
        {
          id_ukuran: 2,
          nilai: 0,
          desc: this.ukuran_2.value,
        },
      ],
      operation_variable: this.operation_variable.value,
      jenis_kri: this.jenis_kri.value,
      nilai: 0,
      keterangan_data: '',
      treshold: [
        {
          color: 'green',
          jenis: this.jenis_green.value,
          nilai: this.nilai_green.value,
          simbol: this.simbol_green.value,
        },
        {
          color: 'yellow',
          min: {
            jenis: this.jenis_yellow_1.value,
            nilai: this.nilai_yellow_1.value,
            simbol: this.simbol_yellow_1.value,
          },
          max: {
            jenis: this.jenis_yellow_2.value,
            nilai: this.nilai_yellow_2.value,
            simbol: this.simbol_yellow_2.value,
          },
        },
        {
          color: 'red',
          jenis: this.jenis_red.value,
          nilai: this.nilai_red.value,
          simbol: this.simbol_red.value,
        },
      ],
    };

    child_kri.id = this._data.obj.child_kri.length + 1;
    this._data.obj.child_kri.push(child_kri);
    this.maintenance.putKri(this._data.id, this._data.obj);
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI divisi has been added',
      showConfirmButton: false,
      timer: 1000,
    });

    setTimeout(function () {}, 1000);
  }
}

// end add key risk indicator

// edit key risk indicator

@Component({
  selector: 'edit-key-risk-indicator',
  templateUrl: './modals/edit-key-risk-indicator/edit-key-risk-indicator.html',
  styleUrls: ['./modals/edit-key-risk-indicator/style.scss'],
})
export class EditKeyRiskIndicator {
  constructor(public dialogRef: MatDialogRef<EditKeyRiskIndicator>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI divisi has been added',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end key risk indicator
