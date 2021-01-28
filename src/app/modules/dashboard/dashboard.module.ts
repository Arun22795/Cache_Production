import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { OverViewComponent } from './over-view/over-view.component';
import { SubcriptionPaymentComponent } from './over-view/subcription-payment/subcription-payment.component';
import { TicketsChartComponent } from './over-view/tickets-chart/tickets-chart.component';
import { EnterpriseListComponent } from './over-view/enterprise-list/enterprise-list.component';
import { EnterpriseProvisioningComponent } from './enterprise-provisioning/enterprise-provisioning.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RetailerStatusComponent } from './dashboard/dashboard-lazy/retailer-status/retailer-status.component';
import { DashboardLazyComponent } from './dashboard/dashboard-lazy/dashboard-lazy.component';
import { ChartLazyComponent } from './dashboard/dashboard-lazy/retailer-status/chart-lazy/chart-lazy.component'

@NgModule({
  declarations: [
    OverViewComponent,
    SubcriptionPaymentComponent,
    TicketsChartComponent,
    EnterpriseListComponent,
    EnterpriseProvisioningComponent,
    DashboardComponent,
    RetailerStatusComponent,
    DashboardLazyComponent,
    ChartLazyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ChartsModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPaginationModule
  ],
  entryComponents: [
    SubcriptionPaymentComponent,
    TicketsChartComponent,
    DashboardLazyComponent,
    ChartLazyComponent
  ]
})
export class DashboardModule { }
