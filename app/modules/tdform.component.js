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
var TDForms = (function () {
    function TDForms() {
        this.fname = "Angular 2";
        this.lname = "Tutorials";
        this.age = 23;
        this.designation = "tutor";
        this.address = {
            address1: "Local area",
            city: "Chennai",
            pincode: "123456"
        };
    }
    TDForms.prototype.submitFormData = function (value) {
        console.log(value);
    };
    TDForms.prototype.checkFormValid = function (obj) {
        var returnObj = {};
        if (obj.touched && !obj.valid) {
            return {
                'alert': true,
                'alert-danger': true
            };
        }
        return returnObj;
    };
    TDForms = __decorate([
        core_1.Component({
            selector: "tdf-form",
            templateUrl: './view/tdfForms.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TDForms);
    return TDForms;
}());
exports.TDForms = TDForms;
//# sourceMappingURL=tdform.component.js.map