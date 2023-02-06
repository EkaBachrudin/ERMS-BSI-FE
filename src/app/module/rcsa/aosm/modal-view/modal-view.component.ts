import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent implements OnInit {

  // name: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // this.name = data.name
  }

  ngOnInit(): void {
  }

}

