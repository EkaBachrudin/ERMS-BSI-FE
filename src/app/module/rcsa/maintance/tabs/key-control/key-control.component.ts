import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { keyControlFetchStart } from 'src/app/state/store/actions/rcsa/keyControl.action';
import { removeNumberFormat } from 'src/app/utils/helpers';

@Component({
  selector: 'app-key-control',
  templateUrl: './key-control.component.html',
  styleUrls: ['./key-control.component.scss'],
})
export class KeyControlComponent implements OnInit {
  constructor(
    public dialogKeyControl: MatDialog,
    private store: Store<AppState>
  ) {}

  searchText: string;
  totalPages: number;
  pageSize: number;
  currentPage: number;

  keyControlData: any;

  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  removeNumber = removeNumberFormat

  getAllDataJaringan() {
    this.store.dispatch(new keyControlFetchStart(0, 10));
  }

  ngOnInit(): void {
    this.store
      .select('keyControl')
      .pipe(
        map((KeyControlData: any) => {
          this.currentPage = KeyControlData.currentPage;
          this.pageSize = KeyControlData.pageSize;
          this.totalPages = KeyControlData.totalPages;
          this.keyControlData = KeyControlData.keyControl;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.store.dispatch(new keyControlFetchStart(0, 10));
  }

  onPaginateChange(event: any) {
    this.store.dispatch(new keyControlFetchStart(event.pageIndex, event.pageSize))
  }
}
