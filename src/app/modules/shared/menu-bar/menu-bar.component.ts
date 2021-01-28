import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '@services/utility.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  isOpenAccordian: boolean;

  constructor(
    private router: Router,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {

  }

  onOverView() {
    this.router.navigateByUrl('dashboard')
  }

  onTicketManagement() {
    this.utilityService.setSideNavbarRoute('tickets');
    this.router.navigateByUrl('enterprises/tickets')
  }

  onEnterpriseOnboarded() {
    this.utilityService.setSideNavbarRoute('onboard');
    this.router.navigateByUrl('enterprises/onboard');
  }

  onPaymentManagement() {
    this.utilityService.setSideNavbarRoute('payment');
    this.router.navigateByUrl('enterprises/payment')
  }

  logOut() {
    this.utilityService.logOut();
  }

}
