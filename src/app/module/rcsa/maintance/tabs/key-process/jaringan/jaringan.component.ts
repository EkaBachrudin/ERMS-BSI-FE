import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map, pipe } from 'rxjs';

import { keyProcessJaringanFetchStart } from 'src/app/state/store/actions/rcsa/keyProcessJaringan.action';

@Component({
  selector: 'keypro-jaringan',
  templateUrl: './jaringan.component.html',
  styleUrls: ['./jaringan.component.scss'],
})
export class JaringanComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  keyProJaringan: any = [];

  getAllDataJaringan() {
    this.store.dispatch(new keyProcessJaringanFetchStart());
  }

  ngOnInit(): void {
    this.store
      .select('keyProcessJaringan')
      .pipe(
        map((KeyProcessJaringanData: any) => {
          this.keyProJaringan = KeyProcessJaringanData.keyProcessJaringan;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.store.dispatch(new keyProcessJaringanFetchStart());
  }
}
