import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEnterpriseRoutingModule } from './manage-enterprise-routing.module';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { OpenTicketsComponent } from './ticket-management/open-tickets/open-tickets.component';
import { AllTicketsComponent } from './ticket-management/all-tickets/all-tickets.component';
import { EnterpriseOnboardedComponent } from './enterprise-onboarded/enterprise-onboarded.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { ManageEnterpriseComponent } from './manage-enterprise.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TicketManagementComponent, 
    OpenTicketsComponent, 
    AllTicketsComponent, 
    EnterpriseOnboardedComponent, 
    PaymentManagementComponent, 
    ManageEnterpriseComponent
  ],
  imports: [
    CommonModule,
    ManageEnterpriseRoutingModule,
    NgxPaginationModule
  ]
})
export class ManageEnterpriseModule { }
