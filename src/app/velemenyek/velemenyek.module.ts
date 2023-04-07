import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VelemenyekRoutingModule } from './velemenyek-routing.module';
import { VelemenyekComponent } from './velemenyek.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    VelemenyekComponent
  ],
  imports: [
    CommonModule,
    VelemenyekRoutingModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class VelemenyekModule { }
