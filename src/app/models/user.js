"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(username, password, name, loggedIn) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.isUserLoggedIn = loggedIn;
    }
    User.prototype.setUserDetail = function (username, password, name, loggedIn) {
        this.isUserLoggedIn = loggedIn;
        this.username = username;
        this.name = name;
        this.password = password;
    };
    return User;
}());
exports.User = User;
