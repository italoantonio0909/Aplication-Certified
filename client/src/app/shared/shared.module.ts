import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { CertifiedModule } from './../certified/certified.module';
import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [NavigationComponent,DialogConfirmationComponent],
  imports: [
    CommonModule,
    CertifiedModule,
    MaterialModule,
    SharedRoutingModule,
  ],
  exports:[
    NavigationComponent,
    DialogConfirmationComponent
  ]
})
export class SharedModule { }
