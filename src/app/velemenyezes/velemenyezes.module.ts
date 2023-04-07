import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VelemenyezesRoutingModule } from './velemenyezes-routing.module';
import { VelemenyezesComponent } from './velemenyezes.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    VelemenyezesComponent
  ],
  imports: [
    CommonModule,
    VelemenyezesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class VelemenyezesModule { }
