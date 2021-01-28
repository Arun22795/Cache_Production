import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ChartDashboardComponent } from './charts/chart-dashboard/chart-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { CustomInputComponent } from './custom-input/custom-input.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    AlertModalComponent,
    ChartDashboardComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuBarComponent,
    AlertModalComponent,
    ChartDashboardComponent,
    CustomInputComponent
  ]
})
export class SharedModule { }
