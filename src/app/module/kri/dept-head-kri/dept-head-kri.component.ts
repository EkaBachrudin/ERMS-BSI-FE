import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DeptheadService } from 'src/app/service/kri/depthead.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dept-head-kri',
  templateUrl: './dept-head-kri.component.html',
  styleUrls: ['./dept-head-kri.component.scss'],
})
export class DeptHeadKriComponent implements OnInit {
  constructor(
    public dialogAdd: MatDialog,
    public editKri: MatDialog,
    private deptHead: DeptheadService
  ) {}
  preview = false;

  index = 0;

  dept_head_edit: any;

  openDialog() {
    this.dialogAdd.open(DownloadKri);
  }
  openEdit(obj: any, id: any, parent_id: any) {
    this.editKri.open(EditKri, {
      data: {
        id: id,
        parent_id: parent_id,
        obj: obj,
      },
    });
  }
  openPreview() {
    this.preview = true;
  }
  closePreview() {
    this.preview = false;
  }

  is_active = 'disabled';
  checkNilai(obj: any) {
    let n = obj.find((o: any) => o.nilai == null || o.nilai == 0);
    if (n === undefined) {
      this.is_active = 'enabled';
    } else {
      this.is_active = 'disabled';
    }
  }

  submitKeyIndicator(obj: any, parent_id: any) {
    obj.status_dept_head = 'SUBMITTED';
    obj.status_dcor_head = 'WAITING FOR CHECK';
    obj.status_group_head = 'WAITING FOR APPROVE';
    this.deptHead.putKRIDeptHead(parent_id, obj);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI has been submitted',
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(function () {}, 2000);
  }

  dept_head: any;

  ngOnInit(): void {
    this.dept_head = this.deptHead.getKRIDeptHead();
  }
}

@Component({
  selector: 'download-kri',
  templateUrl: './modals/download/download-kri.html',
  styleUrls: ['./modals/download/style.scss'],
})
export class DownloadKri {
  constructor() {}
}

@Component({
  selector: 'edit-kri',
  templateUrl: './modals/edit/edit-kri.html',
  styleUrls: ['./modals/edit/style.scss'],
})
export class EditKri {
  id: any;
  parent_id: any;
  obj_: any;

  kri: any;
  jenis_kri: any;
  nilai: any;

  ukuran_arr: any;
  ukuran: any;

  nilai_1 = new FormControl();
  nilai_2 = new FormControl();
  keterangan = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<EditKri>,
    public deptHead: DeptheadService,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {}

  operator: any;

  ngOnInit(): void {
    this.id = this._data.id;
    this.parent_id = this._data.parent_id;
    this.obj_ = this._data.obj;
    // console.log(this.obj_.child_kri);
    for (let operand of this.obj_.child_kri) {
      if (operand.id == this.id) {
        this.operator = operand.operation_variable;
      }
    }

    for (let arr of this.obj_.child_kri) {
      if (arr.id == this.id) {
        this.kri = arr.kri;
        this.jenis_kri = arr.jenis_kri;
        this.ukuran_arr = arr.ukuran;

        this.nilai = arr.nilai;

        this.keterangan.setValue(arr.keterangan_data);
      }
    }

    for (let arr_ukuran of this.ukuran_arr) {
      if (arr_ukuran.id_ukuran == 1) {
        this.nilai_1.setValue(parseInt(arr_ukuran.nilai));
      } else if (arr_ukuran.id_ukuran == 2) {
        this.nilai_2.setValue(parseInt(arr_ukuran.nilai));
      }
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit(parent_id: any, child_id: any) {
    for (let arr_child of this.obj_.child_kri) {
      if (arr_child.id == child_id) {
        for (let arr_ukuran of arr_child.ukuran) {
          if (arr_ukuran.id_ukuran == 1) {
            const value = parseInt(this.nilai_1.value);
            arr_ukuran.nilai = value;
          } else if (arr_ukuran.id_ukuran == 2) {
            const value = parseInt(this.nilai_2.value);
            arr_ukuran.nilai = value;
          }
        }

        if (arr_child.ukuran[1].desc == '') {
          const floating = parseFloat(this.nilai_1.value);
          arr_child.nilai = Math.ceil(floating);
        } else {
          let n: any;
          if (arr_child.operation_variable == 'pembagian') {
            n = Number(this.nilai_1.value / this.nilai_2.value);
          } else if (arr_child.operation_variable == 'perkalian') {
            n = Number(this.nilai_1.value * this.nilai_2.value);
          } else if (arr_child.operation_variable == 'pertambahan') {
            n = Number(this.nilai_1.value + this.nilai_2.value);
          } else if (arr_child.operation_variable == 'pengurangan') {
            n = Number(this.nilai_1.value - this.nilai_2.value);
          }
          const floating = parseFloat(n.toFixed(2));
          arr_child.nilai = Math.ceil(floating);
        }

        arr_child.keterangan_data = this.keterangan.value;
      }
    }

    this.deptHead.putKRIDeptHead(parent_id, this.obj_);

    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI has been assigned',
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(function () {}, 2000);
  }

  assign() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'KRI has been assigned',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
