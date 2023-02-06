import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcorHeadKriComponent } from './dcor-head-kri/dcor-head-kri.component';
import { DeptHeadKriComponent } from './dept-head-kri/dept-head-kri.component';
import { GroupHeadKriComponent } from './group-head-kri/group-head-kri.component';
import { KriMaintenanceComponent } from './kri-maintenance/kri-maintenance.component';
const routes: Routes = [
  {
    path: 'dept-head',
    component: DeptHeadKriComponent,
    data: {
      breadCum: 'Group',
      title: 'Key Risk Indicator',
      name: 'Key Risk Indicator',
    },
  },
  {
    path: 'dcor-head',
    component: DcorHeadKriComponent,
    data: {
      breadCum: 'Group',
      title: 'Key Risk Indicator',
      name: 'Key Risk Indicator',
    },
  },
  {
    path: 'group-head ',
    component: GroupHeadKriComponent,
    data: {
      breadCum: 'Regional',
      title: 'Key Risk Indicator',
      name: 'Key Risk Indicator',
    },
  },
  {
    path: 'maintenance',
    component: KriMaintenanceComponent,
    data: {
      breadCum: 'Maintenance',
      title: 'Key Risk Indicator',
      name: 'Maintenance Key Risk Indicator',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KriRoutingModule {}
