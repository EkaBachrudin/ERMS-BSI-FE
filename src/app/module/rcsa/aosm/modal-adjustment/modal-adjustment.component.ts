import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-adjustment',
  templateUrl: './modal-adjustment.component.html',
  styleUrls: ['./modal-adjustment.component.scss']
})
export class ModalAdjustmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
  }

  ngOnInit(): void {
  }

}
