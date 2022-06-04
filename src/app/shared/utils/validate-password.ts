import { AbstractControl, ValidatorFn } from '@angular/forms';
export class ValidatePassword {
    static MatchPassword(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);
            if (checkControl?.errors && !checkControl.errors['matchPassword']) {
                return null;
            }
            if (control?.value !== checkControl?.value) {
                controls.get(checkControlName)?.setErrors({ matchPassword: true });
                return { matchPassword: true };
            } else {
                return null;
            }
        };
    }
}