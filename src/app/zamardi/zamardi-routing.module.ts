import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZamardiComponent } from './zamardi.component';

const routes: Routes = [{ path: '', component: ZamardiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZamardiRoutingModule { }
