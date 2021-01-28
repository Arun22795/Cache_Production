import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { OpenTicketsComponent } from './ticket-management/open-tickets/open-tickets.component';
import { AllTicketsComponent } from './ticket-management/all-tickets/all-tickets.component';
import { EnterpriseOnboardedComponent } from './enterprise-onboarded/enterprise-onboarded.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { ManageEnterpriseComponent } from './manage-enterprise.component';

const routes: Routes = [

  {
    path: '',
    component: ManageEnterpriseComponent,
    children: [
      {
        path: 'onboard',
        component: EnterpriseOnboardedComponent
      },
      {
        path: 'tickets',
        component: TicketManagementComponent,
        children: [
          {
            path: '',
            component: AllTicketsComponent
          },
          {
            path: 'open-tickets',
            component: OpenTicketsComponent
          },
        ]
      },
      {
        path: 'payment',
        component: PaymentManagementComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEnterpriseRoutingModule { }
