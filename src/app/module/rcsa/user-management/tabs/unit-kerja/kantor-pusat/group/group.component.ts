import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AddGroup } from 'src/app/component/rcsa/userManagement/add-group.component';
import { EditGroup } from 'src/app/component/rcsa/userManagement/edit-group.component';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
import { AppState } from 'src/app/state/app.state';
import { groupFetchStart } from 'src/app/state/store/actions/rcsa/group.action';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  groupPaginationSetting: requestPaginationByID = {
    id: '',
    page: 0,
    size: 10,
  }
  totalElement: number;
  totalPage: number;
  currentPage: number;
  pageSize: number;
  constructor(
    public dialogGroup: MatDialog,
    public editdialogGroup: MatDialog,
    public Store: Store<AppState>
  ) { }
  searchText: string;

  isApprover = localStorage.getItem('role') === 'spv';

  rowsGroup: any = [];

  ngOnInit(): void {
    this.Store.select('group')
      .pipe(
        map((data: any) => {
          if (data.group) {
            this.totalElement = data.totalElements
            this.totalPage = data.totalPage
            this.currentPage = data.currentPage
            this.pageSize = data.pageSize
            this.rowsGroup = data.group;
          }
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new groupFetchStart(0, 10));
  }

  onPageChange(event: any) {
    this.Store.dispatch(new groupFetchStart(event.pageIndex, event.pageSize))
  }

  groupdialog() {
    this.dialogGroup.open(AddGroup);
  }
  editgroup(item: any) {
    this.editdialogGroup.open(EditGroup, {
      data: {
        item,
      },
    });
  }
  deleteGroup(item: any) { }

  approve(row: any, status: any) {
    row.review = status;
  }
}
