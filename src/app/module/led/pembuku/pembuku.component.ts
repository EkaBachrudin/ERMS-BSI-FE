import { Component, OnInit } from '@angular/core';
import { PembukuService } from 'src/app/service/led/pembuku.service';
import Swal from 'sweetalert2';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pembuku',
  templateUrl: './pembuku.component.html',
  styleUrls: ['./pembuku.component.scss'],
})
export class PembukuComponent implements OnInit {
  panelOpenState = false;

  pembuku: any;
  pembuku_: any;
  ledData: any;
  idLedData: any;
  nominalKerugian: any;
  nominalHukum: any;
  recoveryAwal: any;
  recovData: any;
  totalRecov: number = 0;
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  isApprover = localStorage.getItem('role') === 'pembukuApprove';
  constructor(private dataPembuku: PembukuService) {}

  ngOnInit(): void {
    this.pembuku_ = this.dataPembuku.getData();
    this.getDataLed();
    this.getRecovery();
  }

  tglPembukuan = new FormControl('');

  addTglPembukuan(item: any) {
    const updateTglPembukuan = {
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
      status1: item.status1,
      status2: item.status1,
      tglPembukuan: this.tglPembukuan.value,
      statusPembukuan: item.statusPembukuan,
      noReg: item.noReg,
    };

    // console.log(updateTglPembukuan);

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/led/${item.id}`,
      data: updateTglPembukuan,
    }).then((res) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to Add this Date',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#68B7FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Add',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Added!', 'Succes to Add.', 'success');
        }
      });
    });
  }

  approvedPembuku(item: any) {
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
      status1: item.status1,
      status2: item.status1,
      tglPembukuan: item.tglPembukuan,
      statusPembukuan: 'APPROVED',
      noReg: item.noReg,
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

  toRejectPembuku(item: any) {
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
      status1: item.status1,
      status2: item.status1,
      noReg: item.noReg,
      tglPembukuan: item.tglPembukuan,
      statusPembukuan: 'REJECTED',
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

  approvedRec(item: any) {
    const updateStatus = {
      recoveryAdd: +item.recoveryAdd,
      sumber: item.sumber,
      tglBukuRecovery: item.tglBukuRecovery,
      statusRec: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/recovery/${item.id}`,
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

  tglBukuRecovery = new FormControl('');

  addDateRec(item: any) {
    const updateStatus = {
      recoveryAdd: +item.recoveryAdd,
      sumber: item.sumber,
      tglBukuRecovery: this.tglBukuRecovery.value,
      statusRec: item.statusRec,
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/recovery/${item.id}`,
      data: updateStatus,
    }).then((res) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to Add this Date',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#68B7FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Add',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Added!', 'Succes to Add.', 'success');
        }
      });
    });
  }

  toRejectRec(item: any) {
    const updateStatus = {
      recoveryAdd: +item.recoveryAdd,
      sumber: item.sumber,
      tglBukuRecovery: item.tglBukuRecovery,
      statusRec: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/recovery/${item.id}`,
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

  getDataLed() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/led?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.ledData = res.data;
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
}
