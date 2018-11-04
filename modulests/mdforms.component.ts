import { Component } from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { Validators } from '@angular/common';

@Component({
    selector:"mdf-form",
    templateUrl:'./view/mdfForms.html'
})
export class MDForms{
    /** public userForm=new FormGroup({
        fname:new FormControl("Angular", [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
        lname:new FormControl("MDF"),
        age:new FormControl(23),
        address: new FormGroup({
            address1:new FormControl("Local Area"),
            city:new FormControl("Chennai"),
            pinCode:new FormControl("123456")
        })
    });*/
    public userForm:Object;
    constructor(private fb: FormBuilder){
        this.userForm = fb.group({
            fname:['Angular',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
            lname:["MDF"],
            age:[23],
            address:fb.group({
                address1:["LocalArea"],
                city:["chennai"],
                pinCode:["123456"]
            })
        });
    }

    submitFormData(formData){
        console.log(formData.value);
    }
}