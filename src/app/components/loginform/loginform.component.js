"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginformComponent = (function () {
    function LoginformComponent(router, user, route) {
        this.router = router;
        this.user = user;
        this.route = route;
        this.userService = user;
        this.message = 'Welcome Back';
    }
    LoginformComponent.prototype.onSubmit = function (username, password) {
        var _this = this;
        // implement the user type part of the page
        // if (this.user.logIn(username, password, )) {
        //   this.router.navigate(['invoice']);
        // }else {
        //   // cannot login
        // }
        // this.user.logIn(username, password, function(loggedIn, error){
        //   if (loggedIn) {
        //     this.router.navigate(['invoice']);
        //   }else {
        //     console.log(error);
        //     // this is for implementation details . afterwards remove error variable and use proper message to the user
        //   }
        // });
        this.user.queryUser(username, password).subscribe(function (users) {
            var user = _this.userService.getCurrentUser();
            user.setUserDetail(users[0].username, users[0].password, users[0].name, true);
            console.log(_this.userService.getCurrentUser());
            _this.router.navigate(['invoice']);
        }, function (error) {
            console.log(error);
            _this.message = 'Try Again !';
        });
    };
    LoginformComponent.prototype.ngOnInit = function () {
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    core_1.Component({
        selector: 'app-loginform',
        templateUrl: './loginform.component.html',
        styleUrls: ['./loginform.component.css']
    })
], LoginformComponent);
exports.LoginformComponent = LoginformComponent;
