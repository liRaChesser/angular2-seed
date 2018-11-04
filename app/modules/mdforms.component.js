"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var MDForms = (function () {
    function MDForms(fb) {
        this.fb = fb;
        this.userForm = fb.group({
            fname: ['Angular', [common_1.Validators.required, common_1.Validators.minLength(2), common_1.Validators.maxLength(20)]],
            lname: ["MDF"],
            age: [23],
            address: fb.group({
                address1: ["LocalArea"],
                city: ["chennai"],
                pinCode: ["123456"]
            })
        });
    }
    MDForms.prototype.submitFormData = function (formData) {
        console.log(formData.value);
    };
    MDForms = __decorate([
        core_1.Component({
            selector: "mdf-form",
            templateUrl: './view/mdfForms.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], MDForms);
    return MDForms;
}());
exports.MDForms = MDForms;
//# sourceMappingURL=mdforms.component.js.map