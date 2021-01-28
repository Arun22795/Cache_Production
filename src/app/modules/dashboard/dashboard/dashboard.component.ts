import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '@services/utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: Router,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
  }

  OnCreateNewEnterprise() {
    this.route.navigateByUrl('create-enterprise');
    this.utilityService.setCreateEnterprisePathHistory('fromDashboard');
  }

  OnEnterpriseProvision() {
    this.route.navigateByUrl('dashboard/enterprise-provisioning');
  }

}
