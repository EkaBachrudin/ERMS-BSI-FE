import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { letFetchStart } from 'src/app/state/store/actions/rcsa/let.action';
import { AddLet, DeleteLet, EditLet } from '../../maintance.component';

@Component({
  selector: 'app-let',
  templateUrl: './let.component.html',
  styleUrls: ['./let.component.scss'],
})
export class LetComponent implements OnInit {
  constructor(
    public dialogAddLet: MatDialog,
    public dialogEditLet: MatDialog,
    public dialogDeleteLet: MatDialog,
    private Store: Store<AppState>
  ) {}
  letList: any;
  searchText: string;
  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  totalElement: number;
  totalPage: number;
  currentPage: number;
  pageSize: number;

  // Tab Let
  ngOnInit(): void {
    this.Store.select('let')
      .pipe(
        map((data: any) => {
          this.totalElement = data.totalElements
          this.totalPage = data.totalPage
          this.currentPage = data.currentPage
          this.pageSize = data.pageSize
          this.letList = data.let;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new letFetchStart(0, 10));
  }
  // End Tab Let

  addLet() {
    this.dialogAddLet.open(AddLet);
  }

  editLet() {
    this.dialogEditLet.open(EditLet);
  }

  deleteLet() {
    this.dialogDeleteLet.open(DeleteLet);
  }

  onPageChange(event) {
    this.Store.dispatch(new letFetchStart(event.pageIndex, event.pageSize))
  }
}
