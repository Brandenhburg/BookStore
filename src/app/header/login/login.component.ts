import { HttpClient, HttpStatusCode, JsonpInterceptor } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, tap } from "rxjs";


import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})
export class LoginComponent implements OnInit{


    httpResponse?: string

    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    })

    constructor(private authService: AuthService, private fb: FormBuilder){}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: new FormControl('',[Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    login(){
        let result = this.authService.logIn(JSON.stringify(this.loginForm.value, null, 2))
            .subscribe({
                next(value) {
                    console.log(value.body);
                },
                error(){

                }
            });
            
    }
}