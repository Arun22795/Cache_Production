import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '@services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToasterService } from '@services/toaster.service'
import { Subscription } from 'rxjs';
import { LabelsService } from '@services/labels.service';
import { storage } from 'src/app/storage/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {

  loginForm: FormGroup;
  labelSubcribe: Subscription;
  showAlertModal: boolean;
  isDirty: boolean;
  labels: any = {};

  isLoginRequried: boolean;

  inputModal: {
    title: string;
    content: string;
    okLabel: string;
    cancelLabel: string;
  }

  constructor(
    private router: Router,
    private labelsService: LabelsService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService
  ) { }

  ngOnInit(): void {
    this.isLoginRequried = true;

    this.labelSubcribe = this.labelsService.getLabelsData().subscribe((values) => {
      this.labels = values;
      console.log('Labels', this.labels);
    });

    this.loginForm = this.formBuilder.group({
      userName: [null],
      password: [null]
    })
  }

  ngOnChanges() {
    this.showAlertModal = false;
  }

  async login() {
    this.isDirty = true;
    if (this.loginForm.invalid) {
      this.loginForm.reset();
      return
    }
    this.inputModal = {
      title: 'Login Details',
      content: '',
      okLabel: 'OK',
      cancelLabel: 'cancel'
    }

    console.log(this.loginForm.value)
    const data = {
      email: this.loginForm.value.userName,
      password: this.loginForm.value.password,
      longTermToken: true
    }
    // if(!this.loginForm.value.userName){
    //   this.showAlertModal = true;

    //   this.router.navigate(['/login/fail'])
    //   this.toasterService.showError('Please Enter the Username','')
    //   return;
    // }
    // if(!this.loginForm.value.password){

    //   this.router.navigate(['/login/fail'])
    //   this.showAlertModal = true;
    //   this.toasterService.showError('Please Enter the Password','')
    //   return;
    // }
    let getLoginData;
    try {
      getLoginData = await this.loginService.getLoginCredentials(data);
      console.log('getLoginData', getLoginData)
      if (getLoginData['token']) {
        localStorage.setItem('token', getLoginData['token']);
        localStorage.setItem('loginRequired', `${this.isLoginRequried}`);
        this.router.navigate(['/dashboard'])
      }
    } catch (err) {
      console.log("Error", err);
      //this.showAlertModal = true;
      this.toasterService.showError('User Name & Password mismatching', 'Login Failed');
      this.loginForm.reset();
      this.isDirty = false;
    }

  }

  okData() {
    this.showAlertModal = false;
  }

  cancelData() {
    this.showAlertModal = false;
  }

  ngOnDestroy() {
    this.labelSubcribe.unsubscribe();
  }

}
