import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ReplaySubject, map } from "rxjs";
import { User } from "../_models/user";

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    
    private currentUserSource = new ReplaySubject<User | null>(1);
    currentUser$ = this.currentUserSource.asObservable();
    
    private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    private loginPath = "https://localhost:7096/api/auth/login";
    private registerPath = "https://localhost:7096/api/auth/register";
    
    constructor(private http: HttpClient){}

    logIn(loginModel: string) {    
        return this.http.post<User>(this.loginPath, loginModel, {headers: this.httpHeaders}).pipe(
            map((response: User) => {
                if(response) {
                    console.log(response);
                    localStorage.setItem('user', JSON.stringify(response));
                    this.currentUserSource.next(response);
                }
            })
        );
    }

    register(registerModel: string) {
        return this.http.post<User>(this.registerPath, registerModel, {headers: this.httpHeaders}).pipe(
             map((user: User) => {
                if(user){
                    localStorage.setItem('user', JSON.stringify(user));
                    this.currentUserSource.next(user);
                }
             })
        )
    }

    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }

    setCurrentUser(user: User) {
        this.currentUserSource.next(user)
    }
}