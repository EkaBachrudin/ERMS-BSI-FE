import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { map, Subject } from 'rxjs';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
import { AppState } from 'src/app/state/app.state';
import { departmentFetchStart } from 'src/app/state/store/actions/rcsa/department.action';

@Component({
  selector: 'app-user-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class UserDepartmentComponent implements OnInit {
  @Output() onDepartmentChange = new EventEmitter<any>();
  totalElement: number;
  totalPage: number;
  currentPage: number;
  pageSize: number;
  constructor(private Store: Store<AppState>) { }
  rowsDepartment: any = [];
  searchText: any
  ngOnInit(): void {
    this.Store.select('department')
      .pipe(
        map((data: any) => {
          if (data.department) {
            this.totalElement = data.totalElements
            this.totalPage = data.totalPage
            this.currentPage = data.currentPage
            this.pageSize = data.pageSize
            this.rowsDepartment = data.department;
          }
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new departmentFetchStart(0, 10));
  }

  onPageChange(event: any) {
    this.Store.dispatch(new departmentFetchStart(event.pageIndex, event.pageSize))
  }
}
