import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PembukuComponent } from './pembuku/pembuku.component';
import { PemutusComponent } from './pemutus/pemutus.component';
import { PengusulComponent } from './pengusul/pengusul.component';
import { VerifikatorComponent } from './verifikator/verifikator.component';
import { LedMaintenanceComponent } from './led-maintenance/led-maintenance.component';

const routes: Routes = [
  {
    path: 'pemutus',
    component: PemutusComponent,
    data: {
      breadCum: 'Maintenance',
      title: 'Loss Event Database',
      name: 'Loss Event Database',
    },
  },
  {
    path: 'pengusul',
    component: PengusulComponent,
    data: {
      breadCum: 'Maintenance',
      title: 'Loss Event Database',
      name: 'Loss Event Database',
    },
  },
  {
    path: 'pembuku',
    component: PembukuComponent,
    data: {
      breadCum: 'Maintenance',
      title: 'Loss Event Database',
      name: 'Loss Event Database',
    },
  },
  {
    path: 'verifikator',
    component: VerifikatorComponent,
    data: {
      breadCum: 'Maintenance',
      title: 'Loss Event Database',
      name: 'Loss Event Database',
    },
  },
  {
    path: 'maintenance',
    component: LedMaintenanceComponent,
    data: {
      breadCum: 'Maintenance',
      title: 'Loss Event Database',
      name: 'Loss Event Database',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedRoutingModule {}
