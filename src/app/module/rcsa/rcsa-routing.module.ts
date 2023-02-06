import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AosmComponent } from './aosm/aosm.component';
import { ReportComponent } from './aosm/report/report.component';
import { MaintanceComponent } from './maintance/maintance.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { GroupHeadRcsaComponent } from './group-head-rcsa/group-head-rcsa.component';
import { AreaSegmenManagerComponent } from './area-segmen-manager/area-segmen-manager.component';
import { AmComponent } from './am/am.component';
import { AbcsComponent } from './abcs/abcs.component';
import { OdComponent } from './od/od.component';
import { DeptHeadComponent } from './dept-head-rcsa/dept-head-rcsa.component';
import { RbcmComponent } from './rbcm/rbcm.component';
import { SorhRcsaComponent } from '../rcsa/sorh-rcsa/sorh-rcsa.component';
import { OfficerSegmenComponent } from './officer-segmen/officer-segmen.component';
import { DcorHeadRcsaComponent } from './dcor-head-rcsa/dcor-head-rcsa.component';
import { RoleGuard } from 'src/app/utils/role.guard';
import { Role } from 'src/app/models/role';
const routes: Routes = [
  {
    path: 'aosm',
    canActivate: [RoleGuard],
    component: AosmComponent,
  },
  {
    path: 'aosm/report',
    canActivate: [RoleGuard],
    component: ReportComponent,
  },
  {
    path: 'user',
    component: UserManagementComponent,
    canActivate: [RoleGuard],
    data: {
      breadCum: 'Maintenance',
      title: 'User and Role',
      name: 'MAINTENANCE USER AND ROLE',
      role: Role.USER_ADMIN,
    },
  },
  {
    path: 'maintenance',
    component: MaintanceComponent,
    canActivate: [RoleGuard],
    data: {
      breadCum: 'Maintenance',
      title: 'Risk Issue',
      name: 'MAINTENANCE RISK LIBRARY',
      role: Role.RISK_ADMIN,
    },
  },
  {
    path: 'group-head',
    canActivate: [RoleGuard],
    component: GroupHeadRcsaComponent,
    data: {
      breadCum: 'KP',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
      role: Role.GROUP_HEAD,
    },
  },
  {
    path: 'area-segmen-manager',
    canActivate: [RoleGuard],
    component: AreaSegmenManagerComponent,
    data: {
      breadCum: 'Area',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
    },
  },
  {
    path: 'am',
    canActivate: [RoleGuard],
    component: AmComponent,
    data: {
      breadCum: 'Area',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
    },
  },
  {
    path: 'abcs',
    canActivate: [RoleGuard],
    component: AbcsComponent,
    data: {
      breadCum: 'Area',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
    },
  },
  {
    path: 'od',
    canActivate: [RoleGuard],
    component: OdComponent,
    data: {
      breadCum: 'Area',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
    },
  },
  {
    path: 'dept-head',
    canActivate: [RoleGuard],
    component: DeptHeadComponent,
    data: {
      breadCum: 'KP',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
      role: Role.DEPT_HEAD,
    },
  },
  {
    path: 'rbcm',
    canActivate: [RoleGuard],
    component: RbcmComponent,
    data: {
      breadCum: 'Area',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
    },
  },
  {
    path: 'sorh',
    canActivate: [RoleGuard],
    component: SorhRcsaComponent,
    data: {
      breadCum: 'Kantor Pusat',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
      role: Role.SORH,
    },
  },
  {
    path: 'officer-segmen',
    canActivate: [RoleGuard],
    component: OfficerSegmenComponent,
    data: {
      breadCum: 'Area',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment',
    },
  },
  {
    path: 'dcor-head',
    canActivate: [RoleGuard],
    component: DcorHeadRcsaComponent,
    data: {
      breadCum: 'Kantor Pusat',
      title: 'Risk & Control Self Assesment',
      name: 'Risk & Control Self Assesment - RISK MANAGEMENT DIRECTORATE (RMD)',
      role: Role.DCOR,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcsaRoutingModule {}
