import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {UserService} from './services/user.service';
import {AuthenticationGuard} from './services/authentication.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserComponent } from './components/user/user.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {HttpModule} from '@angular/http';
import { HallComponent } from './components/hall/hall.component';
import { CreateHallComponent } from './components/create-hall/create-hall.component';
import { ClassComponent } from './components/class/class.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherDetailComponent } from './components/teacher-detail/teacher-detail.component';
import { StudentComponent } from './components/student/student.component';
import { EnrollStudentComponent } from './components/enroll-student/enroll-student.component';
import {HallService} from './services/hall.service';
import { EditHallComponent } from './components/edit-hall/edit-hall.component';
import {ClassService} from './services/class.service';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import {StudentService} from './services/student.service';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudyComponent } from './components/study/study.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'user', component: UserComponent},
    {path: 'user/:id', component: UserdetailComponent},
    {path: 'hall', component: HallComponent},
    {path: 'hall/:id', component: CreateHallComponent},
    {path: 'edit_hall/:id', component: EditHallComponent},
    {path: 'class', component: ClassComponent},
    {path: 'class/:id', component: CreateClassComponent},
    {path: 'edit_class/:id', component: EditClassComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'teacher/:no', component: TeacherDetailComponent},
    {path: 'student', component: StudentComponent},
    {path: 'student/:id', component: ViewStudentComponent},
    {path: 'study/:id', component: StudyComponent},
    {path: 'edit_student/:id', component: EditStudentComponent},
    {path: 'enrollstudent', component: EnrollStudentComponent},
  ]},
  {path: 'login', component: LoginformComponent},
  {path: 'login/:username', component: LoginformComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    UserComponent,
    UserdetailComponent,
    HomeComponent,
    CreateHallComponent,
    HallComponent,
    ClassComponent,
    CreateClassComponent,
    TeacherComponent,
    TeacherDetailComponent,
    StudentComponent,
    EnrollStudentComponent,
    EditHallComponent,
    EditClassComponent,
    ViewStudentComponent,
    EditStudentComponent,
    StudyComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    NguiAutoCompleteModule,
    HttpModule
  ],
  providers: [UserService, AuthenticationGuard, HallService, ClassService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
