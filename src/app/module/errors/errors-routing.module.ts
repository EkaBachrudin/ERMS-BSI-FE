import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageAuthorizationRequiredComponent } from './page-authorization-required/page-authorization-required.component';
import { PageServerErrorComponent } from './page-server-error/page-server-error.component';
import { PageForbiddenComponent } from './page-forbidden/errors.component';

const routes: Routes = [
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '401',
        component: PageAuthorizationRequiredComponent
    },
    {
        path: '500',
        component: PageServerErrorComponent
    },
    {
        path: '403',
        component: PageForbiddenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ErrorsRoutingModule {}