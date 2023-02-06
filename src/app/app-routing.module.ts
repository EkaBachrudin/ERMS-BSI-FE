import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './module/auth/auth.module';
import { LoginComponent } from './module/auth/login/login.component';
import { CtModule } from './module/ct/ct.module';
import { IamModule } from './module/iam/iam.module';
import { LedModule } from './module/led/led.module';
import { RcsaModule } from './module/rcsa/rcsa.module';
import { KriModule } from './module/kri/kri.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { OpeningModule } from './module/opening/opening.module';
import { AuthGuard } from './utils/auth.guard';
import { ErrorsModule } from './module/errors/errors.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  {
    path: 'errors',
    loadChildren: () => ErrorsModule,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./module/dashboard/dashboard-routing.module').then(
            (mod) => DashboardModule
          ),
      },
      {
        path: 'opening',
        loadChildren: () =>
          import('./module/opening/opening-routing.module').then(
            (mod) => OpeningModule
          ),
      },
      {
        path: 'rcsa',
        loadChildren: () =>
          import('./module/rcsa/rcsa-routing.module').then((mod) => RcsaModule),
      },
      {
        path: 'led',
        loadChildren: () =>
          import('./module/led/led-routing.module').then((mod) => LedModule),
      },
      {
        path: 'iam',
        loadChildren: () =>
          import('./module/iam/iam.module').then((mod) => IamModule),
      },
      {
        path: 'ct',
        loadChildren: () =>
          import('./module/ct/ct.module').then((mod) => CtModule),
      },
      {
        path: 'kri',
        loadChildren: () =>
          import('./module/kri/kri.module').then((mod) => KriModule),
      },
    ],
  },
  
  { path: '**', redirectTo: '/errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
