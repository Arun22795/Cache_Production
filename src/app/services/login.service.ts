import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpService } from '@services/http.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  detectModal$: BehaviorSubject<string> = new BehaviorSubject('');
    
    setModal(data) {
        this.detectModal$.next(data)
    }

  getLoginCredentials(data) {

    return new Promise((resolve,reject)=> {
          const url =
          environment.host + 'account/'+ environment.apiVersion.login +'login';
        let body = {
          email : data.email,
          password : data.password,
          // useADAuth: false
        };
        
      this.httpService.post(url, body,true).toPromise().then((res)=> {
        resolve(res)
      }).catch((rejectRes) =>{
        reject(rejectRes);
      });

    });
   
  }


getLoginCredentialsFirst(data) {

  return new Promise((resolve,reject)=> {
        const url =
        environment.host + 'account/'+ environment.apiVersion.login +'login';
      let body = {
        email : data.email,
        password : data.password,
        useADAuth: false
      };


      const showLoader: boolean = true;
      
  this.httpService.post(url, body,showLoader).toPromise().then((res)=> {
    resolve(res)
  });

  })
 
}



getLoginCredentialsSecond(data) {

  return new Promise((resolve,reject)=> {
        const url =
        environment.host + 'account/'+ environment.apiVersion.login +'login';
      let body = {
        email : data.email,
        password : data.password,
        useADAuth: false
      };
      
  this.httpService.post(url, body,false).toPromise().then((res)=> {
    resolve(res)
  });

  })
 
}

getLoginCredentialsThird(data) {

  return new Promise((resolve,reject)=> {
        const url =
        environment.host + 'account/'+ environment.apiVersion.login +'login';
      let body = {
        email : data.email,
        password : data.password,
        useADAuth: false
      };
      
  this.httpService.post(url, body,false).toPromise().then((res)=> {
    resolve(res)
  });

  })
 
}

}
