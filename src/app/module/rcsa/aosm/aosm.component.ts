import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { ModalAdjustmentComponent } from './modal-adjustment/modal-adjustment.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { Router } from '@angular/router';

interface Status {
  value: string;
  viewValue: string;
}

interface Periode {
  value: string;
  viewValue: string;
}

interface Ques {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-aosm',
  templateUrl: './aosm.component.html',
  styleUrls: ['./aosm.component.scss']
})
export class AosmComponent{

  panelOpenState = false;

  constructor(public dialog: MatDialog, private router: Router) {}

  viewDialog() {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      data: {
        name: 'Syahdan'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  redirectToReport() {
    this.router.navigate(['/rcsa/aosm/report'])
  }

  adjustmentDialog() {
    const dialogRef = this.dialog.open(ModalAdjustmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  approveDialog() {
    Swal.fire({
      title: '<h3 class="text-center mt-5" style="font-weight: bold;">9 RCSA Operasional Cabang<br>ready to be approved?</h3>',
      showCancelButton: true,
      confirmButtonText: 'ACCEPT',
      cancelButtonText: 'CANCEL',
      cancelButtonColor: '#c37575',
      confirmButtonColor: '#00a39e',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'RCSA has been approved',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  

  rejectedDialog() {
    Swal.fire({
      title: '<h3 style="font-weight: bold; text-align: left;">REASON REJECTED</h3>',
      input: 'textarea',
      showCancelButton: true,
      confirmButtonText: 'REJECTED',
      cancelButtonText: '<label style="color: black;">CANCEL</label>',
      cancelButtonColor: '#ffffff',
      confirmButtonColor: '#00a39e',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'RCSA has been rejected',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  approvedArea(periode: string) {
    Swal.fire({
      title: `<h3 class="text-center mt-5" style="font-weight: bold;">Approve RCSA ${periode}</h3>`,
      showCancelButton: true,
      confirmButtonText: 'APPROVE',
      cancelButtonText: 'CANCEL',
      cancelButtonColor: '#c37575',
      confirmButtonColor: '#00a39e',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'RCSA has been approved',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  rejectedArea() {
    Swal.fire({
      title: '<h3 style="font-weight: bold; text-align: left;">REASON REJECTED</h3>',
      input: 'textarea',
      showCancelButton: true,
      confirmButtonText: 'REJECTED',
      cancelButtonText: '<label style="color: black;">CANCEL</label>',
      cancelButtonColor: '#ffffff',
      confirmButtonColor: '#00a39e',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'RCSA has been rejected',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  status: Status[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'drafted', viewValue: 'Drafted'},
    {value: 'waiting-for-approval', viewValue: 'Waiting For Approval'},
    {value: 'waiting-to-be-checked', viewValue: 'Waiting To Be Checked'},
    {value: 'approved', viewValue: 'Approved'},
    {value: 'rejected', viewValue: 'Rejected'}
  ];
  
  periode: Periode[] = [
    {value: 'all', viewValue: 'All'},
    {value: '2022', viewValue: '2022'},
    {value: '2021', viewValue: '2021'},
    {value: '2020', viewValue: '2020'},
    {value: '2019', viewValue: '2019'}
  ];
  
  ques: Ques[] = [
    {value: 'all', viewValue: 'All'},
    {value: 'Q1', viewValue: 'Q1'},
    {value: 'Q2', viewValue: 'Q2'},
    {value: 'Q3', viewValue: 'Q3'},
    {value: 'Q4', viewValue: 'Q4'}
  ];

}