import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IamRoutingModule } from './iam-routing.module';
import { DcorHeadComponent } from './dcor-head/dcor-head.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GhComponent } from './gh/gh.component';
import { ParameterComponent } from './parameter/parameter.component';
import { Add, AddIamRcsa, DeptHeadIamComponent } from './dept-head-iam/dept-head-iam.component';


@NgModule({
  declarations: [
    AddIamRcsa,
    Add,
    DcorHeadComponent,
    GhComponent,
    ParameterComponent,
    DeptHeadIamComponent,
  ],
  imports: [
    CommonModule,
    IamRoutingModule,
    SharedModule
  ]
})
export class IamModule { }
