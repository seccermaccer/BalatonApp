import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'bejelentkezes', loadChildren: () => import('./bejelentkezes/bejelentkezes.module').then(m => m.BejelentkezesModule) }, { path: 'regisztracio', loadChildren: () => import('./regisztracio/regisztracio.module').then(m => m.RegisztracioModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
