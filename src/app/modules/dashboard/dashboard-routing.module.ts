import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverViewComponent } from './over-view/over-view.component';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { EnterpriseProvisioningComponent } from './enterprise-provisioning/enterprise-provisioning.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'fail',
        component: AlertModalComponent
      }
    ]
  },
  {
    path: 'enterprise-provisioning',
    canActivate:[AuthGuard],
    component: EnterpriseProvisioningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
