import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { ControlFetchStart } from 'src/app/state/store/actions/rcsa/Control.action';
import { DeptHeadCreateStart } from 'src/app/state/store/actions/rcsa/DeptHead.action';
import { IhrrFetchStart } from 'src/app/state/store/actions/rcsa/Ihrr.action';
import { RatingCompositeFetchStart } from 'src/app/state/store/actions/rcsa/RatingComposite.action';
import Swal from 'sweetalert2';
import { postScore } from '../../../dcor-head-rcsa/types/dcor.interface';
import { IhrrFilterInterface } from '../../../maintance/tabs/ihrr/types/ihrr.interface';
import { RatingCompositeFilterInterface } from '../../../maintance/tabs/rating-composite/types/ratingComposite.interface';
import { DataTableDeptHeadRcsa } from '../../dept-head-rcsa.component';
import {ImpactFetchStart} from "../../../../../state/store/actions/rcsa/Impact.action";


@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.scss']
})
export class RiskAssessmentComponent implements OnInit,AfterContentInit {
  private allowUpdate = false;
  ngAfterContentInit() {
    this.riskAssessmentForm.get("ihrrScore").valueChanges.subscribe(e => {
      if (this.allowUpdate && this.datas.control){
        this.checkCompositeRating(e, this.datas.control)
        this.allowUpdate = false
      }
    })
    this.store.dispatch(new ImpactFetchStart(0, 10));
  }

  datas: any  = {
    id: this._data.id,
    let1: this._data.let1,
    page: this._data.page,
    rcsaId: this._data.IdRcsa,
    let2: this._data.let2,
    keycontrol: this._data.keycontrol,
    descriptionItem: this._data.descriptionItem,
    ketentuan: this._data.ketentuan,
    ihrr: this._data.ihrr?.toString(),
    likelihood: this._data.likelihood?.toString(),
    impact: this._data.impact?.toString(),
    control: this._data.control?.toString(),
    rating: this._data.rating?.toString(),
    keyrisk: this._data.keyrisk,
    keyprocess: this._data.keyprocess,
  };
  status: any = false;
  ihrrSetting: IhrrFilterInterface = {
    page: 0,
    size: 5,
    likelihood: "",
    impact: "",
  }
  ratingCompositeSetting: RatingCompositeFilterInterface = {
    page: 0,
    size: 10,
    ihrr: "",
    control: "",
  }
  ihrrRating: string;
  controlRating: string;
  compositeRating: string;
  impactList : any[]

  riskAssessmentForm: FormGroup;
  constructor(
    private store: Store<AppState>,
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DataTableDeptHeadRcsa>,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {

  }
  ngOnInit(): void {
      this.store.select('Ihrr')
        .pipe(
          map((data: any) => {
            if (data.Ihrr) {
              data.Ihrr.map((item) => {
                if(item.likelihood == this._data.likelihood && this._data.impact == item.impact){
                  this.datas.ihrr = item.ihrr;
                  this.ihrrRating = item.ihrrRating
                  this.riskAssessmentForm.controls['ihrrScore'].setValue(item.ihrr);

                }else if(item.likelihood == this.datas.likelihood && this.datas.impact == item.impact){
                  this.datas.ihrr = item.ihrr;
                  this.ihrrRating = item.ihrrRating
                  this.riskAssessmentForm.controls['ihrrScore'].setValue(item.ihrr);
                }
              })
            }
          })
        ).subscribe();
    this.store.select('impact').pipe(
      map((data: any) => {
        if(data.Impact){
           this.impactList = data.Impact
        }
      })
    ).subscribe()
      this.store.select('ratingComposite')
        .pipe(
          map((state: any) => {
            if (state.ratingComposite) {
              state.ratingComposite.map((item) => {
                if(item.control == this._data.control && item.ihrr == this._data.ihrr){
                    this.datas.rating = item.composite;
                    this.compositeRating = item.compositeRating;
                    this.riskAssessmentForm.controls['compositeScore'].setValue(item.composite);
                 }else if(item.control == this.datas.control && this.datas.ihrr == item.ihrr){
                  this.datas.rating = item.composite;
                  this.compositeRating = item.compositeRating;
                  this.riskAssessmentForm.controls['compositeScore'].setValue(item.composite);

                }
              })
            }
          }
          ))
        .subscribe()
    this.riskAssessmentForm = this._formBuilder.group({
      keyprocess: [this.datas?.keyprocess, Validators.required],
      keyrisk: [this.datas?.keyrisk, Validators.required],
      likelihood: [this.datas?.likelihood, Validators.required],
      impact: [this.datas?.impact, Validators.required],
      ihrrScore: [this.datas.ihrr, Validators.required],
      keycontrol: [this.datas?.keycontrol, Validators.required],
      control: [this.datas?.control, Validators.required],
      compositeScore: [this.datas?.rating, Validators.required],
    })
    if(this._data.status.toLowerCase().search('rejected') != -1 || this._data.status == null){
      this.status = false
      if (this.datas.ihrr != null && this.datas.control != null && this.datas.rating != null) {
        this.checkIhrrRating(this.datas.likelihood, this.datas.impact)
        this.checkControlRating(this.datas.control)
      }
      if (this.datas.ihrr != null && this.datas.control != null) {
        this.checkCompositeRating(this.datas.ihrr, this.datas.control)
      }
    }else{
      this.status = true
      if (this.datas.ihrr != null && this.datas.control != null && this.datas.rating != null) {
        this.checkIhrrRating(this.datas.likelihood, this.datas.impact)
        this.checkControlRating(this.datas.control)
      }
      if (this.datas.ihrr != null && this.datas.control != null) {
        this.checkCompositeRating(this.datas.ihrr, this.datas.control)
      }
    }

  }

  optionLikelihood(event) {
    this.datas.likelihood = event.value;
    this.checkIhrrRating(event.value, this.datas.impact)

  }
  optionImpact(event) {
    this.datas.impact = event.value;
    this.checkIhrrRating(this.datas.likelihood, event.value)

  }
  getTooltipText(idx){
    let description = this.impactList[idx -1]

    return `financial: ${description.description.financial} \n
    reputational: ${description.description.reputational} \n
    regulatory compliance: ${description.description.regulatoryCompliance} \n
    legal: ${description.description.legal} \n
    staff: ${description.description.staff} \n
    kriminal: ${description.description.kriminal} \n
    customerService: ${description.description.customerService} \n`;

  }
  optionControl(event) {
    this.datas.control = event.value;
    this.checkControlRating(this.datas.control)
    this.checkCompositeRating(this.datas.ihrr, this.datas.control)

  }

  checkIhrrRating(likelihood, impact) {
    this.allowUpdate =  true
     this.store.dispatch(new IhrrFetchStart({ ...this.ihrrSetting, likelihood: likelihood, impact: impact }));
  }

  checkCompositeRating(ihrr, control) {
    return this.store.dispatch(new RatingCompositeFetchStart({ ...this.ratingCompositeSetting, ihrr: ihrr, control: control }));
  }

  checkControlRating(control) {
    this.store.select('settingControl').pipe(
      map((data: any) => {
        if (data.control) {
          data.control.filter((item) => {
            if (item.score == control) {
              return this.controlRating = item.rating;
            }
          })
        }
      })
    ).subscribe()
    this.store.dispatch(new ControlFetchStart(0, 10));
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  approved() {

    this.dialogRef.close();
    let postScore: postScore = {
      page: this._data.page,
      idRcsa: this._data.IdRcsa,
      id: this.datas.id,
      ihrr: this.datas.ihrr,
      likelihood: this.datas.likelihood,
      impact: this.datas.impact,
      control: this.datas.control,
      rcsa : this.datas.rcsa,
      rating: this.datas.rating,
    }

    this.store.dispatch(new DeptHeadCreateStart(postScore));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'RCSA has been approved',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  impcatPopup(): void {
    alert('test')
  }
}
