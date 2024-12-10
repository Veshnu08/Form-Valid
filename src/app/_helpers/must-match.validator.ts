
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    // Return if controls do not exist
    if (!control || !matchingControl) {
      return null;
    }

    // Set or clear the error
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }

    return null;
  };
}
