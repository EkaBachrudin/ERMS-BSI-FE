import { Component, OnInit, AfterContentInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { State } from 'src/app/state/store/reducer/rcsa/group.reducer';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { RatingCompositeFetchStart } from 'src/app/state/store/actions/rcsa/RatingComposite.action';
import { IRatingComposite } from 'src/app/models/rcsa/RatingComposite/RatingComposite.model';
import { RatingCompositeFilterInterface } from './types/ratingComposite.interface';

export interface StateMat {
  id: number;
  CompositeRating: string;
  Ihrr: number;
  Control: number;
  Composite: number;
  Status: String;
}

@Component({
  selector: 'app-rating-composite',
  templateUrl: './rating-composite.component.html',
  styleUrls: ['./rating-composite.component.scss']
})



export class RatingCompositeComponent implements OnInit, AfterContentInit {

  listSettingRatingComposite: any;
  totalPage: number;
  pageSize: number;
  currentPage: number;
  ratingCompositeSetting: RatingCompositeFilterInterface = {
    page: 0,
    size: 10,
    ihrr: "",
    control: "",
  }
  constructor
    (
      private store: Store<AppState>,
      public dialog: MatDialog
    ) { }

  openDialog(data) {
    this.dialog.open(DialogElementsExampleDialog, {
      data: data
    });
  }

  ngOnInit(): void {
    this.store.select('ratingComposite')
      .pipe(
        map((state: any) => {
          this.totalPage = state.totalPage;
          this.pageSize = state.pageSize;
          this.currentPage = state.currentPage;
          this.listSettingRatingComposite = state.ratingComposite
        }
        ))
      .subscribe()
  }

  ngAfterContentInit(): void {
    this.store.dispatch(new RatingCompositeFetchStart(this.ratingCompositeSetting))
  }

  onPaginateChange(event: any) {
    let copyObj = {...this.ratingCompositeSetting}
    copyObj.page = event.pageIndex;
    copyObj.size = event.pageSize;
    this.store.dispatch(new RatingCompositeFetchStart(copyObj))
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['./rating-composite.component.scss']
})

export class DialogElementsExampleDialog {


  temporary: any
  constructor
    (
      public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: IRatingComposite
    ) { 
      this.temporary = {
        id: data.id,
        CompositeRating: data.CompositeRating,
        Ihrr: data.Ihrr.toString(),
        Control: data.Control.toString(),
        Composite: data.Composite.toString(),
        Status: data.Status
      }
     }

  
  // constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
