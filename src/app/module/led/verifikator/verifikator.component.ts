import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verifikator',
  templateUrl: './verifikator.component.html',
  styleUrls: ['./verifikator.component.scss'],
})
export class VerifikatorComponent implements OnInit {
  formulir = false;
  panelOpenState = false;
  constructor(
    public dialogRevisionVerifikator: MatDialog,
    public dialogRejectedVerifikator: MatDialog,
    public dialogSubmitVerifikator: MatDialog
  ) {}

  revision() {
    this.dialogRevisionVerifikator.open(RevisionVerifikator);
  }
  rejected() {
    this.dialogRejectedVerifikator.open(RejectVerifikator);
  }
  submit() {
    this.dialogSubmitVerifikator.open(SubmitLed);
  }
  openFormulir() {
    this.formulir = true;
  }
  closeFormulir() {
    this.formulir = false;
  }
  download() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED Berhasil to download',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  ngOnInit(): void {}
}

// revision verifikator

@Component({
  selector: 'revision-verifikator',
  templateUrl: './modals/revision-verifikator/revision-verifikator.html',
  styleUrls: ['./modals/revision-verifikator/style.scss'],
})
export class RevisionVerifikator {
  constructor(public dialogRef: MatDialogRef<RevisionVerifikator>) {}

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

// end revision verifikator

// rejected verifikator

@Component({
  selector: 'reject-verifikator',
  templateUrl: './modals/reject-verifikator/reject-verifikator.html',
  styleUrls: ['./modals/reject-verifikator/style.scss'],
})
export class RejectVerifikator {
  constructor(public dialogRef: MatDialogRef<RejectVerifikator>) {}

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

// end rejected verifikator

// submit led

@Component({
  selector: 'submit-led',
  templateUrl: './modals/submit-led/submit-led.html',
})
export class SubmitLed {
  constructor(public dialogRef: MatDialogRef<SubmitLed>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LED has been submitted',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}

// end submit led
