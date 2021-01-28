import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '@services/utility.service';
import { EnterpriseApiService } from '@services/enterprise-api.service';
import { ToasterService } from '@services/toaster.service';

@Component({
  selector: 'app-enterprise-onboarded',
  templateUrl: './enterprise-onboarded.component.html',
  styleUrls: ['./enterprise-onboarded.component.css']
})
export class EnterpriseOnboardedComponent implements OnInit {

  enterprises: Array<any> = [];
  page: number = 1;
  itemsPerPage: number = 6;

  totalCount:number = 0;

  constructor(
    private router: Router,
    private utilityService: UtilityService,
    private enterpriseApiService: EnterpriseApiService,
    private toasterService: ToasterService
  ) { }

 async ngOnInit() {
   
    // for (let i = 0; i <= 50; i++) {
    //   if (i % 2 == 0){
    //     this.enterprises.push(
    //       {
    //         buttonName: 'Active',
    //         title: 'Textaz',
    //         userName: 'John Benny'+ i,
    //         due: 'Paid',
    //         date1: '25-May-2020 / 01:20 PM',
    //         date2: '09-Jan-2019 / 08:31 AM',
    //         viewDetails: 'View Details'

    //       }
    //     )
    //   } else {
    //     this.enterprises.push(
    //       {
    //         buttonName: 'Deactive',
    //         title: 'Textaz',
    //         userName: 'Benny' + i,
    //         due: 'Over-duew',
    //         date1: '25-May-2020 / 01:20 PM',
    //         date2: '09-Jan-2019 / 08:31 AM',
    //         viewDetails: 'View Details'
    
    //       }
    //     )
    //   }

    // }

    this.getOnBoardListData()
   

  }


  async getOnBoardListData(pageIndex?:any) {


    let onBoardList;
    try{

     onBoardList = await this.enterpriseApiService.getOnBoardEnterpriseList(pageIndex);

     console.log(onBoardList)

     const apiError = onBoardList.Error;

     const apiResponse = onBoardList.ProcessVariables;
 
     if(apiResponse.error.code == '0' && apiError == '0') {

        this.itemsPerPage = onBoardList['ProcessVariables']['perPage'];
        let totalPages =  onBoardList['ProcessVariables']['totalPages'];
        this.totalCount = Number(this.itemsPerPage) * Number(totalPages);
        this.enterprises = onBoardList['ProcessVariables']['enterpriseDetail'] || [];

     } else {
      this.toasterService.showError('Enteprise Onboard Fetch API Failed','');
     }
     

    }catch(err) {
      console.log("Error", err);
      // this.toasterService.showError('Enterprise Onboard API Failed','');

    }


  }

  createEnterprise() {
    this.router.navigateByUrl('create-enterprise');
    this.utilityService.setCreateEnterprisePathHistory('fromOnboard');
  }

  viewEnterprise(enterpriseId) {

    this.utilityService.setCreateEnterprisePathHistory('fromOnboard');
    this.router.navigateByUrl(`enterprise/${enterpriseId}`);
  }

  onChangeRow(event) {
    this.itemsPerPage = event.target.value;
  }

  async pageChangeEvent(event) {
    console.log(event)
    this.page = Number(event);
    this.getOnBoardListData(this.page)
  }

}
