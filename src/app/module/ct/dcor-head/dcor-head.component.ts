import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dcor-head',
  templateUrl: './dcor-head.component.html',
  styleUrls: ['./dcor-head.component.scss']
})
export class DcorHeadComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>,

  ) {}

  ngOnInit(): void {}

  toSubmit() {
    Swal.fire({
      title: 'I am sure to Submit CT',
      text: 'Please make sure!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00A39D',
      cancelButtonColor: '#FF9A9A',
      confirmButtonText: 'Approve',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'CT has been Submit',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  toRejected() {
    Swal.fire({
      title: 'REASON REJECTED',
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        autocapitalize: 'off',
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
      confirmButtonText: 'SEND',
      confirmButtonColor: '#FF9A9A',
      cancelButtonColor: '#00A39D',
      showLoaderOnConfirm: true,
      preConfirm: (rejected) => {
        console.log(rejected); //Take output HERE
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'CT has been rejected',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  toDownload() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'CT success to download',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
