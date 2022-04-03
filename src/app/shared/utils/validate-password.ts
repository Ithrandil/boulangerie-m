import { AbstractControl } from '@angular/forms';
export class ValidatePassword {
    static MatchPassword(abstractControl: AbstractControl) {
        console.log(abstractControl);
        //   TODO: aller récuperer le match fait sur numa ou csf
        // let password = abstractControl.get('password').value;
        // let confirmPassword = abstractControl.get('confirmPassword').value;
        //  if (password != confirmPassword) {
        //      abstractControl.get('confirmPassword').setErrors({
        //        MatchPassword: true
        //      })
        // } else {
        //   return null
        // }
    }

}