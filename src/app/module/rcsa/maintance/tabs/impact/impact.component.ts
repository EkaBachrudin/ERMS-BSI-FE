import { Component, OnInit, AfterContentInit, Inject, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ImpactFetchStart } from 'src/app/state/store/actions/rcsa/Impact.action';
import { IImpact } from 'src/app/models/rcsa/Impact/Impact.model';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*', display: 'block' })),
    ]),
  ],
})
export class ImpactComponent implements OnInit, AfterContentInit {

  dataSource: any = [];
  displayedColumns: string[] = ['No', 'Rating', 'Score', 'Status']
  displayedColumnsWithExpand: string[] = [...this.displayedColumns, 'expand'];
  expandedElement: IImpact | null;
  opened: boolean = false;
  impactId: any[] = [];
  constructor
    (
      private store: Store<AppState>,
      private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.store.select('impact').pipe(
      map((data: any) => {
        if (data.Impact) {
          this.dataSource = data.Impact;
        }
      })
    ).subscribe()
  }

  ngAfterContentInit(): void {
    this.store.dispatch(
      new ImpactFetchStart(0, 10)
    );
  }

  expand(id: any) {
    let a = document.getElementById(`impact${id}`);
    if (a?.className === 'fa fa-chevron-up collapsed') {
      a.className = 'fa fa-chevron-down';
    } else {
      a!.className = 'fa fa-chevron-up';
    }
  }

  settingImpact(data: any) {
    this.dialog.open(SettingImpact,
      {
        data: data,
      });
  }
}


@Component({
  selector: 'setting-impact',
  templateUrl: '../../modals/setting-impact/setting-impact.html',
  styleUrls: ['../../modals/setting-impact/style.scss'],
})
export class SettingImpact {

  temporarys: any
  constructor
    (
      public dialogRef: MatDialogRef<SettingImpact>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.temporarys = {
      id: data.id,
      Rating: data.Rating,
      Score: data.Score,
      Status: data.Status,
      Detail: {
        Financial: data.Detail.Financial,
        Reputational: data.Detail.Reputational,
        RegulatoryCompliance: data.Detail.RegulatoryCompliance,
        Legal: data.Detail.Legal,
        Staff: data.Detail.Staff,
        Kriminal: data.Detail.Kriminal,
        CustomerService: data.Detail.CustomerService,
        Sequence: data.Detail.Sequence,
      }
    };
    console.log(this.temporarys)
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'success',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
