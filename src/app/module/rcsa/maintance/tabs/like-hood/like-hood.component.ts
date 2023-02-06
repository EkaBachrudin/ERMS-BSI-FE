import { Component, OnInit,AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs/operators';
import { LikeHoodFetchStart } from 'src/app/state/store/actions/rcsa/LikeHood.action';
import { ILikeHood } from 'src/app/models/rcsa/LikeHood/LikeHood';
import { MatTableDataSource } from '@angular/material/table';
import { LikeHoodService } from './services/like-hood.service';

@Component({
  selector: 'app-like-hood',
  templateUrl: './like-hood.component.html',
  styleUrls: ['./like-hood.component.scss']
})
export class LikeHoodComponent implements OnInit,AfterContentInit {

  dataSource: MatTableDataSource<ILikeHood>;

  displayedColumns: string[] = ['id', 'Score', 'PeriodeKejadian', 'Status'];
  constructor
  (
    private Store: Store<AppState>,
    private LikeHoodService:LikeHoodService 
  ) { }

  SettingLikeHood: any;
  ListSettingLikeHood: any;

  GetSettingLikeHood(): any {
    this.Store.select('LikeHood')
    .pipe(
      map(
        (LikeHoodData: any) => {
          if(LikeHoodData.LikeHood){
            this.dataSource = new MatTableDataSource(LikeHoodData.LikeHood);
          }
        }
      ))
      .subscribe();
  }

  ngOnInit(): void {
    this.GetSettingLikeHood();
   
  }

  ngAfterContentInit(): void {
    this.Store.dispatch(new LikeHoodFetchStart(0,10));
  }

}
