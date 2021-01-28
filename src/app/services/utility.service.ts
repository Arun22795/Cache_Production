import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private route: Router,
    private ngxUiLoaderService: NgxUiLoaderService,
    private httpService: HttpService
  ) { }

  detectSideNavbar$: BehaviorSubject<string> = new BehaviorSubject('');
  createEnterprisePathHistory$: BehaviorSubject<string> = new BehaviorSubject('');

  setSideNavbarRoute(data) {
    this.detectSideNavbar$.next(data);
  }

  setCreateEnterprisePathHistory(path) {
    this.createEnterprisePathHistory$.next(path);
  }

  logOut() {
    this.httpService.logOut().subscribe(
      (res) => {
        this.ngxUiLoaderService.stop();
      },
      (error) => {
        this.ngxUiLoaderService.stop();
      }
    );
    this.removeAllLocalStorage();
  }

  removeAllLocalStorage() {
    localStorage.clear();    
    this.route.navigateByUrl('/login');
    console.clear();  
  }
}
