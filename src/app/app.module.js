"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var loginform_component_1 = require("./components/loginform/loginform.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var user_service_1 = require("./services/user.service");
var authentication_guard_1 = require("./services/authentication.guard");
var notfound_component_1 = require("./components/notfound/notfound.component");
var user_component_1 = require("./components/user/user.component");
var userdetail_component_1 = require("./components/userdetail/userdetail.component");
var home_component_1 = require("./components/home/home.component");
var supplier_component_1 = require("./components/supplier/supplier.component");
var invoicedetail_component_1 = require("./components/invoicedetail/invoicedetail.component");
var forms_1 = require("@angular/forms");
var auto_complete_1 = require("@ngui/auto-complete");
var http_1 = require("@angular/http");
var hall_component_1 = require("./components/hall/hall.component");
var create_hall_component_1 = require("./components/create-hall/create-hall.component");
var class_component_1 = require("./components/class/class.component");
var create_class_component_1 = require("./components/create-class/create-class.component");
var teacher_component_1 = require("./components/teacher/teacher.component");
var teacher_detail_component_1 = require("./components/teacher-detail/teacher-detail.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, children: [
            { path: 'supplier', component: supplier_component_1.SupplierComponent },
            { path: 'user', component: user_component_1.UserComponent },
            { path: 'user/:id', component: userdetail_component_1.UserdetailComponent },
            { path: 'hall', component: hall_component_1.HallComponent },
            { path: 'hall/:id', component: create_hall_component_1.CreateHallComponent },
            { path: 'class', component: class_component_1.ClassComponent },
            { path: 'class/:id', component: create_class_component_1.CreateClassComponent },
            { path: 'teacher', component: teacher_component_1.TeacherComponent },
            { path: 'teacher/:no', component: teacher_detail_component_1.TeacherDetailComponent },
        ] },
    { path: 'login', component: loginform_component_1.LoginformComponent },
    { path: 'login/:username', component: loginform_component_1.LoginformComponent },
    { path: '**', component: notfound_component_1.NotfoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            loginform_component_1.LoginformComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            notfound_component_1.NotfoundComponent,
            user_component_1.UserComponent,
            userdetail_component_1.UserdetailComponent,
            home_component_1.HomeComponent,
            supplier_component_1.SupplierComponent,
            invoicedetail_component_1.InvoicedetailComponent,
            create_hall_component_1.CreateHallComponent,
            hall_component_1.HallComponent,
            class_component_1.ClassComponent,
            create_class_component_1.CreateClassComponent,
            teacher_component_1.TeacherComponent,
            teacher_detail_component_1.TeacherDetailComponent,
        ],
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            auto_complete_1.NguiAutoCompleteModule,
            http_1.HttpModule
        ],
        providers: [user_service_1.UserService, authentication_guard_1.AuthenticationGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
