import { Component, OnInit } from '@angular/core';
import { GroupheadService } from 'src/app/service/kri/grouphead.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-group-head-kri',
  templateUrl: './group-head-kri.component.html',
  styleUrls: ['./group-head-kri.component.scss'],
})
export class GroupHeadKriComponent implements OnInit {
  constructor(private groupHead: GroupheadService) {}

  group_head: any;
  ngOnInit(): void {
    this.group_head = this.groupHead.getKRIGroupHead();
  }

  isApproved(parent_id: any, body: any) {
    body.status_group_head = 'APPROVED';
    this.groupHead.putKRIGroupHead(parent_id, body);

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
    this.groupHead.putKRIGroupHead(parent_id, body);

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
