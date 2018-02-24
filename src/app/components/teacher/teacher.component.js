"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TeacherComponent = (function () {
    function TeacherComponent(router) {
        this.router = router;
    }
    TeacherComponent.prototype.ngOnInit = function () {
        $('.active').removeClass('active');
        $('#teacherTab').addClass('active');
    };
    TeacherComponent.prototype.goToInvoice = function () {
        var t_no = '150000T';
        this.router.navigate(['teacher/' + t_no]);
    };
    return TeacherComponent;
}());
TeacherComponent = __decorate([
    core_1.Component({
        selector: 'app-teacher',
        templateUrl: './teacher.component.html',
        styleUrls: ['./teacher.component.css']
    })
], TeacherComponent);
exports.TeacherComponent = TeacherComponent;
