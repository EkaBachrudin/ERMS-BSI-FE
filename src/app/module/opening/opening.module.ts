import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningComponent } from './opening/opening.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OpeningRoutingModule } from './opening-routing.module';

@NgModule({
  declarations: [OpeningComponent],
  imports: [CommonModule, OpeningRoutingModule],
})
export class OpeningModule {}
