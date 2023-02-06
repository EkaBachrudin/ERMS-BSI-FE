import { Component, OnInit } from '@angular/core';
import { DcorheadService } from 'src/app/service/kri/dcorhead.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dcor-head-kri',
  templateUrl: './dcor-head-kri.component.html',
  styleUrls: ['./dcor-head-kri.component.scss'],
})
export class DcorHeadKriComponent implements OnInit {
  dcor_head: any;

  constructor(private dcorHead: DcorheadService) {}

  ngOnInit(): void {
    this.dcor_head = this.dcorHead.getDcorHead();
  }

  isApproved(parent_id: any, body: any) {
    body.status_dcor_head = 'APPROVED';
    this.dcorHead.putKRIDcorHead(parent_id, body);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI has been approved',
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(function () {}, 2000);
  }

  isReject(parent_id: any, body: any) {
    body.status_dept_head = 'REJECTED';
    this.dcorHead.putKRIDcorHead(parent_id, body);

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'KRI has been rejected',
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(function () {}, 2000);
  }
}
