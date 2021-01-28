import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit {

  isActive: boolean;

  constructor(
    private route: Router,
    private location: Location,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { 
    this.isActive = true;
  }

  ngOnInit(): void {
      this.onAllTicket();
  }

  async onOpenTicket() {
    this.isActive = true;
    this.viewContainerRef.clear();
    const { OpenTicketsComponent } = await import('./open-tickets/open-tickets.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(OpenTicketsComponent)
    );
  }

  async onAllTicket() {
    this.isActive = false;
    this.viewContainerRef.clear();
    const { AllTicketsComponent } = await import('./all-tickets/all-tickets.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(AllTicketsComponent)
    );
  }

}
