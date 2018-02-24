import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {

  valName: string;
  valDob: string;
  valContact: string;
  valAddress: string;
  studentService: StudentService;

  constructor(private router: Router, private student: StudentService) {
    this.studentService = student;
  }

  ngOnInit() {
  }

  addStudent() {
    if (this.validate()) {
      const name = document.forms['studentForm']['name'].value;
      const dob = document.forms['studentForm']['dob'].value;
      const contact = document.forms['studentForm']['contactnum'].value;
      const address = document.forms['studentForm']['address'].value;
      this.studentService.insertStudent({
        name: name,
        contact: contact,
        address: address,
        dob: dob
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

  backStudent() {
    this.router.navigate(['student']);
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
