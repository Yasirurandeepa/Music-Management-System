import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any[];
  studentService: StudentService;

  constructor(private router: Router, private student: StudentService) {
    this.studentService = student;
  }

  ngOnInit() {
    $('.active').removeClass('active');
    $('#studentTab').addClass('active');
    this.getStudents();
  }

  loadEnrollingDetails() {
    this.router.navigate(['enrollstudent']);
  }

  loadStudentDetail(id) {
    console.log(id);
    this.student.student_no = id;
    this.router.navigate(['student/' + id]);
  }

  editStudentDetail(id) {
    console.log(id);
    this.student.student_no = id;
    this.router.navigate(['edit_hall/' + id]);
  }

  getStudents() {
    this.student.queryStudents().subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.log(error);
      }
    );
  }

}




