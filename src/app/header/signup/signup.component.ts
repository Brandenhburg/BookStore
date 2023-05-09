import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "src/app/services/auth.service";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [AuthService]
})
export class SignUpComponent implements OnInit {

    titles: readonly string[] = ["Mr", "Mrs", "Miss", "Ms"];


    signUpForm = new FormGroup({
        title: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });

    
    submitted = false;

    constructor(private authService: AuthService, private fb: FormBuilder){}


    onSubmit() {
        let rsult = this.authService.signUp(JSON.stringify(this.signUpForm.value, null, 2)).subscribe(
          {
            next(response){
              console.log(response.body);
            },
            error(err){

            }
          }
        )
        // if(this.registerForm.invalid) return;
        
        console.log(JSON.stringify(this.signUpForm.value, null, 2));
    }

    
    ngOnInit(): void {
        
        this.signUpForm = this.fb.group(
            {
              title: ['', Validators.required],
              firstName: ['',
                [
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(25),
                  Validators.pattern('^[a-zA-Z]+$')
                ]
              ],
                
              lastName: ['',[
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(25),
                  Validators.pattern('^[a-zA-Z]+$')
                ]
              ],
              email: ['', [Validators.required, Validators.email]],
              password: ['',[
                  Validators.required,
                  Validators.minLength(6),
                  Validators.maxLength(40)
                ]
              ],
              //confirmPassword: ['', Validators.required],
            }
            // {
            //   validators: [Validation.match('password', 'confirmPassword')]
            // }
        );   
        
    }

    get form(): {[key: string]: AbstractControl} {
      return this.signUpForm.controls;
    }

    get title() {
      return this.signUpForm.get('title');
    }
    get firstName()  {
        return this.signUpForm.get('firstName');
    }
    get lastName()  {
        return this.signUpForm.get('lastName');
    }
    get email()  {
        return this.signUpForm.get('email');
    }
    get password()  {
        return this.signUpForm.get('password');
    }
  }