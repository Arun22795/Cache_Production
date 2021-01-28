import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LabelsService } from '@services/labels.service';
import { ValidationsService } from '@services/validations.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UploadService } from '@services/upload.service'
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

import Cropper from 'cropperjs';
import { UtilityService } from '@services/utility.service';
import { EnterpriseApiService } from '@services/enterprise-api.service';
import { ToasterService } from '@services/toaster.service';

@Component({
  selector: 'app-new-enterprise',
  templateUrl: './new-enterprise.component.html',
  styleUrls: ['./new-enterprise.component.css']
})
export class NewEnterpriseComponent implements OnInit {

  labelSubcribe: Subscription;
  validationSubscribe: Subscription;
  interCheck: Subscription;
  pathHistorySubscribe: Subscription;

  openSelect: boolean;
  isDirty: boolean;
  enterpriseForm: FormGroup;
  showType: string = 'add';

  labels: any;
  validations: any;
  selectedCar: number;
  cropper: Cropper;

  localUrl: any = 'assets/image/peacock.png';
  showCropModal: boolean;
  pathHistory: string;
  cancelButtonUrl: string;
  country: string = "in";
  countryCode: string = "91";

  setCountryFlag: string = 'in';

  isDisable: boolean;

  appiyoDriveImageId: string;

  getAccountNumberValidation: {
    rule?: any;
    msg?: string;
  }[];

  getCreditCardNumberValidation: {
    rule?: any;
    msg?: string;
  }[];

  constructor(
    private router: Router,
    private labelsService: LabelsService,
    private validationsService: ValidationsService,
    private uploadService: UploadService,
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer,
    private utilityService: UtilityService,
    private enterpriseApiService: EnterpriseApiService,
    private toasterService:ToasterService,
    private activatedRoute: ActivatedRoute
  ) { }


  keyword = 'name';
  serviceTypeData = [
    {
      id: 1,
      name: 'Service Type1'
    },
    {
      id: 2,
      name: 'Service Type2'
    }
  ];

  countryData = [

    {
      id: 1,
      name: 'India'
    },
    {
      id: 2,
      name: 'USA'
    },
    {
      id: 3,
      name: 'China'
    },
    {
      id: 4,
      name: 'London'
    },
    {
      id: 5,
      name: 'Singapore'
    },
    {
      id: 6,
      name: 'Malaysia'
    }
  ]

  roleData = [
    {
      id: 1,
      name: 'Officer'
    },
    {
      id: 2,
      name: 'Adminstrator Officer in Madras'
    }
  ]

  companySizeData = [
    {
      id: 1,
      name: 'Size1'
    },
    {
      id: 2,
      name: 'Size2'
    }

  ]

  url: any = 'assets/image/peacock.png';

  money: number;
  getSymbol: string = 'INR';

  fileCrop: File;

  enterpriseId: string;



  ngOnInit(): void {
    this.money = 1980;
    this.labelSubcribe = this.labelsService.getLabelsData().subscribe((values) => {
      this.labels = values;
      console.log('Labels', this.labels)
    });

    this.validationSubscribe = this.validationsService.getValidationsData().subscribe((values) => {
      this.validations = values;
    });

    this.activatedRoute.params.subscribe((data)=> {
      this.enterpriseId = data['enterpriseId']
    })

    this.pathHistorySubscribe = this.utilityService.createEnterprisePathHistory$.subscribe((path: string) => {
      this.pathHistory = path;
      if (this.pathHistory === 'fromDashboard') {
        this.cancelButtonUrl = 'dashboard';
      } else if (this.pathHistory === 'fromOnboard') {
        this.cancelButtonUrl = 'enterprises/onboard';
      } else {
        this.cancelButtonUrl = 'enterprises/onboard';
      }
    })



    this.enterpriseForm = new FormGroup({
      // enterpriseName: new FormControl(''),
      // businessOwnerName: new FormControl(''),
      // businessEmail: new FormControl(''),
      // phoneNumber: new FormControl(''),
      // webAddress: new FormControl(''),
      // cin: new FormControl(''),
      // business_PAN: new FormControl(''),
      // gst: new FormControl(''),
      // tan: new FormControl(''),
      // billingAddress: new FormControl(''),
      // companySize: new FormControl(null),
      // jobRole: new FormControl(null),
      // country: new FormControl(null),
      // serviceType: new FormControl(null)

      companyName: new FormControl(''),
      industry: new FormControl(''),
      about: new FormControl(''),
      contactPerson: new FormControl(''),
      jobTitle: new FormControl(''),
      businessPhone: new FormControl(''),
      panNumber: new FormControl(''),
      tanNumber: new FormControl(''),
      gstNumber: new FormControl(''),
      accountNumber: new FormControl(''),
      cardNumber: new FormControl(''),
      ifscCode: new FormControl(''),

    })

    this.getAccountNumberValidation = this.accountNumberValidation();

    this.getCreditCardNumberValidation = this.creditCardNumberValidation();

    if (this.enterpriseId){
          this.showType = 'view';
          this.isDisable = true;
          this.getEnterpriseDetails()
    }

  }

  accountNumberValidation() {

    const accountNumber = [
      {
        rule: (data) => {
          return Number(data)?false:true;
        },
        msg: 'Please provide valid account number',
      },
      {
        rule: (data) => {

          const checkLength = String(data).length;
          return checkLength < 8 ? true : false;
        },
        msg: 'Please provide minimum 8 digit account number',
      }
    ];
    return accountNumber;

  }

  creditCardNumberValidation() {

    const creditCardNumber = [
      {
        rule: (data) => {
          return Number(data)?false:true;
        },
        msg: 'Please provide valid credit card number',
      },
      {
        rule: (data) => {

          const checkLength = String(data).length;
          return checkLength < 13 ? true : false;
        },
        msg: 'Please provide minimum 13 digit credit card number',
      }
    ];
    return creditCardNumber;

  }

  async getEnterpriseDetails() {

    
    const enterpriseIdData: any = await this.enterpriseApiService.fetchParticularEnterpriseId(this.enterpriseId);

    console.log('Enterprise Data', enterpriseIdData)

    const apiError = enterpriseIdData.Error;

    const apiResponse = enterpriseIdData.ProcessVariables;

    if(apiResponse.error.code == '0' && apiError == '0') {
      const enterpriseData = apiResponse.enterpriseDetail;
      
      this.setFormValue(enterpriseData)
    }else {
      this.toasterService.showError(apiResponse.error.message,'')
    }

  }



  setFormValue(data) {
    const removeSpaceInCardNumber = String(data['cardNumber']).replace(/ +/g, "");

    if(data['logo']){
      let dataUrl = `${environment.host}${environment.driveLocation}${data['logo']}`
      this.localUrl = dataUrl;
      this.appiyoDriveImageId = data['logo']
    }

    if(data['iconUrl']){
      let dataUrl = `${environment.host}${environment.driveLocation}${data['iconUrl']}`
      this.localUrl = dataUrl;
      this.appiyoDriveImageId = data['iconUrl']
    }

    this.setCountryFlag = data['country'] || 'in';

    this.enterpriseForm.patchValue({
      companyName: data['enterpriseName'] || '',
      industry: data['industry'] || '',
      about: data['about'] || '',
      contactPerson: data['contactPerson'] || '',
      jobTitle: data['jobTitle'] || '',
      businessPhone: data['businessPhone'] || '',
      panNumber: data['panNumber'] || '',
      tanNumber: data['tanNumber'] || '',
      gstNumber: data['gstNumber'] || '',
      accountNumber: data['accountNumber'] || '',
      cardNumber: removeSpaceInCardNumber || '',
      ifscCode: data['ifscCode'] || '',
    })


  }


  goToDashboard() {
    this.router.navigateByUrl('dashboard')
  }

  selectEvent(item) {
    // do something with selected item
    console.log(item);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log(val);
  }

  onFocused(e) {
    // do something when input is focused
    console.log(e);
  }

  async onCreateEnterprise() {
    console.log(this.enterpriseForm.value)

    if(this.enterpriseForm.invalid) {
      this.isDirty = true;
      return;
    }

  let data= {
      "companyName": this.enterpriseForm.value.companyName,
      "industry": this.enterpriseForm.value.industry,
      "about": this.enterpriseForm.value.about,
      "contactPerson": this.enterpriseForm.value.contactPerson,
      "jobTitle": this.enterpriseForm.value.jobTitle,
      "businessPhone": this.enterpriseForm.value.businessPhone,
      "panNumber": this.enterpriseForm.value.panNumber,
      "tanNumber": this.enterpriseForm.value.tanNumber,
      "gstNumber": this.enterpriseForm.value.gstNumber,
      "accountNumber": this.enterpriseForm.value.accountNumber,
      "cardNumber": this.enterpriseForm.value.cardNumber,
      "ifscCode": this.enterpriseForm.value.ifscCode,
      "countryCode": this.countryCode,
      "country": this.country,
      "activate": true,
      "password": "twixor@123",
      "iconUrl": this.appiyoDriveImageId,
      "logo": this.appiyoDriveImageId
    }

    console.log("Result obj", data);

    let onBoardEnterprise;
    try{
      onBoardEnterprise =  await this.enterpriseApiService.onBoardEnterprise(data);
      console.log('onBoardEnterprise', onBoardEnterprise)

      const apiError = onBoardEnterprise.Error;

      const apiResponse = onBoardEnterprise.ProcessVariables;

      if(apiResponse.error.code == '0' && apiError == '0') {

        this.isDirty=false;
        this.enterpriseForm.reset()
        this.localUrl = 'assets/image/peacock.png';
        this.toasterService.showSuccess('Enterprise Created Successfully','')
        this.router.navigateByUrl('enterprises/onboard')
      }

    }catch(err){
      console.log("Error", err);
      // this.toasterService.showError('Enterprise Onboard API Failed','');
    }

  }

  async onUpdateEnterprise() {

    if(this.enterpriseForm.invalid) {
      this.isDirty = true;
      return;
    }

    const data = {
      "enterpriseId": this.enterpriseId,
      "enterpriseName": this.enterpriseForm.value.companyName,
      "industry": this.enterpriseForm.value.industry,
      "about": this.enterpriseForm.value.about,
      "contactPerson": this.enterpriseForm.value.contactPerson,
      "jobTitle": this.enterpriseForm.value.jobTitle,
      "businessPhone": this.enterpriseForm.value.businessPhone,
      "panNumber": this.enterpriseForm.value.panNumber,
      "tanNumber": this.enterpriseForm.value.tanNumber,
      "gstNumber": this.enterpriseForm.value.gstNumber,
      "accountNumber": this.enterpriseForm.value.accountNumber,
      "cardNumber": this.enterpriseForm.value.cardNumber,
      "ifscCode": this.enterpriseForm.value.ifscCode,
      "countryCode": this.countryCode,
      "country": this.country,
      "activate": true,
      "password": "twixor@123",
      "iconUrl": this.appiyoDriveImageId,
      "logo": this.appiyoDriveImageId

    }
    const response: any = await this.enterpriseApiService.updateEnterpriseDetails(data)

    console.log('enterprise update',response)

    const apiError = response.Error;

    const apiResponse = response.ProcessVariables;

    if(apiResponse.error.code == '0' && apiError == '0') {
      this.isDisable = true;
      this.showType = 'view'
      this.toasterService.showSuccess(apiResponse.error.message,'')
    }else {
      this.toasterService.showError(apiResponse.error.message,'')
    }

  }

  onEditEnterprise() {
    this.showType = 'update';
    this.isDisable = false;
  }

  onCancel() {
    this.router.navigateByUrl(`${this.cancelButtonUrl}`);
  }



  /** UPLOAD APPIYO DRIVE  START*/


  uploadToAppiyoDrive(file: File) {
    return new Promise(async (resolve, reject) => {

      const modifiedFile = Object.defineProperty(file, 'name', {
        writable: true,
        value: file.name
      });
      modifiedFile.name = `${new Date().getTime()}-${modifiedFile.name}`;
      const uploadResponse = await this.uploadService.uploadToAppiyoDrive(modifiedFile);
      resolve(uploadResponse)

    })
  }

  /** UPLOAD APPIYO DRIVE END */


  /** Image Select */

  async onFileSelect(event) {

    console.log(event)
    this.showCropModal = true;
    // this.cropper.reset()
    // this.onSelectFile(event)
    const file: File = event.target.files[0];

    console.log('file name', file)
    this.onSelectFile(event); // local image

    const fileName = file.name.split('.')[0];
    setTimeout(() => {
      this.cropImage(fileName)
    }, 500)

  }


  onSelectFile(event) { // called each time file input changes

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.localUrl = event.target.result;
      }
    }


  }

  /** CROP IMAGE */

  async uploadCropImage() {

    console.log(this.fileCrop)
    let response = await this.uploadToAppiyoDrive(this.fileCrop);

    console.log("Upload Response", response)

    if (response['info']) {
      let dataUrl = `${environment.host}${environment.driveLocation}${response['info']['id']}`
      this.localUrl = dataUrl;
      this.appiyoDriveImageId = response['info']['id'];

      this.showCropModal = false;

      console.log('Local URL', this.localUrl)
    }
  }


  async cropImage(fileName) {

    console.log('file name *********', fileName)
    const image: any = document.getElementById('image');
    let $this = this;
    this.cropper = new Cropper(image, {
      aspectRatio: NaN,
      crop(event) {
        let contentType;
        this.cropper.getCroppedCanvas().toBlob((blob) => {
          contentType = blob.type;

          const dataURL = this.cropper.getCroppedCanvas().toDataURL()
          console.log('Data Url', contentType)
          const fileType = $this.dataURLtoFile(dataURL, `${fileName}-${new Date().getTime()}.${contentType.split('/')[1]}`)

          console.log('File Type', fileType)

          $this.fileCrop = fileType;
        })
      },
    });

  }

  /** GET DOCS DRIVE PATH LOCATION */

  loadImage(url: string): Observable<any> {
    return this.httpClient
      .get(url, { responseType: 'blob' })
      .pipe(map((e) => {

        this.url = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))
      }));
  }


  dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }



  clearCrop() {
    this.showCropModal = false;
    this.localUrl = 'assets/image/peacock.png';
    this.cropper.destroy()
  }

  ngOnDestroy() {
    this.labelSubcribe.unsubscribe();
    this.validationSubscribe.unsubscribe();
    this.pathHistorySubscribe.unsubscribe();
  }

  telInputObject(obj) {
    console.log(obj['j']);
    const code = obj['j'];
    obj.setCountry(code);
  }

  getNumber(e){
    console.log("getNumber");
    console.log(e);
  }

  onCountryChange(e){
    console.log("Country", e)
    this.country = e.iso2;
    this.countryCode = e.dialCode;
  }


}
