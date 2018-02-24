"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Teacher = (function () {
    function Teacher() {
    }
    // constructor(t_id, username, contact, address) {
    //   this.t_id = t_id;
    //   this.username = username;
    //   this.name = name;
    //   this.contact = contact;
    //   this.address = address;
    // }
    Teacher.prototype.setDetails = function (t_id, username, contact, address) {
        this.t_id = t_id;
        this.username = username;
        this.contact = contact;
        this.address = address;
    };
    Teacher.prototype.setSubjects = function (subjects) {
        this.subjects = subjects;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
