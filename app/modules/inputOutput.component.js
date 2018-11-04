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
var InputOutputComponent = (function () {
    function InputOutputComponent() {
        this.evnt = new core_1.EventEmitter();
    }
    InputOutputComponent.prototype.emitThis = function (obj) {
        this.evnt.emit(obj.value);
    };
    InputOutputComponent = __decorate([
        core_1.Component({
            selector: 'child',
            template: "<div>Data from parent component {{parentData}}</div>\n    <div>\n    Input to parent data <input type=\"text\" (keyup)=\"emitThis(childToParent)\" #childToParent>\n    </div>",
            inputs: ['parentData'],
            outputs: ['evnt']
        }), 
        __metadata('design:paramtypes', [])
    ], InputOutputComponent);
    return InputOutputComponent;
}());
exports.InputOutputComponent = InputOutputComponent;
//# sourceMappingURL=inputOutput.component.js.map