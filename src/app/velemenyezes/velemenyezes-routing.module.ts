import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VelemenyezesComponent } from './velemenyezes.component';

const routes: Routes = [{ path: '', component: VelemenyezesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VelemenyezesRoutingModule { }
