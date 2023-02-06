import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {LocalgetItem} from "../../utils/helpers";

@Injectable({
  providedIn: 'root'
})


export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let auth_token = JSON.parse(LocalgetItem("users"))
    if (auth_token && auth_token._token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${auth_token._token}`
        }
      });
    }

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
        if (err.status == 401) {
          localStorage.clear()
          this.router.navigate(['/login']);
        }

      }));
  }
}
