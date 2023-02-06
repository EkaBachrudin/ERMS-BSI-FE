import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedRoutingModule } from './led-routing.module';
import { PemutusComponent } from './pemutus/pemutus.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PengusulComponent } from './pengusul/pengusul.component';
import { PembukuComponent } from './pembuku/pembuku.component';
import { VerifikatorComponent } from './verifikator/verifikator.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddLed } from './pengusul/pengusul.component';
import { LedMaintenanceComponent } from './led-maintenance/led-maintenance.component';
import { AddRiskIssue } from './led-maintenance/led-maintenance.component';
import { AddCause } from './led-maintenance/led-maintenance.component';
import { AddDampakFinancial } from './led-maintenance/led-maintenance.component';
import { AddDampakNonFinancial } from './led-maintenance/led-maintenance.component';
import { AddUnitPembukuan } from './led-maintenance/led-maintenance.component';
import { AddGlPembukuanKro } from './led-maintenance/led-maintenance.component';
import { AddRecovery } from './pengusul/pengusul.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditLed } from './pengusul/pengusul.component';
@NgModule({
  declarations: [
    PemutusComponent,
    PengusulComponent,
    PembukuComponent,
    VerifikatorComponent,
    AddLed,
    LedMaintenanceComponent,
    AddRiskIssue,
    AddCause,
    AddDampakFinancial,
    AddDampakNonFinancial,
    AddUnitPembukuan,
    AddGlPembukuanKro,
    AddRecovery,
    EditLed,
  ],
  imports: [
    CommonModule,
    LedRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
})
export class LedModule {}
