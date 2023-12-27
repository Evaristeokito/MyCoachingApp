import {AbstractControl,ValidatorFn} from "@angular/forms";

export default class Validation {
    static match(controlName : string,checkcontrolName:string): ValidatorFn {
        return (controls : AbstractControl)=> {
            const control = controls.get(controlName);
            const checkcontrol = controls.get(checkcontrolName);

            if (checkcontrol?.errors && !checkcontrol.errors['matching']){
                return null;
            }

            if(control?.value !== checkcontrol?.value){
                controls.get(checkcontrolName)?.setErrors({matching :true});
                return {matching : true};
            }else {
                return null ;
            }
        };
    }
}
