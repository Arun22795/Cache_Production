import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import RequestEntity from '../model/request.entity';
import { ApiIdsService } from './api-ids.service';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseApiService {

  constructor(private httpService: HttpService,
    private apiService: ApiIdsService) { }

  onBoardEnterprise(entData){
    return new Promise((resolve,reject)=> {
      const processData = entData;
      const processId = this.apiService.api.onBoardEnterprise.processId;
      const workflowId = this.apiService.api.onBoardEnterprise.workflowId;
      const projectId = environment.projectIds.aggregator;
      const body: RequestEntity = {
        processId: processId,
        ProcessVariables: processData,
        workflowId: workflowId,
        projectId: projectId
      };

      console.log("Body", body);
      const url = `${environment.host}d/workflows/${workflowId}/${environment.apiVersion.api}execute?projectId=${projectId}`;

      this.httpService.post(url, body, true).toPromise().then((res)=> {
        resolve(res)
      }).catch((rejectRes) =>{
        reject(rejectRes);
      });

    });
  }

  getOnBoardEnterpriseList(pageIndex?:any) {
    return new Promise((resolve,reject)=> {
      const processId = this.apiService.api.getOnBoardEnterpriseList.processId;
      const workflowId = this.apiService.api.getOnBoardEnterpriseList.workflowId;
      const projectId = environment.projectIds.aggregator;
      const body: RequestEntity = {
        processId: processId,
        ProcessVariables: (pageIndex)?{currentPage:pageIndex}:{currentPage:1},
        workflowId: workflowId,
        projectId: projectId
      };

      const url = `${environment.host}d/workflows/${workflowId}/${environment.apiVersion.api}execute?projectId=${projectId}`;

      this.httpService.post(url, body, true).toPromise().then((res)=> {
        resolve(res)
      }).catch((rejectRes) =>{
        reject(rejectRes);
      });

    })
  }


  fetchParticularEnterpriseId(id) {

    return new Promise((resolve,reject)=> {
      const processId = this.apiService.api.fetchParticularEnterpriseId.processId;
      const workflowId = this.apiService.api.fetchParticularEnterpriseId.workflowId;
      const projectId = environment.projectIds.aggregator;
      const body: RequestEntity = {
        processId: processId,
        ProcessVariables: { enterpriseId : id },
        workflowId: workflowId,
        projectId: projectId
      };

      const url = `${environment.host}d/workflows/${workflowId}/${environment.apiVersion.api}execute?projectId=${projectId}`;

      this.httpService.post(url, body, true).toPromise().then((res)=> {
        resolve(res)
      }).catch((rejectRes) =>{
        reject(rejectRes);
      });

    })
  }

  updateEnterpriseDetails(updateData) {

    return new Promise((resolve,reject)=> {
      const processData = updateData;
      const processId = this.apiService.api.updateEnterpriseDetails.processId;
      const workflowId = this.apiService.api.updateEnterpriseDetails.workflowId;
      const projectId = environment.projectIds.aggregator;
      const body: RequestEntity = {
        processId: processId,
        ProcessVariables: processData,
        workflowId: workflowId,
        projectId: projectId
      };

      console.log("Body", body);
      const url = `${environment.host}d/workflows/${workflowId}/${environment.apiVersion.api}execute?projectId=${projectId}`;

      this.httpService.post(url, body, true).toPromise().then((res)=> {
        resolve(res)
      }).catch((rejectRes) =>{
        reject(rejectRes);
      });

    });
  }
}
