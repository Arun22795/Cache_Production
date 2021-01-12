import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckCacheRoutingModule } from './check-cache-routing.module';
import { CacheComponent } from './cache/cache.component';

@NgModule({
  imports: [
    CommonModule,
    CheckCacheRoutingModule
  ],
  declarations: [CacheComponent]
})
export class CheckCacheModule { }
