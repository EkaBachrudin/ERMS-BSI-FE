import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rejected-note',
  templateUrl: './rejected-note.component.html',
  styleUrls: ['./rejected-note.component.scss']
})
export class RejectedNoteComponent {

  constructor(  
    private dialogRef: MatDialogRef<RejectedNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    
  ngOnInit(): void {
    console.log(this.data);
  }

  close() {
    this.dialogRef.close();
  }

}
