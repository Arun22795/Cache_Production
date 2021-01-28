import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LoginAuthGuard } from 'src/app/guard/login-auth.guard';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {
      path: '',
      canActivate:[LoginAuthGuard],
      loadChildren: () => import('src/app/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'dashboard',
    component: ContainerComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      }
    ]
  },
  {
    path:'create-enterprise',
    component: ContainerComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('src/app/modules/create-enterprise/create-enterprise.module').then(m => m.CreateEnterpriseModule)
      }
    ]
  },
  {
    path:'enterprise/:enterpriseId',
    component: ContainerComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('src/app/modules/create-enterprise/create-enterprise.module').then(m => m.CreateEnterpriseModule)
      }
    ]
  },
  {
    path:'enterprises',
    component: ContainerComponent,
    canActivate:[AuthGuard],
    children:[
      {
          path: '',
          loadChildren: () => import('src/app/modules/manage-enterprise/manage-enterprise.module').then(m => m.ManageEnterpriseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
