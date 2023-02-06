import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sorh',
  templateUrl: './sorh.component.html',
  styleUrls: ['./sorh.component.scss']
})
export class SorhComponent implements OnInit {

  constructor() {}

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
