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
var InterPolPropBinding = (function () {
    function InterPolPropBinding() {
        this.dataBinding = "My First Property Data binding using Interpolation";
        this.imgUrl = "http://lorempixel.com/400/200";
        this.imgUrlAlt = "I am a image";
    }
    InterPolPropBinding = __decorate([
        core_1.Component({
            selector: 'intProp-eg',
            template: "<div>{{dataBinding}}</div>\n              <p style=\"font-size:bold\">Image from a server using property databinding[]</p>\n              <br><img [src]=\"imgUrl\" [alt]=\"imgUrlAlt\"/>",
            styles: ["div{\n        color:purple;\n    }"]
        }), 
        __metadata('design:paramtypes', [])
    ], InterPolPropBinding);
    return InterPolPropBinding;
}());
exports.InterPolPropBinding = InterPolPropBinding;
//# sourceMappingURL=interPolPropBinding.component.js.map