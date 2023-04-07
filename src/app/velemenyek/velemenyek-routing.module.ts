import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VelemenyekComponent } from './velemenyek.component';

const routes: Routes = [{ path: '', component: VelemenyekComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VelemenyekRoutingModule { }
