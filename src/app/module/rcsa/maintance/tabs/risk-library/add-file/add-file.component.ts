import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { riskLibraryFetchStart } from 'src/app/state/store/actions/rcsa/riskLibrary.action';
import Swal from 'sweetalert2';
import { RiskLibraryService } from '../services/risk-library.service';
import { RiskLibraryFilterInterface } from '../types/risklib.interface';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss'],
})
export class AddFileComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddFileComponent>,
    private riskLibraryService : RiskLibraryService,
    private fb: FormBuilder,
    private Store : Store<AppState>
  ) {}
  isActive: boolean = false;
  fileToUpload: File | null = null;
  RiskLibraryFilter : RiskLibraryFilterInterface = {
    quarter : "",
    page :0,
    size : 10,
    yearOf : "",
    group : ""
  }

  form = new FormGroup({
    file: new FormControl(Validators.required),
  });

  ngOnInit(): void {}

  fileUpload(): void {
    const input = document.getElementById(
      'chooseFile'
    ) as HTMLInputElement | null;
    const filename = input?.value;
    const ext = filename.split('.').pop();

    if (ext == 'xlsx' || ext == 'xls') {
      if (/^\s*$/.test(filename)) {
        this.isActive = false;
        document.getElementById('noFile').textContent = 'No file chosen';
      } else {
        this.isActive = true;
        document.getElementById('noFile').textContent = filename.replace(
          'C:\\fakepath\\',
          ''
        );
      }
    } else {
      alert('File is invalid');
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.form.get('file');
    if (this.form.value != null) {
      
      let file: File = (<HTMLInputElement>document.getElementById('chooseFile')).files[0];
      let formData:FormData = new FormData();
      formData.append('file', file, file.name);
      console.log(formData);
      this.riskLibraryService.UploadRiskLibrary(formData).subscribe((e : any) => {
        console.log(e);
      });
    } else {
      Swal.fire({
        title: 'Invalid submit',
        text: 'must select a file',
        icon: 'error',
      }).then(() => {});
    }
    this.dialogRef.close();
    this.Store.dispatch(new riskLibraryFetchStart(this.RiskLibraryFilter))
  }
}
