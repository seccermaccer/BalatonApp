import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZamardiRoutingModule } from './zamardi-routing.module';
import { ZamardiComponent } from './zamardi.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ZamardiComponent
  ],
  imports: [
    CommonModule,
    ZamardiRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ZamardiModule { }
