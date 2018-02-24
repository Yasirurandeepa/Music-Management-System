import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../services/student.service';
import {ClassService} from '../../services/class.service';
import {isUndefined} from "util";

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  cls;
  classes: any[];
  studentService: StudentService;
  classService: ClassService;
  constructor(private router: Router, private student: StudentService, private cl: ClassService) {
    this.classService = cl;
    this.studentService = student;
  }

  ngOnInit() {
    this.getClasses();
  }
  getClasses() {
    this.cl.queryClasses().subscribe(
      classes => {
        this.classes = classes;
      },
      error => {
        console.log(error);
      }
    );
  }
  enrollStudent() {
    const class_id = document.forms['EnrollForm']['class_id'].value;
    const start_date = document.forms['EnrollForm']['start_date'].value;
    this.cl.getClass({
      c_no: class_id
    }).subscribe(
      cls => {
        this.cls = cls;
        console.log(this.studentService.student_no);

        this.studentService.enrollStudent({
          class_id: class_id,
          s_id: this.studentService.student_no,
          start_date: start_date,
          total: this.cls[0].monthly_fee
        }).subscribe(
          result => {
            console.log(result);
          }, error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['student']);
  }
  backStudent() {
    this.router.navigate(['student/:id']);
  }
}
