import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiIdsService {
  api = {
    onBoardEnterprise: {
      workflowId: '3d24ab2c54c111eb88f4727d5ac274b2',
      processId: '3e099f5c54c111eb88f4727d5ac274b2',
      projectId: environment.projectIds.aggregator
    },
    getOnBoardEnterpriseList: {
      workflowId: '31cc49545c0211eb8b6a727d5ac274b2',
      processId: '31cc49545c0211eb8b6a727d5ac274b2',
      projectId: environment.projectIds.aggregator
    },
    fetchParticularEnterpriseId: {
      workflowId: '1265687a5c0211eb8b6a727d5ac274b2',
      processId: '1265687a5c0211eb8b6a727d5ac274b2',
      projectId: environment.projectIds.aggregator
    },
    updateEnterpriseDetails: {
      workflowId: 'cd461a10596211eb890d727d5ac274b2',
      processId: 'cd461a10596211eb890d727d5ac274b2',
      projectId: environment.projectIds.aggregator
    }
  };
}
