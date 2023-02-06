import { Component, OnInit, AfterContentInit, Inject, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { map } from 'rxjs/operators';
import { DcorApproveStart, DcorFetchStart } from 'src/app/state/store/actions/rcsa/dcor.action';
import { Details, IDcor } from 'src/app/models/rcsa/dcor/dcor.model';
import { IRatingComposite } from 'src/app/models/rcsa/RatingComposite/RatingComposite.model';
import { RatingCompositeFetchStart } from 'src/app/state/store/actions/rcsa/RatingComposite.action';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RatingCompositeFilterInterface } from '../maintance/tabs/rating-composite/types/ratingComposite.interface';

import { RcsaByIDFetchStart } from 'src/app/state/store/actions/rcsa/rcsaByID.action';
import { DcorFilterInterface, DcorInterface, DetailByIDFilterInterface, DetailByIDInterface } from '../dcor-head-rcsa/types/dcor.interface';
import { DcorHeadService } from '../dcor-head-rcsa/services/dcor-head.service';
@Component({
  selector: 'app-sorh-rcsa',
  templateUrl: './sorh-rcsa.component.html',
  styleUrls: ['./sorh-rcsa.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SorhRcsaComponent  {
 
}
