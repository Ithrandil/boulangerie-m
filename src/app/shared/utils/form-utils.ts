import { FormGroup } from "@angular/forms";
import { FormErrorMessages } from "@models/formErrorMessages";
// TODO: Refactoriser après implémentation des différents formulaire, voir si c'est toujours nécessaire
export class FormUtils {
  static GetErrorMessage(controlName: string, form: FormGroup, errorMessages: FormErrorMessages, controlGroup?: string): string {
    const errors = [];
    if (controlGroup) {
      if (
        form.get(controlGroup)?.get(controlName)?.hasError('required')
      ) {
        return errorMessages[controlName].required;
      }
      if (form.get(controlGroup)?.get(controlName)?.errors) {
        for (const key of Object.keys(
          form.get(controlGroup)?.get(controlName)?.errors as {}
        )) {
          errors.push(errorMessages[controlName][key]);
        }
      }
    } else {
      if (form.get(controlName)?.hasError('required')) {
        return errorMessages[controlName].required;
      }
      if (form.get(controlName)?.errors) {
        for (const key of Object.keys(
          form.get(controlName)?.errors as {}
        )) {
          errors.push(errorMessages[controlName][key]);
        }
      }
    }
    return errors.join(', ');
  }
}