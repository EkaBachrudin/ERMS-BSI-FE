import {
  Component,
  OnInit,
  ViewEncapsulation,
  TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import axios from 'axios';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-pemutus',
  templateUrl: './pemutus.component.html',
  styleUrls: ['./pemutus.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PemutusComponent implements OnInit {
  formulir = false;
  modalRef?: BsModalRef;
  ledData: any;
  idLedData: any;
  nominalKerugian: any;
  nominalHukum: any;
  recoveryAwal: any;
  recovData: any;
  totalRecov: number = 0;
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  constructor(
    private modalService: BsModalService,
    public dialogApprovePemutus: MatDialog,
    public dialogRejectedPemutus: MatDialog,
    public dialogRevisionPemutus: MatDialog
  ) {}

  ngOnInit(): void {
    this.getLed();
    this.getRecovery();
  }
  search = new FormControl('');

  toRupiah(value: number) {
    const format = value.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp ' + convert?.join('.').split('').reverse().join('');

    return rupiah;
  }

  getRecovery() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/recovery?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.recovData = res.data;
      res.data.forEach((el: any) => {
        this.totalRecov += el.recoveryAdd;
      });

      // console.log(this.totalRecov);
    });
  }

  getIdLed(item: any) {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/led/${item.id}`,
    }).then((res) => {
      // console.log(res.data.id, '<<<<<');
      this.idLedData = res.data.id;
      this.nominalKerugian = res.data.totalLoss;
      this.nominalHukum = res.data.legalObligation;
      this.recoveryAwal = res.data.totalRecovery;
    });
  }

  getLed() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/led?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.ledData = res.data;
    });
  }

  toFilter() {
    const filter = {
      search: this.search.value,
    };

    console.log(filter);
  }

  closeFormulir() {
    this.formulir = false;
  }
  openFormulir() {
    this.formulir = true;
  }
  approved() {
    this.dialogApprovePemutus.open(ApprovePemutus);
  }
  rejected() {
    this.dialogRejectedPemutus.open(RejectedPemutus);
  }
  revision() {
    this.dialogRevisionPemutus.open(RevisionPemutus);
  }
  download() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED Berhasil di download',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  // toApprove() {
  //   Swal.fire({
  //     title: 'I am sure to approve the LED',
  //     text: 'Please make sure!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#00A39D',
  //     cancelButtonColor: '#FF9A9A',
  //     confirmButtonText: 'Approve',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: 'HASIL KEPUTUSAN',
  //         input: 'textarea',
  //         inputPlaceholder: 'Type your message here...',
  //         inputAttributes: {
  //           autocapitalize: 'off',
  //           'aria-label': 'Type your message here',
  //         },
  //         showCancelButton: true,
  //         confirmButtonText: 'SEND',
  //         confirmButtonColor: '#00A39D',
  //         cancelButtonColor: '#FF9A9A',
  //         showLoaderOnConfirm: true,
  //         preConfirm: (decision) => {
  //           console.log(decision); //Take output HERE
  //         },
  //         allowOutsideClick: () => !Swal.isLoading(),
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: 'LED has been approved',
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       });
  //     }
  //   });
  // }

  toApprove(item: any) {
    const updateStatus = {
      kerugian: item.kerugian,
      recovery: item.recovery,
      level1: item.level1,
      level2: item.level2,
      unit: item.unit,
      category: item.category,
      riskIssue: item.riskIssue,
      let1: item.let1,
      finImpact: item.finImpact,
      nonFinImpact: item.nonFinImpact,
      totalLoss: item.totalLoss,
      legalObligation: item.legalObligation,
      descriptionObli: item.descriptionObli,
      totalRecovery: item.totalRecovery,
      netLoss: item.netLoss,
      firstDateEvent: item.firstDateEvent,
      dateDetected: item.dateDetected,
      cause: item.cause,
      spesificCause: item.spesificCause,
      descriptionEvent: item.descriptionEvent,
      agreement: item.agreement,
      status1: 'APPROVED',
      status2: 'APPROVED',
      statusPembukuan: item.statusPembukuan,
      noReg: item.noReg,
      tglPembukuan: item.tglPembukuan,
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/led/${item.id}`,
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

  toRevision() {
    Swal.fire({
      title: 'REASON REVISON',
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        autocapitalize: 'off',
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
      confirmButtonText: 'SEND',
      confirmButtonColor: '#00A39D',
      cancelButtonColor: '#FF9A9A',
      showLoaderOnConfirm: true,
      preConfirm: (revision) => {
        console.log(revision); //Take output HERE
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'LED has been revision',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  // toRejected() {
  //   Swal.fire({
  //     title: 'REASON REJECTED',
  //     input: 'textarea',
  //     inputPlaceholder: 'Type your message here...',
  //     inputAttributes: {
  //       autocapitalize: 'off',
  //       'aria-label': 'Type your message here',
  //     },
  //     showCancelButton: true,
  //     confirmButtonText: 'SEND',
  //     confirmButtonColor: '#00A39D',
  //     cancelButtonColor: '#FF9A9A',
  //     showLoaderOnConfirm: true,
  //     preConfirm: (rejected) => {
  //       console.log(rejected); //Take output HERE
  //     },
  //     allowOutsideClick: () => !Swal.isLoading(),
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         position: 'center',
  //         icon: 'success',
  //         title: 'LED has been rejected',
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // }

  toReject(item: any) {
    const updateStatus = {
      kerugian: item.kerugian,
      recovery: item.recovery,
      level1: item.level1,
      level2: item.level2,
      unit: item.unit,
      category: item.category,
      riskIssue: item.riskIssue,
      let1: item.let1,
      finImpact: item.finImpact,
      nonFinImpact: item.nonFinImpact,
      totalLoss: item.totalLoss,
      legalObligation: item.legalObligation,
      descriptionObli: item.descriptionObli,
      totalRecovery: item.totalRecovery,
      netLoss: item.netLoss,
      firstDateEvent: item.firstDateEvent,
      dateDetected: item.dateDetected,
      cause: item.cause,
      spesificCause: item.spesificCause,
      descriptionEvent: item.descriptionEvent,
      agreement: item.agreement,
      status1: 'REJECTED',
      status2: 'REJECTED',
      statusPembukuan: item.statusPembukuan,
      noReg: item.noReg,
      tglPembukuan: item.tglPembukuan,
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/led/${item.id}`,
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

  toDownload() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED success to download',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }
}

// approved pemutus

@Component({
  selector: 'approve-pemutus',
  templateUrl: './modals/approve-pemutus/approve-pemutus.html',
  styleUrls: ['./modals/approve-pemutus/style.scss'],
})
export class ApprovePemutus {
  constructor(public dialogRef: MatDialogRef<ApprovePemutus>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED has been approved',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end approved pemutus

// rejected pemutus

@Component({
  selector: 'rejected-pemutus',
  templateUrl: './modals/reject-pemutus/reject-pemutus.html',
  styleUrls: ['./modals/reject-pemutus/style.scss'],
})
export class RejectedPemutus {
  constructor(public dialogRef: MatDialogRef<RejectedPemutus>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED has been rejected',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end rejected pemutus

// revision pemutus

@Component({
  selector: 'revision-pemutus',
  templateUrl: './modals/revision-pemutus/revision-pemutus.html',
  styleUrls: ['./modals/revision-pemutus/style.scss'],
})
export class RevisionPemutus {
  constructor(public dialogRef: MatDialogRef<RevisionPemutus>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED has been revision',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end revision pemutus
