import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalatonfuredComponent } from './balatonfured.component';

const routes: Routes = [{ path: '', component: BalatonfuredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalatonfuredRoutingModule { }
