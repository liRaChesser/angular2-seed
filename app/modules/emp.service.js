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
var EmpService = (function () {
    function EmpService() {
        this.employees = [];
        this.employees = [
            { fname: "Test1", lname: "TestL1", id: 1 },
            { fname: "Test2", lname: "TestL2", id: 2 },
            { fname: "Test3", lname: "TestL3", id: 3 },
            { fname: "Test4", lname: "TestL4", id: 4 },
            { fname: "Test5", lname: "TestL5", id: 5 },
            { fname: "Test6", lname: "TestL6", id: 6 }
        ];
    }
    EmpService.prototype.getEmployees = function () {
        return this.employees;
    };
    EmpService.prototype.getEmpDetail = function (id) {
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var emp = _a[_i];
            if (emp['id'] === id) {
                return emp;
            }
        }
    };
    EmpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmpService);
    return EmpService;
}());
exports.EmpService = EmpService;
//# sourceMappingURL=emp.service.js.map