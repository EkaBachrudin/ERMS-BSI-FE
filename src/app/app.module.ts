import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { actionReducerMap } from './state/app.state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './state/effect/auth/auth.effect';
import { DirectorateEffect } from './state/effect/rcsa/directorate.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from './state/router/RouterSerializer';
import { GroupEffect } from './state/effect/rcsa/group.effect';
import { RoleEffect } from './state/effect/rcsa/role.effect';
import { userEffect } from './state/effect/user/user.effect';
import { userDelegateEffect } from './state/effect/userDelegate/userDelegate.effect';
import { KeyRIskEffect } from './state/effect/rcsa/keyRisk.effect';
import { KeyProcessJaringanEffect } from './state/effect/rcsa/keyProcessJaringan.effect';
import { KeyProcessKantorPusatEffect } from './state/effect/rcsa/keyProcessKantorPusat.effect';
import { KeyControlEffect } from './state/effect/rcsa/keyControl.effect';
import { KetentuanEffect } from './state/effect/rcsa/ketentuan.effect';
import { RiskLibrbrayEffect } from './state/effect/rcsa/riskLibrary.effect';
import { SegmenEffect } from './state/effect/rcsa/segmen.effect';
import { LetEffect } from './state/effect/rcsa/let/let.effect';
import { SettingTopRiskEffect } from './state/effect/rcsa/settingTopRisk.effect';
import { TopRiskEffect } from './state/effect/rcsa/TopRisk.effect';
import { DepartmentEffect } from './state/effect/rcsa/department.effect';
import { LikeHoodEffect } from './state/effect/rcsa/LikeHood.effect';
import { IhrrEffect } from './state/effect/rcsa/Ihrr.effect';
import { RatingCompositeEffect } from './state/effect/rcsa/RatingComposite.effect';
import { ImpactEffect } from './state/effect/rcsa/Impact.effect';
import { ControlEffect } from './state/effect/rcsa/Control.effect';
import { DcorEffect } from './state/effect/rcsa/dcor.effects';
import { GroupHeadEffect } from './state/effect/rcsa/GroupHead.effect';
import { DeptHeadEffect } from './state/effect/rcsa/DeptHead.effect';
import { RcsaByIDEffect } from './state/effect/rcsa/rcsaByID.effect';
// import { HttpErrorInterceptor } from './core/error/HttpErrorInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MyCustomPaginatorIntl } from './shared/components/PaginatorIntl/paginatorCustom.component';
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./core/interceptor/AuthInterceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(actionReducerMap),
    EffectsModule.forRoot([
      AuthEffect,
      DirectorateEffect,
      GroupEffect,
      RoleEffect,
      userEffect,
      userDelegateEffect,
      KeyRIskEffect,
      KeyProcessJaringanEffect,
      KeyProcessKantorPusatEffect,
      KeyControlEffect,
      KetentuanEffect,
      RiskLibrbrayEffect,
      SegmenEffect,
      LetEffect,
      SettingTopRiskEffect,
      SegmenEffect,
      TopRiskEffect,
      DepartmentEffect,
      LikeHoodEffect,
      IhrrEffect,
      RatingCompositeEffect,

      ImpactEffect,
      ControlEffect,
      DcorEffect,
      GroupHeadEffect,
      DcorEffect,
      DeptHeadEffect,
      RcsaByIDEffect,
    ]),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
