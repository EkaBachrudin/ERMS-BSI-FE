import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import axios from 'axios';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { keyRiskFetchStart } from 'src/app/state/store/actions/rcsa/keyRisk.action';
import {
  DeleteKeyRisk,
  EditKeyRisk,
} from '../kantor-pusat-key-risk/kantor-pusat-key-risk.component';

@Component({
  selector: 'app-jaringan-key-risk',
  templateUrl: './jaringan-key-risk.component.html',
  styleUrls: ['./jaringan-key-risk.component.scss'],
})
export class JaringanKeyRiskComponent implements OnInit {
  keyRisk: any;
  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  constructor(private Store: Store<AppState>) {}

  getAllData() {
    this.Store.dispatch(new keyRiskFetchStart(0, 10));
  }

  ngOnInit(): void {
    this.Store.select('keyRisk')
      .pipe(
        map((keyRisk: any) => {
          this.keyRisk = keyRisk.keyRisk;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new keyRiskFetchStart(0, 10));
  }
}
