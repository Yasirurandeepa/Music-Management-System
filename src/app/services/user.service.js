"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../models/user");
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUser = new user_1.User(null, null, null, false);
    }
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    UserService.prototype.queryUser = function (username, password) {
        // this.http.post('http://localhost/back_End/controllers/user.php/', {'username': username, 'password': password})
        //   .map(res => res.json())
        //   .subscribe(
        //     function(users) {
        //       this.currentUser = users[0];
        //       this.currentUser.isUserLoggedIn = true;
        //       action(true, null);
        //     },
        //     function(error) {
        //       action(false, error);
        //     });
        return this.http.post('http://localhost/back_End/controllers/user.php/', { 'type': 'get_user', 'username': username, 'password': password })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.queryUsers = function () {
        return this.http.post('http://localhost/back_End/controllers/user.php/', { 'type': 'get_*_users' })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.queryUsername = function (usernameInfo) {
        return this.http.post('http://localhost/back_End/controllers/user.php/', usernameInfo)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
