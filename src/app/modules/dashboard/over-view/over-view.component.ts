import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css']
})
export class OverViewComponent implements OnInit {

  constructor(
    private route: Router,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.subcriptionPayment();
    this.ticketsChart();
    this.enterpriseList();
  }

  async subcriptionPayment() {
    this.viewContainerRef.clear();
    const { SubcriptionPaymentComponent } = await import('./subcription-payment/subcription-payment.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(SubcriptionPaymentComponent)
    );
  }

  async ticketsChart() {
    this.viewContainerRef.clear();
    const { TicketsChartComponent } = await import('./tickets-chart/tickets-chart.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(TicketsChartComponent)
    );    
  }

  async enterpriseList() {
    this.viewContainerRef.clear();
    const { EnterpriseListComponent } = await import('./enterprise-list/enterprise-list.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(EnterpriseListComponent)
    );    
  }

}
