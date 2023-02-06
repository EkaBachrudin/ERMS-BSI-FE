import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AddDirektorate } from 'src/app/component/rcsa/userManagement/add-directorate.component';
import { EditDirektorate } from 'src/app/component/rcsa/userManagement/edit-directorat.component';
import { AppState } from 'src/app/state/app.state';
import { directorateFetchStart } from 'src/app/state/store/actions/rcsa/directorate.action';
import { DirectorateFilterInterface } from '../../../../types/directorate.interface';

@Component({
  selector: 'app-directorate',
  templateUrl: './directorate.component.html',
  styleUrls: ['./directorate.component.css'],
})
export class DirectorateComponent implements OnInit, AfterContentInit {

  directoratePaginationSetting: DirectorateFilterInterface = {
    id: '',
    page: 0,
    size: 5,
  }
  totalElement: number;
  totalPage: number;
  currentPage: number;
  pageSize: number;
  constructor(
    public editdialogDirektorate: MatDialog,
    public dialogDirektorate: MatDialog,
    public Store: Store<AppState>
  ) {}

  isApprover = localStorage.getItem('role') === 'spv';
  searchText: string;
  rows: any = [];

  ngOnInit(): void {
    this.Store.select('directorate')
      .pipe(
        map((data: any) => {
          if (data.directorate) {
            this.totalElement = data.totalElements
            this.totalPage = data.totalPage
            this.currentPage = data.currentPage
            this.pageSize = data.pageSize
            this.rows = data.directorate;
          }
        })
      )
      .subscribe();
  }

  direktorat() {
    this.dialogDirektorate.open(AddDirektorate);
  }
  editdirektorat(row: any) {
    this.editdialogDirektorate.open(EditDirektorate, {
      data: {
        row,
      },
    });
  }
  deleteDirektorat(row: any) {}

  approve(row: any, status: any) {
    row.review = status;
  }

  ngAfterContentInit() {
    this.Store.dispatch(new directorateFetchStart(0, 10));
  }

  onPageChange(event) {
    this.Store.dispatch(new directorateFetchStart(event.pageIndex, event.pageSize))
  }
}
