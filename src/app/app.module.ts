import { NgModule, PLATFORM_ID, APP_ID, Inject  } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { AppGlobals } from './app.global';

// Http Interceptors and Error Handling services
import { httpInterceptorProviders } from './core/http-interceptors/index';
import { HttpErrorHandler } from './core/services/common/http-error-handler.service';

import { routingAppComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './add-contact/add-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    routingAppComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpErrorHandler,
    AppGlobals,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
