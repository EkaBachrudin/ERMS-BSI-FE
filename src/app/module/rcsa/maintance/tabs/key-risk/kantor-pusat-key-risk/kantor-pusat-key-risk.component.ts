import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import axios from 'axios';
import { AppState } from 'src/app/state/app.state';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../../environments/environment';
import { map } from 'rxjs';
import { keyRiskFetchStart } from 'src/app/state/store/actions/rcsa/keyRisk.action';
import { addKeyRisk } from 'src/app/shared/components/class/rcsa/maintenance/key-risk/kantor-pusat/addKeyRiskKantorPusat';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-kantor-pusat-key-risk',
  templateUrl: './kantor-pusat-key-risk.component.html',
  styleUrls: ['./kantor-pusat-key-risk.component.scss'],
})
export class KantorPusatKeyRiskComponent implements OnInit {
  keyRisk: any;
  dataKeyPro: any;
  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  searchText: string;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  constructor(
    public dialogAddKeyRisk: MatDialog,
    public KeyRisk: MatDialog,
    public dialogDeleteKeyRisk: MatDialog,
    private Store: Store<AppState>
  ) {}

  // modals

  openAddKeyRisk() {
    this.dialogAddKeyRisk.open(addKeyRisk);
  }

  edit() {
    this.KeyRisk.open(EditKeyRisk);
  }
  deleteKeyRisk() {
    this.dialogDeleteKeyRisk.open(DeleteKeyRisk);
  }

  // end modals
  getAllData() {
    this.Store.dispatch(new keyRiskFetchStart(0, 10));
  }

  ngOnInit(): void {
    this.Store.select('keyRisk')
      .pipe(
        map((keyRisk: any) => {
          if(keyRisk.keyRisk) {
            this.pageSize = keyRisk.pageSize;
            this.currentPage = keyRisk.currentPage;
            this.totalPages = keyRisk.totalPages;
            this.keyRisk = keyRisk.keyRisk;
          }
        })
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.Store.dispatch(new keyRiskFetchStart(0, 10));
  }

  onPaginateChange(event: any) {
    this.Store.dispatch(new keyRiskFetchStart(event.pageIndex, event.pageSize))
  }

  toApprove(item: any) {
    const updateStatus = {
      unit: item.unit,
      group: item.group,
      keyPro: item.keyPro,
      keyRisk: item.keyRisk,
      let1: item.let1,
      let2: item.let2,
      let3: item.let3,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/keyRisk/${item.id}`,
      data: updateStatus,
    }).then((res) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to Approve this',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#68B7FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Approve',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Approve!', 'Succes to Approve.', 'success');
        }
      });
    });
  }

  toReject(item: any) {
    const updateStatus = {
      unit: item.unit,
      group: item.group,
      keyPro: item.keyPro,
      keyRisk: item.keyRisk,
      let1: item.let1,
      let2: item.let2,
      let3: item.let3,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/keyRisk/${item.id}`,
      data: updateStatus,
    }).then((res) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to Rejected this',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#68B7FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Reject',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Reject!', 'Succes to Reject.', 'success');
        }
      });
    });
  }
}

// edit key risk

@Component({
  selector: 'edit-key-risk',
  templateUrl: '../../../modals/edit-key-risk/edit-key-risk.html',
  styleUrls: ['../../../modals/edit-key-risk/style.scss'],
})
export class EditKeyRisk {
  constructor(public dialogRef: MatDialogRef<EditKeyRisk>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KEY Risk been submitted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end edit key risk

// delete key risk

@Component({
  selector: 'delete-key-risk',
  templateUrl: '../../../modals/delete-key-risk/delete-key-risk.html',
  styleUrls: ['../../../modals/delete-key-risk/style.scss'],
})
export class DeleteKeyRisk {
  constructor(public dialogRef: MatDialogRef<DeleteKeyRisk>) {}

  cancel() {
    this.dialogRef.close();
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

// end delete key risk
