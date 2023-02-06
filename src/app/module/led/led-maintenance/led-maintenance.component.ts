import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-led-maintenance',
  templateUrl: './led-maintenance.component.html',
  styleUrls: ['./led-maintenance.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LedMaintenanceComponent implements OnInit {
  riskIssueData: any;
  causeData: any;
  dampakFinData: any;
  dampakNonFinData: any;
  unitKroData: any;
  glKroData: any;
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  isApprover = localStorage.getItem('role') === 'admin_approve';
  constructor(
    public addRiskIssue: MatDialog,
    public addCause: MatDialog,
    public addDampakFinancial: MatDialog,
    public addDampakNonFinancial: MatDialog,
    public addUnitPembukuan: MatDialog,
    public addGlPembukuanKro: MatDialog
  ) {}

  riskIssue() {
    this.addRiskIssue.open(AddRiskIssue);
  }
  cause() {
    this.addCause.open(AddCause);
  }
  dampakFinancial() {
    this.addDampakFinancial.open(AddDampakFinancial);
  }
  dampakNonFinancial() {
    this.addDampakNonFinancial.open(AddDampakNonFinancial);
  }
  unitPembukuan() {
    this.addUnitPembukuan.open(AddUnitPembukuan);
  }
  glPembukuanKro() {
    this.addGlPembukuanKro.open(AddGlPembukuanKro);
  }
  ngOnInit(): void {
    this.getDataRiskIssue();
    this.getDataCause();
    this.getDataDampakFin();
    this.getDataDampakNonFin();
    this.getDataUnitKro();
    this.getDataGlKro();
  }

  getDataRiskIssue() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/riskIssue?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.riskIssueData = res.data;
    });
  }

  getDataCause() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/cause?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.causeData = res.data;
    });
  }

  getDataDampakFin() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/dampakFin?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.dampakFinData = res.data;
    });
  }

  getDataDampakNonFin() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/dampakNonFin?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.dampakNonFinData = res.data;
    });
  }

  getDataUnitKro() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/unitKro?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.unitKroData = res.data;
    });
  }

  getDataGlKro() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/glKro?_sort=id&_order=desc`,
    }).then((res) => {
      // console.log(res.data, '<<<<<');
      this.glKroData = res.data;
    });
  }

  toApproveRiskIssue(item: any) {
    const valueRI = {
      riskIssue: item.riskIssue,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/riskIssue/${item.id}`,
      data: valueRI,
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

  toRejectRiskIssue(item: any) {
    const valueRI = {
      riskIssue: item.riskIssue,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/riskIssue/${item.id}`,
      data: valueRI,
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

  toApproveCause(item: any) {
    const valueCause = {
      level1: item.level1,
      level2: item.level2,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/cause/${item.id}`,
      data: valueCause,
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

  toRejectCause(item: any) {
    const valueCause = {
      level1: item.level1,
      level2: item.level2,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/cause/${item.id}`,
      data: valueCause,
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

  toApproveDampakFin(item: any) {
    const valueDampak = {
      impact: item.impact,
      keterangan: item.keterangan,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/dampakFin/${item.id}`,
      data: valueDampak,
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

  toRejectDampakFin(item: any) {
    const valueDampak = {
      impact: item.impact,
      keterangan: item.keterangan,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/dampakFin/${item.id}`,
      data: valueDampak,
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

  toApproveDampakNonFin(item: any) {
    const valueDampak = {
      impact: item.impact,
      keterangan: item.keterangan,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/dampakNonFin/${item.id}`,
      data: valueDampak,
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

  toRejectDampakNonFin(item: any) {
    const valueDampak = {
      impact: item.impact,
      keterangan: item.keterangan,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/dampakNonFin/${item.id}`,
      data: valueDampak,
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

  toApproveUnitKro(item: any) {
    const valueUnit = {
      unit: item.unit,
      keterangan: item.keterangan,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/unitKro/${item.id}`,
      data: valueUnit,
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

  toRejectUnitKro(item: any) {
    const valueUnitKro = {
      unit: item.unit,
      keterangan: item.keterangan,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/unitKro/${item.id}`,
      data: valueUnitKro,
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

  toApproveGlKro(item: any) {
    const valueGlKro = {
      rekKro: item.rekKro,
      noRekKro: item.noRekKro,
      rekRec: item.rekRec,
      noRekRec: item.noRekRec,
      status: 'APPROVED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/glKro/${item.id}`,
      data: valueGlKro,
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

  toRejectGlKro(item: any) {
    const valueGlKro = {
      rekKro: item.rekKro,
      noRekKro: item.noRekKro,
      rekRec: item.rekRec,
      noRekRec: item.noRekRec,
      status: 'REJECTED',
    };

    axios({
      method: 'PUT',
      url: `${environment.apiUrl}/glKro/${item.id}`,
      data: valueGlKro,
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

// add risk issue
@Component({
  selector: 'add-risk-issue',
  templateUrl: './modals/add-risk-issue/add-risk-issue.html',
  styleUrls: ['./modals/add-risk-issue/style.scss'],
})
export class AddRiskIssue {
  constructor(public dialogRef: MatDialogRef<AddRiskIssue>) {}
  cancel() {
    this.dialogRef.close();
  }

  riskIssue = new FormControl('');

  submit() {
    const valueRiskIssue = {
      riskIssue: this.riskIssue.value,
      status: 'WAITING FOR APPROVAL',
    };

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/riskIssue`,
      data: valueRiskIssue,
    }).then((res) => {
      this.dialogRef.close();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Risk Issue been submitted',
        showConfirmButton: false,
        timer: 1000,
      });
    });
  }
}

// end add risk issue

// add cause

@Component({
  selector: 'add-cause',
  templateUrl: './modals/add-cause/add-cause.html',
  styleUrls: ['./modals/add-cause/style.scss'],
})
export class AddCause implements OnInit {
  dataLevel1: any;
  dataID: any;
  oneDataCause: any;
  constructor(public dialogRef: MatDialogRef<AddCause>) {}

  ngOnInit(): void {
    this.getDataLevel1();
  }

  getDataLevel1() {
    axios({
      method: 'GET',
      url: `${environment.apiUrl}/level1`,
    }).then((res) => {
      // console.log(res.data);

      this.dataLevel1 = res.data;
    });
  }

  level1 = new FormControl('');
  level2 = new FormControl('');

  // getID() {
  //   axios({
  //     method: 'GET',
  //     url: `${environment.apiUrl}/cause`,
  //   }).then((res) => {
  //     // console.log(res.data);

  //     res.data.forEach((e: any) => {
  //       if (e.level1 === this.level1.value) {
  //         this.dataID = e.id;
  //       }
  //     });

  //     axios({
  //       method: 'GET',
  //       url: `${environment.apiUrl}/cause/${this.dataID}`,
  //     }).then((res) => {
  //       // console.log(res.data);
  //       this.oneDataCause = res.data;
  //     });
  //   });
  // }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    const levelValue = {
      level1: this.level1.value,
      level2: this.level2.value,
      status: 'WAITING FOR APPROVAL',
    };

    // this.oneDataCause.level2.push(levelValue);

    // console.log(levelValue);

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/cause`,
      data: levelValue,
    }).then((res) => {
      this.dialogRef.close();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cause submited',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}

// end add cause

// add dampak financial

@Component({
  selector: 'add-dampak-financial',
  templateUrl: './modals/add-dampak-financial/add-dampak-financial.html',
  styleUrls: ['./modals/add-dampak-financial/style.scss'],
})
export class AddDampakFinancial {
  constructor(public dialogRef: MatDialogRef<AddDampakFinancial>) {}

  cancel() {
    this.dialogRef.close();
  }

  impact = new FormControl('');
  keterangan = new FormControl('');

  submit() {
    const dampakValue = {
      impact: this.impact.value,
      keterangan: this.keterangan.value,
      status: 'WAITING FOR APPROVAL',
    };

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/dampakFin`,
      data: dampakValue,
    }).then((res) => {
      this.dialogRef.close();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Dampak Finansial submited',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}

// end add dampak financial

// add dampak non financial

@Component({
  selector: 'add-dampak-non-financial',
  templateUrl:
    './modals/add-dampak-non-financial/add-dampak-non-financial.html',
  styleUrls: ['./modals/add-dampak-non-financial/style.scss'],
})
export class AddDampakNonFinancial {
  constructor(public dialogRef: MatDialogRef<AddDampakNonFinancial>) {}

  cancel() {
    this.dialogRef.close();
  }

  impact = new FormControl('');
  keterangan = new FormControl('');

  submit() {
    const dampakValue = {
      impact: this.impact.value,
      keterangan: this.keterangan.value,
      status: 'WAITING FOR APPROVAL',
    };

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/dampakNonFin`,
      data: dampakValue,
    }).then((res) => {
      this.dialogRef.close();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Dampak Non Finansial submited',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}

// end add dampak non financial

// add unit pembukuan

@Component({
  selector: 'add-unit-pembukuan',
  templateUrl: './modals/add-unit-pembukuan/add-unit-pembukuan.html',
  styleUrls: ['./modals/add-unit-pembukuan/style.scss'],
})
export class AddUnitPembukuan {
  constructor(public dialogRef: MatDialogRef<AddUnitPembukuan>) {}

  cancel() {
    this.dialogRef.close();
  }

  unit = new FormControl('');
  keterangan = new FormControl('');

  submit() {
    const kroValue = {
      unit: this.unit.value,
      keterangan: this.keterangan.value,
      status: 'WAITING FOR APPROVAL',
    };

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/unitKro`,
      data: kroValue,
    }).then((res) => {
      this.dialogRef.close();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Unit KRO submited',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}

// end add unit pembukuan

// add gl pembukuan kro

@Component({
  selector: 'add-gl-pembukuan-kro',
  templateUrl: './modals/add-gl-pembukuan-kro/add-gl-pembukuan-kro.html',
  styleUrls: ['./modals/add-gl-pembukuan-kro/style.scss'],
})
export class AddGlPembukuanKro {
  constructor(public dialogRef: MatDialogRef<AddGlPembukuanKro>) {}

  cancel() {
    this.dialogRef.close();
  }

  rekKro = new FormControl('');
  noRekKro = new FormControl('');
  rekRec = new FormControl('');
  noRekRec = new FormControl('');

  submit() {
    const kroValue = {
      rekKro: this.rekKro.value,
      noRekKro: this.noRekKro.value,
      rekRec: this.rekRec.value,
      noRekRec: this.noRekRec.value,
      status: 'WAITING FOR APPROVAL',
    };

    axios({
      method: 'POST',
      url: `${environment.apiUrl}/glKro`,
      data: kroValue,
    }).then((res) => {
      this.dialogRef.close();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'GL KRO submited',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }
}

// end add gl pembukuan kro
