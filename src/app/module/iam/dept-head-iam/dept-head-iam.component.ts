import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeptHeadService } from 'src/app/service/iam/dept-head.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dept-head-iam',
  templateUrl: './dept-head-iam.component.html',
  styleUrls: ['./dept-head-iam.component.scss'],
})
export class DeptHeadIamComponent implements OnInit {
  constructor(
    public dialogAdd: MatDialog,
    public SubmitDialog: MatDialog,
    public addIamRcsaDialog: MatDialog,
    public deptHeadService: DeptHeadService
  ) {}
  isApprover = localStorage.getItem('role') === 'approver';
  counter: any = [];
  rows: any = this.deptHeadService.getDataDeptHead().subscribe({
    next: (res: any) => {
      this.rows = res;
      res.map((items: any) => {
        items.source.forEach((element: any) => {
          element.jumlahAction =
            parseInt(element.close) + parseInt(element.open);
          if (items.totalClose == undefined) {
            items.totalClose = parseInt(element.close);
            items.totalOpen = parseInt(element.open);
            items.jumlahAction = element.jumlahAction;
          } else {
            items.totalClose += parseInt(element.close);
            items.totalOpen += parseInt(element.open);
            items.jumlahAction += element.jumlahAction;
          }
        });
        return items;
      });
    },
  });

  getAllData() {
    return this.rows;
  }
  openDialog() {
    this.dialogAdd.open(Add);
  }
  openSubmitDialog() {
    this.SubmitDialog.open(SubmitIam);
  }
  openAddIamRcsa(items: any, id: any) {
    this.addIamRcsaDialog.open(AddIamRcsa, {
      data: {
        items,
        parent: id,
      },
    });
  }
  approve(item: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve it!',
    }).then((result) => {
      if (result.isConfirmed) {
        item.status = 'Aprrove';
        Swal.fire('Approve!', '.', 'success');
        //
      }
    });
  }
  reject(item: any) {
    item.status = 'REJECTED';
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, reject it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Reject',
    //       '.',
    //       'success'
    //     )
    //
    //   }
    // })
  }

  ngOnInit(): void {
    this.getAllData();
  }
}

@Component({
  selector: 'add-iam',
  templateUrl: './modals/add-iam/add-iam.html',
  styleUrls: ['./modals/add-iam/style.scss'],
})
export class Add {
  constructor(
    public dialogRef: MatDialogRef<Add>,
    private formBuilder: FormBuilder,
    public deptHeadService: DeptHeadService
  ) {}
  addIAMForm = this.formBuilder.group({
    unit: '',
    periode_tahun: '',
    periode_q: '',
    status: 'WAITING FOR APPROVAL',
    source: this.formBuilder.array([
      {
        title: 'RCSA',
        rician: 'Risiko Penyalahgunaan UserIDd',
        rencana: 'HT/BOSM/AOSM melakukan cash count dan membuat berita acara',
        grup: 'KC. NATUNA',
        close: 0,
        open: 0,
        id: 1,
      },
      {
        title: 'KRI',
        rician: 'Risiko Penyalahgunaan UserIDa',
        rencana: 'HT/BOSM/AOSM melakukan cash count dan membuat berita acara',
        grup: 'KC. NATUNA',
        close: 0,
        open: 0,
        id: 2,
      },
      {
        title: 'LED',
        rician: 'Risiko Penyalahgunaan UserIDs',
        rencana: 'HT/BOSM/AOSM melakukan cash count dan membuat berita acara',
        grup: 'KC. NATUNA',
        close: 0,
        open: 0,
        id: 3,
      },
    ]),
  });

  cancelDialog() {
    this.dialogRef.close();
  }

  submitDialog() {
    this.deptHeadService.createDataHead(this.addIAMForm.value).subscribe({
      next: (res) => {
        this.dialogRef.close('save');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil ditambahkan',
          showConfirmButton: false,
          timer: 2000,
        });
      },
      error: () => {
        alert('error');
      },
    });
  }
}

@Component({
  selector: 'submit-iam',
  templateUrl: './modals/submit-iam/submit-iam.html',
  styleUrls: ['./modals/submit-iam/style.scss'],
})
export class SubmitIam {
  constructor(public dialogRef: MatDialogRef<SubmitIam>) {}

  cancel() {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'IAM telah dinilai',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
@Component({
  selector: 'add-iam-rcsa',
  templateUrl: './modals/add-iam-rcsa/add-iam-rcsa.html',
  styleUrls: ['./modals/add-iam-rcsa/style.scss'],
})
export class AddIamRcsa implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddIamRcsa>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deptHeadService: DeptHeadService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  editIamRcsaForm: any = [];
  getData() {
    this.editIamRcsaForm = this.formBuilder.group({
      id: this.data.items.id,
      title: this.data.items.title,
      rician: this.data.items.rician,
      rencana: this.data.items.rencana,
      grup: this.data.items.grup,
      close: this.data.items.close,
      open: this.data.items.open,
    });
    return this.editIamRcsaForm;
  }
  cancel() {
    this.dialogRef.close();
  }
  submit() {
    this.data.parent.source = this.data.parent.source.map((r: any) => {
      if (r.id == this.data.items.id) {
        r = this.editIamRcsaForm.value;
      }
      return r;
    });
    this.editIamRcsaForm = this.deptHeadService
      .updateDataHead(this.data.parent.id, this.data.parent)
      .subscribe({
        next: (res) => {
          this.dialogRef.close('save');
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Berhasil ditambahkan',
            showConfirmButton: false,
            timer: 2000,
          });
          //
        },
        error: () => {
          alert('error');
        },
      });
  }
}
