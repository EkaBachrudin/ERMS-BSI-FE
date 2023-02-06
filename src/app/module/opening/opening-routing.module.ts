import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningComponent } from './opening/opening.component';

const routes: Routes = [
  {
    path: 'grand-launching',
    component: OpeningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpeningRoutingModule {}
