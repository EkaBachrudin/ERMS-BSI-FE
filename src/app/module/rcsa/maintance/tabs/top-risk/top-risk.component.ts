import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.state';
import { TopRiskFetchStart } from 'src/app/state/store/actions/rcsa/TopRisk.action';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ITopRisk } from 'src/app/models/rcsa/TopRisk/TopRisk.model';
import { MatSort } from '@angular/material/sort';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';

@Component({
  selector: 'app-top-risk',
  templateUrl: './top-risk.component.html',
  styleUrls: ['./top-risk.component.scss']
})
export class TopRiskComponent implements OnInit,AfterContentInit {

  listTopRisk: any = [];
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 0;
  TopRiskPaginationSetting: requestPagination = {
    page: 0,
    size: 10,
  }
  displayedColumns: string[] = ['No','UnitKerja','Regional','Area','Segmen','KeyRisk','ihrr25', 'Ihrr','Control','Composite', 'Periode'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ITopRisk>;
  constructor
    (
      private dialog: MatDialog,
      private store: Store<AppState>
    ) {
    }

  ngOnInit(): void {
    this.store.select('TopRisk').pipe(
      map((data: any) => {
        if(data.TopRisk){
          this.listTopRisk = data.TopRisk
          this.dataSource = new MatTableDataSource(data.TopRisk);
          this.totalElements = data.totalElements;
          this.currentPage = data.currentPage;
          this.pageSize = data.pageSize;
        }
      })
    ).subscribe()
  }

  ngAfterContentInit(): void {
    this.store.dispatch(new TopRiskFetchStart(this.TopRiskPaginationSetting));
    // this.dataSource.paginator = this.paginator;
  }

  onChangePage(event: PageEvent) {
    this.store.dispatch(new TopRiskFetchStart({...this.TopRiskPaginationSetting, page: event.pageIndex, size: event.pageSize}));
  }

}
