import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../services/student.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentService: StudentService;
  students;
  valName: string;
  valDob: string;
  valContact: string;
  valAddress: string;
  constructor(private router: Router, private student: StudentService) {
    this.studentService = student;
  }

  ngOnInit() {
    this.getStudent();
  }

  updateStudent() {
    if (this.validate()) {
      console.log(this.students);
      const name = $('#name').val();
      const dob = $('#dob').val();
      const address = $('#address').val();
      const contact = $('#contactnum').val();
      this.student.updateStudent({
        name: name,
        contact: contact,
        address: address,
        dob: dob,
        s_id: this.student.student_no
      }).subscribe(
        result => {
          console.log(result);
          this.router.navigate(['student']);
        }, error => {
          console.log(error);
        }
      );
    }
  }
  getStudent() {
    this.student.getStudent({
      s_id: this.student.student_no,
    }).subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.log(error);
      }
    );
  }
  backStudent(id) {
    this.router.navigate(['student/:id']);
  }

  validate() {
    this.valName = '';
    this.valDob = '';
    this.valContact = '';
    this.valAddress = '';
    const name = document.forms['studentForm']['name'].value;
    const dob = document.forms['studentForm']['dob'].value;
    const contact = document.forms['studentForm']['contactnum'].value;
    const address = document.forms['studentForm']['address'].value;
    if (name === '' && dob === '' && contact === '' && address === '') {
      alert('Please fill the neccessary information');
      this.valName = 'This is a required field';
      this.valDob = 'This is a required field';
      this.valContact = 'This is a required field';
      this.valAddress = 'This is a required field';
      return false;
    } else if (name === '' && dob === '' && contact === '') {
      alert('Please fill the neccessary information');
      this.valName = 'This is a required field';
      this.valDob = 'This is a required field';
      this.valContact = 'This is a required field';
      return false;
    } else if (name === '' && dob === '' && address === '') {
      alert('Please fill the neccessary information');
      this.valName = 'This is a required field';
      this.valDob = 'This is a required field';
      this.valAddress = 'This is a required field';
      return false;
    } else if (contact === '' && dob === '' && address === '') {
      alert('Please fill the neccessary information');
      this.valContact = 'This is a required field';
      this.valDob = 'This is a required field';
      this.valAddress = 'This is a required field';
      return false;
    } else if (name === '' && dob === '') {
      alert('Please fill the neccessary information');
      this.valName = 'This is a required field';
      this.valDob = 'This is a required field';
      return false;
    } else if (name === '' && contact === '') {
      alert('Please fill the neccessary information');
      this.valName = 'This is a required field';
      this.valContact = 'This is a required field';
      return false;
    } else if (name === '' && address === '') {
      alert('Please fill the neccessary information');
      this.valName = 'This is a required field';
      this.valAddress = 'This is a required field';
      return false;
    } else if (dob === '' && contact === '') {
      alert('Please fill the neccessary information');
      this.valDob = 'This is a required field';
      this.valContact = 'This is a required field';
      return false;
    } else if (dob === '' && address === '') {
      alert('Please fill the neccessary information');
      this.valDob = 'This is a required field';
      this.valAddress = 'This is a required field';
      return false;
    } else if (contact === '' && address === '') {
      alert('Please fill the neccessary information');
      this.valDob = 'This is a required field';
      this.valContact = 'This is a required field';
      return false;
    } else if (name === '') {
      alert('Please Enter Name of the student');
      this.valName = 'This is a required field';
      return false;
    } else if (dob === '') {
      alert('Please Enter birth of the student');
      this.valDob = 'This is a required field';
      return false;
    } else if (contact === '') {
      alert('Please Enter contact of the student');
      this.valContact = 'This is a required field';
      return false;
    } else if (address === '') {
      alert('Please Enter address of the student');
      this.valAddress = 'This is a required field';
      return false;
    } else if (!/^[0-9]+$/.test(contact) || contact.length !== 10) {
      alert('Contact is invalid');
      this.valContact = 'Invalid contact';
      return false;
    } else {
      return true;
    }
  }
}
