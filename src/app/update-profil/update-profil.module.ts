import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProfilRoutingModule } from './update-profil-routing.module';
import { UpdateProfilComponent } from './update-profil.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    UpdateProfilComponent
  ],
  imports: [
    CommonModule,
    UpdateProfilRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class UpdateProfilModule { }
