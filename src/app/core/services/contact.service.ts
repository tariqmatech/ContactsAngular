import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AppGlobals } from '../../app.global';
import { Response, GetAllContacts, GetList, AddContact } from '../models/index';
import { HttpErrorHandler, HandleError } from './index';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private appGlobals: AppGlobals,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AppSetupService');
  }

  GetAllContacts(): Observable<Response<GetAllContacts>> {
    return this.http.get<Response<GetAllContacts>>(this.appGlobals.getAllContacts, {withCredentials:true})
    .pipe(map((response: Response<GetAllContacts>) => response));
  }

  GetList(): Observable<Response<GetList>> {
    return this.http.get<Response<GetList>>(this.appGlobals.getList, {withCredentials:true})
    .pipe(map((response: Response<GetList>) => response));
  }
  

  postAddContactData(request): Observable<Response<AddContact>> {
    const params = new HttpParams();
    return this.http.post<Response<AddContact>>(this.appGlobals.postLogin +
      request.APIMethod, request, { params, withCredentials: true })
    .pipe(map((response: Response<AddContact>) => response));
  }
}