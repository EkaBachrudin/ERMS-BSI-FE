import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './ngmaterial/ngmaterial.module';



@NgModule({
  declarations: [
    ContentComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
    
  ],
  exports: [
    ContentComponent,
    MaterialModule,
  ],
})
export class SharedModule { }
