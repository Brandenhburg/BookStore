import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, PartialObserver } from "rxjs";

@Injectable(
    
)
export class AuthService{
    
    private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    private loginPath = "http://localhost:22587/api/auth/login";
    private registerPath = "http://localhost:22587/api/auth/register";
    
    constructor(private http: HttpClient){}

    testRequest() : Observable<HttpResponse<string>>{
        return this.http.get<HttpResponse<string>>("http://localhost:22587/api/auth/test");
    }

    logIn(loginModel: string): Observable<HttpResponse<string>>{
        
        return this.http.post<HttpResponse<string>>(this.loginPath, loginModel, {headers: this.httpHeaders});
    }

    signUp(signUpModel: string): Observable<HttpResponse<string>>{
            
        return this.http.post<HttpResponse<string>>(this.registerPath, signUpModel, {headers: this.httpHeaders});
    }
}