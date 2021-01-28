import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.css']
})
export class EnterpriseListComponent implements OnInit {

  enterpriseData: any = [];
  page: number = 1;
  itemsPerPage: number = 10;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {

    for (let i = 0; i <= 50; i++) {
      this.enterpriseData.push(
        {
          id: i + 1,
          enterpriseName: "Textaz",
          ownerInfo: "John",
          subscriptionInfo: "In Trial",
          accountStatus: "Active",
          paymentStatus: "Paid",
          nextRenewalDate: "20/12/2020",
          createdOn: "20/11/2020"
        }
      )
    }
    console.log('enterpriseData', this.enterpriseData);
  }

  onChangeRow(event) {
    this.itemsPerPage = event.target.value;
  }

  newEnterprise() {
    this.route.navigateByUrl('create-enterprise')
  }

  navigateToProvision() {
    this.route.navigateByUrl('dashboard/enterprise-provisioning')
  }
}
