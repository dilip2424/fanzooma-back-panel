import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../service/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("adm_token");
    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`),
    });

    return next.handle(authReq).pipe(
      catchError((err) => {
        console.log("Err :: ", err);
        if (err instanceof HttpErrorResponse) {
          console.log({ err });
          // Check for unauthorized user
          if (err.status == 401) {
            this.authService.currentUserSubject.next(undefined);
            this.router.navigate(["/login"]);
          }
          // this.errorMessage = err.error?.message ?? 'Something went wrong';
          return throwError(err);
        } else {
          console.log("Client error");
        }
      })
    );
  }
}
