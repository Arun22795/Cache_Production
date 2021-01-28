import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import  { AuthInterceptorService } from './services/auth-interceptor.service';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ManageEnterpriseModule } from './modules/manage-enterprise/manage-enterprise.module';

import { NgSelectModule } from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';

import {Ng2TelInputModule} from 'ng2-tel-input';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FormsModule,
    ChartsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    ManageEnterpriseModule,
    NgSelectModule,
    Ng2TelInputModule,
    ToastrModule.forRoot({
      // preventDuplicates: true,
      // positionClass:'toast-top-center'
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
