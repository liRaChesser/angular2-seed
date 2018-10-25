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
var ClassStyleBinding = (function () {
    function ClassStyleBinding() {
        this.bindSingleClass = true;
    }
    ClassStyleBinding.prototype.loadMultipleClasses = function () {
        var classes = {
            myClass: true,
            myClass1: true
        };
        return classes;
    };
    ClassStyleBinding.prototype.loadMultipleStyles = function () {
        var sytles = {
            'font-size': '20px',
            'text-align': 'center'
        };
        return sytles;
    };
    ClassStyleBinding = __decorate([
        core_1.Component({
            selector: "clsStyle-bind",
            template: "<div class=\"myClass3\" [class.myClass]=\"bindSingleClass\">Single Sylte Class Binding</div>\n              <div style=\"font-size:20px\" [style.color]=\"isBlue?'blue':'brown'\">Single Style Property Binding</div>\n              <div class=\"myClass3\" [ngClass]=\"loadMultipleClasses()\">Multiple Style Class Binding</div>\n              <div style=\"color:brown\" [ngStyle]=\"loadMultipleStyles()\">Multiple Style Property Binding</div>\n              ",
            styles: ["\n    .myClass{\n        color:red;\n    }\n    .myClass1{\n        text-align:center;\n    }\n    .myClass3{\n        font-size:20px;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ClassStyleBinding);
    return ClassStyleBinding;
}());
exports.ClassStyleBinding = ClassStyleBinding;
//# sourceMappingURL=classStyleBinding.component.js.map