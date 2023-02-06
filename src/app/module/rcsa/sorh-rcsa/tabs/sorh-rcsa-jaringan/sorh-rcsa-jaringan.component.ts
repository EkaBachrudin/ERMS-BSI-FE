import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApproveSorh } from 'src/app/shared/components/class/rcsa/sorh/jaringan/approve-sorh-jaringan';
import { RejectedSorh } from 'src/app/shared/components/class/rcsa/sorh/jaringan/rejected-sorh-jaringan';
@Component({
  selector: 'app-sorh-rcsa-jaringan',
  templateUrl: './sorh-rcsa-jaringan.component.html',
  styleUrls: ['./sorh-rcsa-jaringan.component.scss'],
})
export class SorhRcsaJaringanComponent implements OnInit {
  utama = true;
  panelOpenState = false;

  constructor(
    public dialogApproveSorh: MatDialog,
    public dialogRejectedSorh: MatDialog
  ) {}

  openApproveSorh() {
    this.dialogApproveSorh.open(ApproveSorh);
  }
  openRejectedSorh() {
    this.dialogRejectedSorh.open(RejectedSorh);
  }
  changeReport() {
    this.utama = false;
  }
  closeReport() {
    this.utama = true;
  }
  ngOnInit(): void {}
}
