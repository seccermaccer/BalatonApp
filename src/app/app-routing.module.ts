import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bejelentkezes', loadChildren: () => import('./bejelentkezes/bejelentkezes.module').then(m => m.BejelentkezesModule) },
  { path: 'regisztracio', loadChildren: () => import('./regisztracio/regisztracio.module').then(m => m.RegisztracioModule) },
  { path: 'osszes', loadChildren: () => import('./osszes/osszes.module').then(m => m.OsszesModule) },
  { path: 'zamardi', loadChildren: () => import('./zamardi/zamardi.module').then(m => m.ZamardiModule) },
  { path: 'balatonfured', loadChildren: () => import('./balatonfured/balatonfured.module').then(m => m.BalatonfuredModule) },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
