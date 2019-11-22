import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-login/app-login.module').then(m => m.AppLoginModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./app-profile/app-profile.module').then(m => m.AppProfileModule)
  },
  {
    path: 'member-list',
    loadChildren: () => import('./app-dating/app-dating.module').then(m => m.AppDatingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
