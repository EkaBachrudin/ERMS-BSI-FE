import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtRoutingModule } from './ct-routing.module';
import { DcorHeadComponent } from './dcor-head/dcor-head.component';
import { SorhComponent } from './sorh/sorh.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DcorOfficerComponent } from './dcor-officer/dcor-officer.component';
import { ModalAddCtComponent } from './dcor-officer/modal-add-ct/modal-add-ct.component';
import { ModalAddKeyProcessComponent } from './dcor-officer/modal-add-key-process/modal-add-key-process.component';

@NgModule({
  declarations: [
    DcorHeadComponent,
    DcorOfficerComponent,
    SorhComponent,
    ModalAddCtComponent,
    ModalAddKeyProcessComponent,
  ],
  imports: [
    CommonModule,
    CtRoutingModule,
    SharedModule
  ]
}) 
export class CtModule { }
