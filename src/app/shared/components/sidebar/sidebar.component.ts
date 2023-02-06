import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WebsocketService } from 'src/app/service/websocket/websocket.service';
import Swal from 'sweetalert2';
import { truncate } from 'src/app/utils/helpers';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers : [WebsocketService]
})
export class SidebarComponent implements OnInit {

  limitWord = truncate
  received = [];

  constructor(private router: Router, private location: Location,private Websocket : WebsocketService) {
    Websocket.messages.subscribe(msg => {
      this.received.push(msg);
      console.log("Response from websocket: " + msg);
    });

  }

  isSuperUser = localStorage.getItem('role') === 'super_user';
  isSPV = localStorage.getItem('role') === 'spv';
  isInputer = localStorage.getItem('role') === 'inputer';
  isReviewer = localStorage.getItem('role') === 'reviewer';
  isApprover = localStorage.getItem('role') === 'approver';
  isAdminMaker = localStorage.getItem('role') === 'admin_maker';
  isAdminApprove = localStorage.getItem('role') === 'admin_approve';
  isPembukuApprove = localStorage.getItem('role') === 'pembukuApprove';
  user = JSON.parse(localStorage.getItem("users"))
  role: any = JSON.parse(localStorage.getItem("roles"))
  initialName: string
  roleInitial: string = this.user.payload.rolesDetails[0].rolesInitial



  ngOnInit(): void {
    let list = document.querySelectorAll('.navigation li');
    function activeLink(this: any) {
      list.forEach((item) => item.classList.remove('hovered'));
      this.classList.add('hovered');
    }
    list.forEach((item) => item.addEventListener('click', activeLink));
    this.role = localStorage.getItem('roles');
  }

  toDashboard() {
    this.router.navigate(['/dashboard/all']);
  }

  click() {
    document.getElementById('helloworld').classList.add('hovered');
  }
  toRouteLED() {
    this.router.navigate(['/led/maintenance']);
  }

  toRouteRCSA(event: string) {
    if(event.toString().search('user_admin') != -1) {
      return this.router.navigate(['/rcsa/user']);
    }
    else if(event.toString().search('risk_admin') !== -1) {
      return this.router.navigate(['/rcsa/maintenance']);
    }
    else if(event.toString().search('dept_head') !== -1) {
      return this.router.navigate(['/rcsa/dept-head']);
    }
    else if(event.toString().search('group_head') !== -1) {
      return this.router.navigate(['/rcsa/group-head']);
    }
    else if(event.toString().search('dcor') !== -1) {
      return this.router.navigate(['/rcsa/dcor-head']);
    }
    else if(event.toString().search('sorh') !== -1) {
      return this.router.navigate(['/rcsa/sorh']);
    } else {
      return this.router.navigate(['/dashboard/all']);
    }
  }

  toRouteIAM() {
    this.router.navigate(['/iam/maintenance']);
  }

  toApprovePembuku() {
    this.router.navigate(['/led/pembuku']);
  }

  // toRouteKRI() {
  //   if(this.role == 'admin_maker' || this.role == 'admin_approve') {
  //     this.router.navigate(['/kri/maintenance']);
  //   } else if(this.role == 'inputer') {
  //     this.router.navigate(['/kri/inputer']);
  //   } else if(this.role == 'reviewer') {
  //     this.router.navigate(['/kri/reviewer']);
  //   } else if(this.role == 'approver') {
  //     this.router.navigate(['/kri/approver']);
  //   }
  // }
  toRouteKRI() {
    this.router.navigate(['/kri/maintenance']);
  }

  toInputerRCSA() {
    this.router.navigate(['/rcsa/inputer']);
  }

  toInputerIAM() {
    this.router.navigate(['/iam/dept-head']);
  }

  toInputerKRI() {
    this.router.navigate(['/kri/inputer']);
  }

  toInputerLED() {
    this.router.navigate(['/led/pengusul']);
  }

  toCheckerKRI() {
    this.router.navigate(['/kri/reviewer']);
  }

  toApproverRCSA() {
    this.router.navigate(['/rcsa/approver']);
  }

  toApproverKRI() {
    this.router.navigate(['/kri/approver']);
  }

  toApproverLED() {
    this.router.navigate(['/led/pemutus']);
  }

  toApproverIAM() {
    this.router.navigate(['/iam/gh']);
  }

  toPembukuLED() {
    this.router.navigate(['/led/pembuku']);
  }

  toLogout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes !'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href="/login"
      }
    })
  }

  getFirstLetters(str:string) {
    const firstLetters = str
      .split(' ')
      .map(word => word[0])
      .join(' ');
  
    this.initialName = firstLetters;
    return firstLetters.split(" ").splice(0,2).join(" ");
  }
}
