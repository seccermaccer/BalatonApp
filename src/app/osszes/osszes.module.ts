import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsszesRoutingModule } from './osszes-routing.module';
import { OsszesComponent } from './osszes.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    OsszesComponent
  ],
  imports: [
    CommonModule,
    OsszesRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class OsszesModule { }
