"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
var user_1 = require("../../models/user");
var teacher_1 = require("../../models/teacher");
var UserdetailComponent = (function () {
    function UserdetailComponent(route, user, router) {
        this.route = route;
        this.user = user;
        this.router = router;
        this.myData = ['Database systems', 'Numerical methods for system modeling'];
        this.mySource = ['Database systems', 'Numerical methods for system modeling', 'OOP concepts', 'Signals and systems'];
        // user = null;
        // // only for development perpose
        // this.newuser = false;
        // this.teacher = false;
        // this.my = user;
        // if (user == null) {
        //   this.newuser = true;
        // }
        this.isTeacher = false;
        console.log(this.route.snapshot.params['id']);
        if (this.route.snapshot.params['id'] === 'new_user') {
            this.newuser = true;
            this.userDetail = new user_1.User(null, null, null, false);
        }
        else {
            this.newuser = false;
            // set this.teacher's value accordingly
            // disable the teacher checkbox
        }
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        $('.active').removeClass('active');
        $('#userTab').addClass('active');
    };
    UserdetailComponent.prototype.addTeacher = function () {
        this.isTeacher = !this.isTeacher;
        this.teacherDetail = new teacher_1.Teacher();
    };
    UserdetailComponent.prototype.addUser = function () {
        var password = $('#confirm_password').val();
        var usernameInfo = {};
        var queryInfo = {};
        if (this.userDetail.username !== '') {
            if (this.userDetail.name !== '') {
                if (this.userDetail.password === password) {
                    if ((password !== '') && (this.userDetail.password !== '')) {
                        if (this.isTeacher) {
                            queryInfo = { 'type': '_', 'username': this.userDetail.username, 'name': this.userDetail.name,
                                'password': this.userDetail.password, 't_id': '_',
                                'contact': this.teacherDetail.contact, 'address': this.teacherDetail.address, 'subjects': this.myData };
                            if (this.newuser) {
                                usernameInfo = { 'type': 'get_username', 'username': this.userDetail.username };
                                queryInfo['type'] = 'add_teacher';
                                queryInfo['t_id'] = 'new_id';
                            }
                            else {
                                usernameInfo = { 'type': 'get_username', 'username': this.userDetail.username,
                                    'previous': this.user.getCurrentUser().username };
                                queryInfo['type'] = 'update_teacher';
                                queryInfo['t_id'] = this.teacherDetail.t_id;
                            }
                        }
                        else {
                            queryInfo = { 'type': '_', 'username': this.userDetail.username, 'name': this.userDetail.name,
                                'password': this.userDetail.password };
                            if (this.newuser) {
                                usernameInfo = { 'type': 'get_username', 'username': this.userDetail.username };
                                queryInfo['type'] = 'add_admin';
                            }
                            else {
                                usernameInfo = { 'type': 'get_username', 'username': this.userDetail.username,
                                    'previous': this.user.getCurrentUser().username };
                                queryInfo['type'] = 'update_admin';
                            }
                        }
                        // this.user.queryUsername(usernameInfo).subscribe(
                        // names => {
                        //   this. = users;
                        // },
                        // error => {
                        //   console.log(error);
                        // }
                    }
                    else {
                        alert('password cannot be empty');
                    }
                }
                else {
                    alert('confirm your password');
                }
            }
            else {
                alert('provide name');
            }
        }
        else {
            alert('provide username');
        }
    };
    return UserdetailComponent;
}());
UserdetailComponent = __decorate([
    core_1.Component({
        selector: 'app-userdetail',
        templateUrl: './userdetail.component.html',
        styleUrls: ['./userdetail.component.css']
    })
], UserdetailComponent);
exports.UserdetailComponent = UserdetailComponent;
