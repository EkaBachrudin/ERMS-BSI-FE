import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { ketentuanFetchStart } from 'src/app/state/store/actions/rcsa/ketentuan.action';
import { addKetentuan } from '../../maintance.component';

@Component({
  selector: 'app-ketentuan',
  templateUrl: './ketentuan.component.html',
  styleUrls: ['./ketentuan.component.scss'],
})
export class KetentuanComponent implements OnInit {
  constructor(
    public dialogKetentuan: MatDialog,
    private store: Store<AppState>
  ) {}
  searchText: string;
  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';

  ketentuanData: any;

  ketentuan() {
    this.dialogKetentuan.open(addKetentuan);
    // console.log(this.ketentuanData);
  }

  getAllData() {
    this.store.dispatch(new ketentuanFetchStart(0, 10));
  }

  ngOnInit(): void {
    this.store
      .select('ketentuan')
      .pipe(
        map((ketentuanData: any) => {
          this.ketentuanData = ketentuanData.ketentuan;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.store.dispatch(new ketentuanFetchStart(0, 10));
  }
}
