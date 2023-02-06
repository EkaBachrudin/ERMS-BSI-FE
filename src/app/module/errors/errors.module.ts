import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsRoutingModule } from './errors-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { PageAuthorizationRequiredComponent } from './page-authorization-required/page-authorization-required.component';
import { PageServerErrorComponent } from './page-server-error/page-server-error.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        PageAuthorizationRequiredComponent,
        PageServerErrorComponent
    ],
    imports: [
        CommonModule,
        ErrorsRoutingModule,
        SharedModule,
        TabsModule.forRoot()
    ],
})
export class ErrorsModule {}