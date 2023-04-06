import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisztracioRoutingModule } from './regisztracio-routing.module';
import { RegisztracioComponent } from './regisztracio.component';


@NgModule({
  declarations: [
    RegisztracioComponent
  ],
  imports: [
    CommonModule,
    RegisztracioRoutingModule
  ]
})
export class RegisztracioModule { }
