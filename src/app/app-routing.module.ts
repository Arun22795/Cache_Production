import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CacheComponent } from './cache/cache.component';
const routes: Routes = [
  {
    path: 'cache',
    component:CacheComponent
  },
  {
    path:'check',
    loadChildren: './check-cache/check-cache.module#CheckCacheModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
