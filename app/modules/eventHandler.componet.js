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
var EventHandler = (function () {
    function EventHandler() {
        this.count = 0;
    }
    EventHandler.prototype.iAmClicked = function () {
        return ++this.count;
    };
    ;
    EventHandler.prototype.resetMe = function () {
        this.count = 0;
    };
    ;
    EventHandler.prototype.disableMe = function (obj) {
        obj.disabled = true;
        //console.log("disabled");
    };
    ;
    EventHandler.prototype.enableMe = function (obj) {
        //alert("Inside enabled");
        obj.disabled = "";
    };
    EventHandler = __decorate([
        core_1.Component({
            selector: 'event-handler',
            template: "<button (click)=\"resetMe()\">Reset</button>&nbsp;<button (click)=iAmClicked()>Click</button>\n              <span>The button is clicked {{count}} times</span>\n              <br><input type=\"text\" (focus)=\"disableMe(radioRef)\" value=\"Edit me if you can\"  #radioRef>\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], EventHandler);
    return EventHandler;
}());
exports.EventHandler = EventHandler;
//# sourceMappingURL=eventHandler.componet.js.map