import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


import { AuthService } from "src/app/_services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
   
    @Output() submitForm = new EventEmitter();
    @Output() cancelLogin = new EventEmitter();

    loginForm = new FormGroup({
        email: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
    })

    constructor(private authService: AuthService, private router: Router, private fb: FormBuilder){}

    ngOnInit(): void {
        
    }

    login(){
        this.authService.logIn(JSON.stringify(this.loginForm.value, null, 2)).subscribe(response => {
            console.log(response);
            this.router.navigateByUrl("");
        })
    }

    cancel() {
        this.cancelLogin.emit(false);
        this.router.navigateByUrl("");
    }

    get email()  {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }


}