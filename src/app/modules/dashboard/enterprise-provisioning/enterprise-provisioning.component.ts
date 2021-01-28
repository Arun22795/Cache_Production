import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LabelsService } from '@services/labels.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationsService } from '@services/validations.service'

@Component({
  selector: 'app-enterprise-provisioning',
  templateUrl: './enterprise-provisioning.component.html',
  styleUrls: ['./enterprise-provisioning.component.css']
})
export class EnterpriseProvisioningComponent implements OnInit, OnDestroy {


  labelSubcribe: Subscription;
  validationSubscribe: Subscription;
  labels: any;
  isDirty: boolean;
  enterpriseProvisionForm: FormGroup;

  planData = [
    {
      id: 1,
      name: 'Basic'
    },
    {
      id: 2,
      name: 'Professional'
    },
    {
      id: 3,
      name: 'Enterprise'
    },
    {
      id: 4,
      name: 'Custom'
    }
  ]

  accountStatusData = [
    {
      id:1,
      name:'Active'
    },
    {
      id:2,
      name:'Inactive'
    }
  ]

  billingTypeData = [

    {
      id: 1,
      name: 'Type1'
    },

    {
      id: 2,
      name: 'Type2'
    },

    {
      id: 3,
      name: 'Type3'
    }
  ]
  paymentTypeData = [

    {
      id: 1,
      name: 'Type1'
    },

    {
      id: 2,
      name: 'Type2'
    },

    {
      id: 3,
      name: 'Type3'
    }
  ]

  validations: any;

  constructor(private router: Router, private labelsService: LabelsService,private validationsService: ValidationsService) { }

  ngOnInit(): void {

    this.labelSubcribe = this.labelsService.getLabelsData().subscribe((values) => {
      this.labels = values;
      console.log('Labels', this.labels)
    });

    this.validationSubscribe = this.validationsService.getValidationsData().subscribe((values)=> {
      this.validations = values;
    })


    this.enterpriseProvisionForm = new FormGroup({
      enterpriseName: new FormControl(''),
      businessOwnerEmail: new FormControl(''),
      plan: new FormControl(null),
      accountStatus: new FormControl(null),
      billingType: new FormControl(null),
      paymentType: new FormControl(null),
      journey: new FormControl(''),
      campaign:new FormControl(''),
      encap:new FormControl(''),
      agent:new FormControl('')
    })

  }

  goToDashboard() {

    this.router.navigateByUrl('dashboard')
  }

  ngOnDestroy() {

    this.labelSubcribe.unsubscribe();
    this.validationSubscribe.unsubscribe();
  }

}
