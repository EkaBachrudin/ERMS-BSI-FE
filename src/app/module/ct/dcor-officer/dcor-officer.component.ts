import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DcorofficerService } from 'src/app/service/ct/dcorofficer.service';
import { ModalAddCtComponent } from './modal-add-ct/modal-add-ct.component';
import { ModalAddKeyProcessComponent } from './modal-add-key-process/modal-add-key-process.component';

@Component({
  selector: 'app-dcor-officer',
  templateUrl: './dcor-officer.component.html',
  styleUrls: ['./dcor-officer.component.scss']
})
export class DcorOfficerComponent implements OnInit {

  panelOpenState = false;

  data_dcor_officer_: any;

  constructor(public dialog: MatDialog, private dcor_officer: DcorofficerService) { }

  addCT() {
    const dialogRef = this.dialog.open(ModalAddCtComponent);
  }

  addKeyProcess() {
    this.dialog.open(ModalAddKeyProcessComponent);
  }

  ngOnInit(): void {

    this.data_dcor_officer_ = this.dcor_officer.getAllDcorOfficer();

  }

}
