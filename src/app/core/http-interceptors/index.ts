/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpHeaderInterceptor } from './http-headers-interceptor';
import { EnsureHttpsInterceptor } from './ensure-https-interceptor';
import { LoggingInterceptor } from './logging-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
];
