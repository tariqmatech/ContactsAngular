import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppGlobals } from '../../app.global';
import { Response, Login, } from '../models/index';
import { HttpErrorHandler, HandleError } from './index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private appGlobals: AppGlobals,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AppSetupService');
  }

  getAppSetupService(): Observable<Response<Login>> {
    return this.http.get<Response<Login>>(this.appGlobals.postLogin, {withCredentials:true})
    .pipe(map((response: Response<Login>) => response));
    //.map((response: Response<AppSetup>) => response); 
  }

}
