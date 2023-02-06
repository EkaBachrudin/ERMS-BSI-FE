import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { segmenFetchStart } from 'src/app/state/store/actions/rcsa/segmen.action';

@Component({
  selector: 'app-user-segmen',
  templateUrl: './user-segmen.component.html',
  styleUrls: ['./user-segmen.component.scss'],
})
export class UserSegmenComponent implements OnInit {
  constructor(private Store: Store<AppState>) {}

  data: any
  ngOnInit(): void {
    this.Store.select('segmen')
      .pipe(
        map((SegmenData: any) => {
          this.data = SegmenData.segmen;
        })
      )
      .subscribe();
      console.log(this.data)
  }
  ngAfterContentInit() {
    this.Store.dispatch(new segmenFetchStart());
  }
}
