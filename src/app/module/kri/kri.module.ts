import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { KriRoutingModule } from './kri-routing.module';
import {
  DeptHeadKriComponent,
  DownloadKri,
  EditKri,
} from './dept-head-kri/dept-head-kri.component';
import { GroupHeadKriComponent } from './group-head-kri/group-head-kri.component';
import { AddJaringanKri, AddKeyRiskIndicator, KriMaintenanceComponent, SubmitAllKri, SubmitKeyRiskIndicator } from './kri-maintenance/kri-maintenance.component';
import { DcorHeadKriComponent } from './dcor-head-kri/dcor-head-kri.component';

@NgModule({
  declarations: [
    DeptHeadKriComponent,
    GroupHeadKriComponent,
    EditKri,
    DownloadKri,
    KriMaintenanceComponent,
    DcorHeadKriComponent,
    AddJaringanKri,
    AddKeyRiskIndicator,
    SubmitAllKri,
    SubmitKeyRiskIndicator
  ],
  imports: [CommonModule, KriRoutingModule, SharedModule],
})
export class KriModule {}
