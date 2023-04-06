import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalatonfuredRoutingModule } from './balatonfured-routing.module';
import { BalatonfuredComponent } from './balatonfured.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BalatonfuredComponent
  ],
  imports: [
    CommonModule,
    BalatonfuredRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BalatonfuredModule { }
