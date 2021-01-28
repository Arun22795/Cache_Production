import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertModalComponent } from './modules/shared/alert-modal/alert-modal.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/container/container.module').then(m => m.ContainerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
