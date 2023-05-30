import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "src/app/_services/auth.service";
import { ValidationService } from "src/app/_services/validation.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ValidationService]
})
export class RegisterComponent implements OnInit {

  titles: readonly string[] = ["Mr", "Mrs", "Miss", "Ms"];

  @Output() cancelRegister = new EventEmitter();

  signUpForm = this.fb.group(
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
            Validators.minLength(8),
            Validators.maxLength(40),
            this.validationService.passwordStrengthValidator()
          ]
        ],
        confirmPassword: ['', Validators.required,
        ]
      }, {
        validator: this.validationService.passwordConfirmationValidator
      }
  );   

  constructor(private authService: AuthService, 
    private validationService: ValidationService, 
    private router: Router,
    private fb: FormBuilder){}

    ngOnInit(): void {}

    onSubmit() {
      this.authService.register(JSON.stringify(this.signUpForm.value, null, 2)).subscribe(
        {
          next(response){
            console.log(response);
          },
          error(err){
            console.log(err.message);                 
          },
          complete(){
          }
        }
      )
        // if(this.registerForm.invalid) return;
        
    console.log(JSON.stringify(this.signUpForm.value, null, 2));
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.router.navigateByUrl("");
  }

  get form(): {[key: string]: AbstractControl} {
    return this.signUpForm.controls;
  }
  get title() {
    return this.signUpForm.get('title');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
}