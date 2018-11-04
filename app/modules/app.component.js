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
var directives_component_1 = require('./directives.component');
var inputOutput_component_1 = require('./inputOutput.component');
var pipe_component_1 = require('./pipe.component');
var tdform_component_1 = require('./tdform.component');
var mdforms_component_1 = require('./mdforms.component');
var emp_service_1 = require('./emp.service');
var empHttp_service_1 = require('./empHttp.service');
var AppComponent = (function () {
    function AppComponent(empService, _empHttpService) {
        this.empService = empService;
        this._empHttpService = _empHttpService;
        this.showBasicTutorial = "tdf";
        this.employees = [];
        this.employeesHttp = [];
    }
    AppComponent.prototype.toggleView = function (value) {
        this.showBasicTutorial = value;
    };
    AppComponent.prototype.checkMe = function (obj) {
        if (obj.value === this.showBasicTutorial) {
            obj.checked = true;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employees = this.empService.getEmployees();
        this._empHttpService.getEmployees().subscribe(function (empRes) { return _this.employeesHttp = empRes; }, function (error) {
            _this.employeesHttp = [];
            console.log("Error from main component-" + error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Angular2 Application</h1>\n            <angular-tutorial></angular-tutorial>\n            <input type=\"radio\" value=\"basic\" name=\"radioObj\" #basicObj [checked]=\"checkMe(basicObj)\" (click)=\"toggleView(basicObj.value)\">Basic Tutorial\n            <input type=\"radio\" value=\"tdf\" #tdfObj name=\"radioObj\" [checked]=\"checkMe(tdfObj)\" (click)=\"toggleView(tdfObj.value)\">Template Driven Forms\n            <input type=\"radio\" value=\"mdf\" #mdfObj name=\"radioObj\" [checked]=\"checkMe(mdfObj)\" (click)=\"toggleView(mdfObj.value)\">Model Driven Forms\n            <input type=\"radio\" value=\"serWithInj\" #serObj name=\"radioObj\" [checked]=\"checkMe(serObj)\" (click)=\"toggleView(serObj.value)\">Services with Injection\n            <input type=\"radio\" value=\"serWithInjHttp\" #serHttpObj name=\"radioObj\" [checked]=\"checkMe(serHttpObj)\" (click)=\"toggleView(serHttpObj.value)\">Services with Http\n            <br>\n            <br>\n            <div *ngIf=\"showBasicTutorial=='basic'\">\n            <br><style-eg></style-eg>\n            <br><intProp-eg></intProp-eg>\n            <br><clsStyle-bind></clsStyle-bind>\n            <event-handler></event-handler>\n            <br><two-way></two-way><br>\n            <directive-ex></directive-ex>\n            Data to child <input type=\"text\" #pText (keyup)=\"0\">\n            <div> Data from child {{childData}} </div>\n            <child [parentData]=\"pText.value\" (evnt)=\"childData=$event \"></child>\n            <pipe-operator></pipe-operator>\n            </div>\n            <div *ngIf=\"showBasicTutorial=='tdf'\">\n            <tdf-form></tdf-form>\n            </div>\n            <div *ngIf=\"showBasicTutorial=='mdf'\">\n            <mdf-form></mdf-form>\n            </div>\n            <div *ngIf=\"showBasicTutorial=='serWithInj'\">\n              Employees list below\n              <ul>\n                <li *ngFor=\"let employee of employees\">{{employee.id}}</li>\n              </ul>\n            </div>\n            <div *ngIf=\"showBasicTutorial=='serWithInjHttp'\">\n            Employees list below\n            <ul>\n              <li *ngFor=\"let employee of employeesHttp\">{{employee.id}}</li>\n            </ul>\n          </div>\n            ",
            directives: [angularTutorial_component_1.AngularTutorial, firstStyles_component_1.FirstStyles, interPolPropBinding_component_1.InterPolPropBinding, classStyleBinding_component_1.ClassStyleBinding,
                twoWayBinding_component_1.TwoWayBinding, eventHandler_componet_1.EventHandler, directives_component_1.DirectivesClass, inputOutput_component_1.InputOutputComponent, pipe_component_1.PipeOperator, tdform_component_1.TDForms,
                mdforms_component_1.MDForms],
            providers: [emp_service_1.EmpService, empHttp_service_1.EmpHttpService],
            styles: ["h1{\n    text-align:center;\n  }"]
        }), 
        __metadata('design:paramtypes', [emp_service_1.EmpService, empHttp_service_1.EmpHttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map