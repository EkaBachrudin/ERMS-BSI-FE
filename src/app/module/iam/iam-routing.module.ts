import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcorHeadComponent } from './dcor-head/dcor-head.component';
import { DeptHeadIamComponent } from './dept-head-iam/dept-head-iam.component';
import { GhComponent } from './gh/gh.component';
import { ParameterComponent } from './parameter/parameter.component';

const routes: Routes = [
  {
    path: 'dcor-head',
    component: DcorHeadComponent,
    data: {
      breadCum: 'Group',
      title: 'IAM',
      name: 'ISSUE AND ACTION MANAGEMENT (IAM)',
    },
  },
  {
    path: 'gh',
    component: GhComponent,
    data: {
      breadCum: 'Group',
      title: 'IAM',
      name: 'ISSUE AND ACTION MANAGEMENT (IAM)',
    },
  },
  {
    path: 'maintenance',
    component: ParameterComponent,
    data: {
      breadCum: 'Maintenance',
      title: 'IAM',
      name: 'MAINTENANCE ISSUE AND ACTION MANAGEMENT (IAM)',
    },
  },
  {
    path: 'dept-head',
    component: DeptHeadIamComponent,
    data: {
      breadCum: 'Group',
      title: 'IAM',
      name: 'ISSUE AND ACTION MANAGEMENT (IAM)',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IamRoutingModule {}
