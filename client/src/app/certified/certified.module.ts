import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertifiedRoutingModule } from './certified-routing.module';
import { AreaComponent } from './citizen/area/area.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './citizen/list/list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AreaCertifiedComponent } from './certified/area-certified/area-certified.component';
import { AddCategoryComponent } from './certified/add-category/add-category.component';
import { AddOptionComponent } from './certified/add-option/add-option.component';
import { CreateComponent } from './citizen/create/create.component';
import { MaterialModule } from '../material/material/material.module';
import { AreaAdministratorComponent } from './administrator/area-administrator/area-administrator.component';
import { CreateAdministratorComponent } from './administrator/create-administrator/create-administrator.component';
import { ListAdministratorComponent } from './administrator/list-administrator/list-administrator.component';
import { AddCategoryCertifiedComponent } from './certified/add-category-certified/add-category-certified.component';


@NgModule({
  declarations: [
    CreateComponent,
    AreaComponent,
    AddOptionComponent,
    ListComponent,
    AreaCertifiedComponent,
    AddCategoryComponent,
    DashboardComponent,
    AddOptionComponent,
    AreaAdministratorComponent,
    CreateAdministratorComponent,
    ListAdministratorComponent,
    AddCategoryCertifiedComponent,
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    CertifiedRoutingModule
  ],
  exports: [
    AreaComponent,
    ListComponent,
    CreateComponent,
    AddCategoryComponent,
    AreaCertifiedComponent,
    AddCategoryComponent,
    AddOptionComponent,
    CreateComponent,
    DashboardComponent,
    AreaAdministratorComponent,
    CreateAdministratorComponent,
    ListAdministratorComponent,
    AddCategoryCertifiedComponent
  ]
})
export class CertifiedModule { }
