import { Component } from '@angular/core'

@Component({
    selector:"tdf-form",
    templateUrl:'./view/tdfForms.html'
})
export class TDForms{
    public fname:string="Angular 2";
    public lname:string="Tutorials";
    public age:number=23;
    public designation:string="tutor";
    public address={
        address1:"Local area",
        city:"Chennai",
        pincode:"123456"
    };
    submitFormData(value){
        console.log(value);
    }
    checkFormValid(obj){
        let returnObj:any={};
        if(obj.touched && !obj.valid){
            return {
                'alert':true,
                'alert-danger':true
            }
        } 
        return returnObj;
    }
}