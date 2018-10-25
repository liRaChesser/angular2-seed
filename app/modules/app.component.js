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
var angularTutorial_component_1 = require('./angularTutorial.component');
var firstStyles_component_1 = require('./firstStyles.component');
var interPolPropBinding_component_1 = require('./interPolPropBinding.component');
var classStyleBinding_component_1 = require('./classStyleBinding.component');
var eventHandler_componet_1 = require('./eventHandler.componet');
var twoWayBinding_component_1 = require('./twoWayBinding.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Angular2 Application</h1>\n            <angular-tutorial></angular-tutorial>\n            <br><style-eg></style-eg>\n            <br><intProp-eg></intProp-eg>\n            <br><clsStyle-bind></clsStyle-bind>\n            <event-handler></event-handler>\n            <br><two-way></two-way>",
            directives: [angularTutorial_component_1.AngularTutorial, firstStyles_component_1.FirstStyles,
                interPolPropBinding_component_1.InterPolPropBinding, classStyleBinding_component_1.ClassStyleBinding,
                eventHandler_componet_1.EventHandler, twoWayBinding_component_1.TwoWayBinding],
            styles: ["h1{\n    text-align:center;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map