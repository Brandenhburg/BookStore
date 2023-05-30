
import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable()
export class ValidationService{
    constructor(){}

    passwordStrengthValidator(): ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {

            const value = control.value;
    
            if(!value){
                return null;
            }
    
            const hasUpperCase = /[A-Z]+/.test(value);
            const hasLowerCase = /[a-z]+/.test(value);
            const hasNumeric = /[0-9]+./.test(value);
            const hasSpecialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value);

            //const regex = new RegExp( '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$' );
            //const isValid = regex.test(value);
   
            const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacters;

            return !passwordValid ? {passwordStrength:true} : null;
        }
    }

    passwordConfirmationValidator: ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');
      
        if (password?.value && confirmPassword?.value) {
          if (password.value !== confirmPassword.value) {
            return { passwordMismatch: true };
          }
        }
        return null;
    };
}

