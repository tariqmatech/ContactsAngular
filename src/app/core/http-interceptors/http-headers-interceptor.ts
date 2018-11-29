import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

import { AppGlobals } from '../../app.global'

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

    constructor(public appGlobals: AppGlobals) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestHeaders = req.clone({
            headers: new HttpHeaders({           
                "AuthenticationToken": this.appGlobals.AuthenticationToken,
                "Authorization": this.appGlobals.Authorization,
            })
        });
        //send the newly created request
        return next.handle(requestHeaders)
            .catch((error, caught) => {
                //intercept the respons error and displace it to the console
                console.log("Error Occurred");
                console.log(error);
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}