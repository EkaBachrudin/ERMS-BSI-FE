import { OnInit, Injectable, Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from '../../../../../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { keyProcessKantorPusatFetchStart } from 'src/app/state/store/actions/rcsa/keyProcessKantorPusat.action';
import { map } from 'rxjs';

import { addKeyProcess } from '../../../../../../component/rcsa/maintance/addKeyProcess.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'keypro-kantor-pusat',
  templateUrl: './kantor-pusat.component.html',
  styleUrls: ['./kantor-pusat.component.scss'],
})
export class KantorPusatComponent implements OnInit {
  keyPro: any = [];
  isApprover = localStorage.getItem('role') === 'admin_approve';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  searchText: any
  totalPages: number;
  currentPage: number;
  pageSize: number;
  constructor(
    public dialogKeyProcess: MatDialog,
    public dialogEdit: MatDialog,
    public dialogDeleteKeyProcess: MatDialog,
    private Store: Store<AppState>
  ) { }

  keyProcess() {
    this.dialogKeyProcess.open(addKeyProcess);
  }

  getAllData() {
    this.Store.dispatch(new keyProcessKantorPusatFetchStart(0, 10));
  }

  ngOnInit() {
    this.Store.select('keyProcessKantorPusat')
      .pipe(
        map((KeyProcessData: any) => {
          if (KeyProcessData.keyProcess) {
            this.pageSize = KeyProcessData.pageSize;
            this.currentPage = KeyProcessData.currentPage;
            this.totalPages = KeyProcessData.totalPages;
            this.keyPro = KeyProcessData.keyProcess;
          }
        })
      )
      .subscribe();
    this.Store.select('keyProcessJaringan');
    // this.getData();
    // this.keyPro;
  }

  ngAfterContentInit() {
    this.Store.dispatch(new keyProcessKantorPusatFetchStart(0, 10));
  }

  onPaginateChange(event: any) {
    this.Store.dispatch(new keyProcessKantorPusatFetchStart(event.pageIndex, event.pageSize))
  }

  deleteKeyProcess() {
    this.dialogDeleteKeyProcess.open(DeleteKeyProcess);
  }

  edit() {
    this.dialogEdit.open(EditKeyProcess);
  }

  toApprove(item: any) {
    const updateStatus = {
      unit: item.unit,
      group: item.group,
      keyPro: item.keyPro,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/keyProcess/${item.id}`,
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
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/keyProcess/${item.id}`,
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

// edit key process

@Component({
  selector: 'edit-key-process',
  templateUrl: '../../../modals/edit-key-process/edit-key-process.html',
  styleUrls: ['../../../modals/edit-key-process/style.scss'],
})
export class EditKeyProcess {
  constructor(public dialogRef: MatDialogRef<EditKeyProcess>) { }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KEY Process been submitted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end edit key process

// delete key process

@Component({
  selector: 'delete-key-process',
  templateUrl: '../../../modals/delete-key-process/delete-key-process.html',
  styleUrls: ['../../../modals/delete-key-process/style.scss'],
})
export class DeleteKeyProcess {
  constructor(public dialogRef: MatDialogRef<DeleteKeyProcess>) { }

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

// end delete key process
