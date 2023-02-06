import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { settingTopRiskFetchStart } from 'src/app/state/store/actions/rcsa/settingTopRisk.action';

@Component({
  selector: 'app-setting-top-risk',
  templateUrl: './setting-top-risk.component.html',
  styleUrls: ['./setting-top-risk.component.scss'],
})
export class SettingTopRiskComponent implements OnInit {
  constructor(private Store: Store<AppState>) {}

  dataList: any;

  ngOnInit(): void {
    this.Store.select('settingTopRisk')
      .pipe(
        map((dataList: any) => {
          this.dataList = dataList.settingTopRisk;
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new settingTopRiskFetchStart());
  }
}
