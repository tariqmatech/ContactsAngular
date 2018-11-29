import { FormGroup, AbstractControl, FormBuilder, FormControl } from '@angular/forms';

import { ParseError } from '@angular/compiler';

export class Common {

    public responseParse(response): any {
        var result;
        switch (response.Status) {
            case AjaxStatus.Success: { // 1
                result = { Status: response.Status, Data: response.Data };
                break;
            }
            case AjaxStatus.Error: { // 2
                result = { Status: response.Status, Data: response.Message };
                console.log(response.Message);
                break;
            }
            case AjaxStatus.Validation: { // 3
                if (response.ValidationMessages != undefined) {
                    var validationkey = Object.keys(response.ValidationMessages)[0];
                    var validationMessage = response.ValidationMessages[validationkey]
                    var errors = [{ name: validationkey, error: validationMessage }];
                    result = { Status: response.Status, Data: errors };
                }
                break;
            }
            case AjaxStatus.Redirect: { // 4
                result = { Status: response.Status, Data: response.Data };
                break;
            }
            default: { // Default
                result = { Status: response.Status, Data: null };
                break;
            }
        }
        return result;
    }

    public resetFieldErrors(name: string, form): void {
        form.get(name).setErrors(null);
    }


    public findFieldControl(field: string, form: FormGroup): AbstractControl {
        let control: AbstractControl;
        if (field === 'base') {
            control = form;
        } else if (form.contains(field)) {
            control = form.get(field);
        } else if (field.match(/_id$/) && form.contains(field.substring(0, field.length - 3))) {
            control = form.get(field.substring(0, field.length - 3));
        } else if (field.indexOf('.') > 0) {
            let group = form;
            field.split('.').forEach((f) => {
                if (group.contains(f)) {
                    control = group.get(f);
                    if (control instanceof FormGroup) group = control;
                } else {
                    control = group;
                }
            })
        } else {
            // Field is not defined in form but there is a validation error for it, set it globally
            control = form;
        }
        return control;
    }

    public getErrors(control: AbstractControl): FormError[] {
        return Object.keys(control.errors)
            .filter((error) => control.errors[error])
            .map((error) => {
                let params = control.errors[error];
                return {
                    error: error,
                    params: params === true || params == {} ? null : params
                };
            });
    }

    public fetchFieldErrors(e: any): any {
        const errors = {};
        {
            let name: string = e.error;
            delete e.error;
            errors[name] = e;
        }
        console.log(e);
        return errors;
    }
}

export enum AjaxStatus {
    Success = 1,
    Error = 2,
    Validation = 3,
    Redirect = 4
}

export interface FormError {
    error: string;
    params: any;
}


export class CommonValidation {
    EmailValidator(control: FormControl): any {
        let EMAIL_REGEXP = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return {
                "emailvalidate": { message: "Invalid Email Address" }
            }
        }
        return null;
    }
}