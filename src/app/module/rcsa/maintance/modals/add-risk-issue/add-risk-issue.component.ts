import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import axios from 'axios';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { keyProcessJaringanFetchStart } from 'src/app/state/store/actions/rcsa/keyProcessJaringan.action';
import { keyProcessKantorPusatFetchStart } from 'src/app/state/store/actions/rcsa/keyProcessKantorPusat.action';
import { riskLibraryFetchStart } from 'src/app/state/store/actions/rcsa/riskLibrary.action';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'add-risk-issue',
  templateUrl: './add-risk-issue.html',
  styleUrls: ['./style.scss'],
})
export class AddRiskIssue implements OnInit {
  dataRCSA: any;
  dataKeyPro: any;
  dataKeyRisk: any;
  dataLET1: any;
  dataLET2: any;
  dataKeyCont: any;
  keyContMap: any;
  dataKet: any;
  dataNameKet: any;
  ketDesc: any;
  constructor(
    public dialogRef: MatDialogRef<AddRiskIssue>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.Store.select('riskLibrary')
      .pipe(
        map((riskLibrary: any) => {
          this.dataRCSA = riskLibrary.riskLibrary.find(
            (obj) => obj.id === this.data.id
          );
        })
      )
      .subscribe();

    if (this.dataRCSA.unit == 'Jaringan') {
      this.Store.select('keyProcessJaringan')
        .pipe(
          map((keyProcessJaringanData: any) => {
            this.dataKeyPro = keyProcessJaringanData.keyProcessJaringan;
          })
        )
        .subscribe();
    } else if (this.dataRCSA.unit == 'Kantor Pusat') {
      this.Store.select('keyProcessKantorPusat')
        .pipe(
          map((keyProcessKantorPusatData: any) => {
            this.dataKeyPro = keyProcessKantorPusatData.keyProcessKantorPusat;
          })
        )
        .subscribe();
    }

    this.Store.select('keyRisk')
      .pipe(
        map((keyRiskData: any) => {
          this.dataKeyRisk = keyRiskData.keyRisk;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    // this.Store.dispatch(new riskLibraryFetchStart());
    this.Store.dispatch(new keyProcessJaringanFetchStart());
    this.Store.dispatch(new keyProcessKantorPusatFetchStart(0, 10));
  }

  keyProKeyRiskSelect = false;

  keyRiskSelected = false;
  onSelectedkeyRisk(value: string): void {
    this.keyRiskSelected = true;
    let data = this.dataKeyRisk.find((obj) => obj.keyRisk === value);
    this.dataLET1 = data.lostEventType;
    this.dataLET2 = this.dataLET1[0].let2;
    this.dataKeyCont = data.keyControl;
    this.keyRiskSelected && this.keyProSelected
      ? (this.keyProKeyRiskSelect = true)
      : (this.keyProKeyRiskSelect = false);
    var array = [];
    this.dataKeyCont.map(function (val: any) {
      val.ketentuan.forEach((element) => {
        array.push(element);
      });
    });
    this.dataKet = array;
  }

  keyProSelected = false;
  onSelectedkeyPro(_value: string): void {
    this.keyProSelected = true;
    this.keyRiskSelected && this.keyProSelected
      ? (this.keyProKeyRiskSelect = true)
      : (this.keyProKeyRiskSelect = false);
  }

  // ngOnInit(): void {
  //   this.getDataRCSA();
  //   this.getDataKeyPro();
  //   this.getDataKeyRisk();
  // }

  // getDataRCSA() {
  //   axios({
  //     method: 'GET',
  //     url: `${environment.apiUrl}/rcsa/${this.data.id}`,
  //   }).then((res) => {
  //     // console.log(res.data);

  //     this.dataRCSA = res.data;
  //   });
  // }

  // getDataKeyPro() {
  //   axios({
  //     method: 'GET',
  //     url: `${environment.apiUrl}/keyProcess`,
  //   }).then((res) => {
  //     // console.log(res.data);

  //     this.dataKeyPro = res.data;
  //   });
  // }

  // getDataKeyRisk() {
  //   axios({
  //     method: 'GET',
  //     url: `${environment.apiUrl}/keyRisk`,
  //   }).then((res) => {
  //     // console.log(res.data);

  //     this.dataKeyRisk = res.data;
  //   });
  // }

  cancel() {
    this.dialogRef.close();
  }

  keyPro = new FormControl('');
  keyRisk = new FormControl('');

  // getLET1() {
  //   axios({
  //     method: 'GET',
  //     url: `${environment.apiUrl}/keyRisk`,
  //   }).then((res) => {
  //     // console.log(res.data);

  //     // this.dataKeyRisk = res.data;
  //     res.data.forEach((e: any) => {
  //       if (e.keyRisk === this.keyRisk.value) {
  //         this.dataLET1 = e.let1;
  //         this.dataLET2 = e.let2;
  //         this.dataKeyCont = e.keyPro;
  //       }
  //     });
  //   });

  //   axios({
  //     method: 'GET',
  //     url: `${environment.apiUrl}/keyControl`,
  //   }).then((res) => {
  //     res.data.forEach((e: any) => {
  //       if (e.keyRisk === this.keyRisk.value) {
  //         this.keyContMap = e.keyControl;
  //         this.dataKet = e.ketentuan;
  //         this.dataNameKet = e.nameKet;
  //       }
  //     });
  //   });
  // }

  submit() {
    const rrValueEdit = {
      unit: this.dataRCSA.unit,
      group: this.dataRCSA.group,
      startDate: this.dataRCSA.startDate,
      endDate: this.dataRCSA.endDate,
      year: this.dataRCSA.year,
      quartal: this.dataRCSA.quartal,
      riskLibrary: [
        {
          keyPro: this.keyPro.value,
          keyRisk: this.keyRisk.value,
          let1: this.dataLET1,
          let2: this.dataLET2,
          keyControl: this.dataKeyCont,
          ketentuan: this.dataKet,
          nameKet: this.dataNameKet,
        },
      ],
      status: this.dataRCSA.status,
    };
  }
}
