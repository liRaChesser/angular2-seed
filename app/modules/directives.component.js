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
var DirectivesClass = (function () {
    function DirectivesClass() {
        this.objArray = [2, 3, 4, 5, 6];
        this.color = 'blue';
    }
    DirectivesClass.prototype.showNextColor = function (obj) {
        console.log("Showig next color");
        obj.checked = true;
        this.color = obj.value;
    };
    DirectivesClass = __decorate([
        core_1.Component({
            selector: 'directive-ex',
            template: "<ul>\n    <li *ngFor=\"let val of objArray\">\n    {{val}}</li>\n    </ul>\n    <input type=\"radio\" name=\"color\" value=\"blue\" (click)=showNextColor(blue) #blue checked=true>Blue\n    <input type=\"radio\" name=\"color\" value=\"yellow\" (click)=showNextColor(yellow) #yellow>Yellow\n    <div [ngSwitch]=color>\n    <p *ngSwitchCase=\"'blue'\" style='color:blue'> I am blue</p>\n    <p *ngSwitchCase=\"'yellow'\" style='color:yellow'> I am yellow</p>\n    <p *ngSwitchDefault>I am default black</p>\n    </div>\n    <div *ngIf=\"color=='yellow'\">Yellow Yellow dirty fellow</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DirectivesClass);
    return DirectivesClass;
}());
exports.DirectivesClass = DirectivesClass;
//# sourceMappingURL=directives.component.js.map