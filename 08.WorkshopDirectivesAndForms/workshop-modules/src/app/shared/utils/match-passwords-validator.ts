import { ValidatorFn } from "@angular/forms";


export function matchPasswordsValidator(passwordControlName: string, rePasswordControlName: string): ValidatorFn {

    return (control) => {

        const passFormControl = control.get(passwordControlName);
        const rePassFormControl = control.get(rePasswordControlName);

        console.log({ passFormControl, rePassFormControl });
        const areMatching = passFormControl?.value == rePassFormControl?.value;

        console.log({areMatching});

        return areMatching ? null : { matchPasswordsValidator: true };
    };

}