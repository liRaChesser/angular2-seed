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
var PipeOperator = (function () {
    function PipeOperator() {
        this.fname = "uppercase";
    }
    PipeOperator = __decorate([
        core_1.Component({
            selector: 'pipe-operator',
            template: "<div> This value {{ fname }} was changed to {{fname|uppercase}} using pipe operator</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], PipeOperator);
    return PipeOperator;
}());
exports.PipeOperator = PipeOperator;
//# sourceMappingURL=pipe.component.js.map