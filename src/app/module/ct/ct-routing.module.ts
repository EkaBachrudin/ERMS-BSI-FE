import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcorHeadComponent } from './dcor-head/dcor-head.component';
import { DcorOfficerComponent } from './dcor-officer/dcor-officer.component';
import { SorhComponent } from './sorh/sorh.component';

const routes: Routes = [
  {
    path:'dcorhead',
    component:DcorHeadComponent,
    data:{
      title: 'DCOR Head'
    }
  },
  {
    path:'dcorofficer',
    component:DcorOfficerComponent,
    data:{
      title: 'DCOR Officer'
    }
  },
  {
    path:'sorh',
    component:SorhComponent,
    data:{
      title: 'SORH'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CtRoutingModule { }
