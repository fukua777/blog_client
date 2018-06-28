import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class AppIntercerptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const reqUrl = req.clone({
            url: `${environment.apiBase}${req.url}`
        });
        return next.handle(reqUrl);
    }
}
