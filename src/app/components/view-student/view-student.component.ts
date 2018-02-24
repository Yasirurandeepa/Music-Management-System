import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  curStudent;
  studentService: StudentService;
  constructor(private router: Router, private student: StudentService) {
    this.studentService = student;
  }

  ngOnInit() {
    this.getStudent();
  }

  backStudent() {
    this.router.navigate(['student']);
  }
  getStudent() {
    this.student.getStudent({
      s_id: this.student.student_no,
    }).subscribe(
      students => {
        this.curStudent = students[0];
      },
      error => {
        console.log(error);
      }
    );
  }
  EditStudent() {
    this.router.navigate(['edit_student/:id']);
  }
  EnrollStudent() {
    this.router.navigate(['study/:id']);
  }
}
