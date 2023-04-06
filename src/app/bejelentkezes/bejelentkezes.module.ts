import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BejelentkezesRoutingModule } from './bejelentkezes-routing.module';
import { BejelentkezesComponent } from './bejelentkezes.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BejelentkezesComponent
  ],
  imports: [
    CommonModule,
    BejelentkezesRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class BejelentkezesModule { }
