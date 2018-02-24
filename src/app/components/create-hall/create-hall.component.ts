import { Component, OnInit } from '@angular/core';
import {HallService} from '../../services/hall.service';
import * as $ from 'jquery';
import {Hall} from '../../models/hall';
import {Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-hall',
  templateUrl: './create-hall.component.html',
  styleUrls: ['./create-hall.component.css']
})
export class CreateHallComponent implements OnInit {

  valSize: string;
  valDes: string;
  hallService: HallService;
  halls: Hall;


  constructor(private router: Router, private hall: HallService) {
    this.hallService = hall;
    this.halls = new Hall();
  }

  ngOnInit() {
  }

  loadMenu(tabName) {
    this.router.navigate([tabName]);
  }

  submitDetails() {
    const size = $('#size').val();
    const description = $('#description').val();
  }

  addHall() {
    if (this.validate()) {
      const size = document.forms['myForm']['size'].value;
      const description = document.forms['myForm']['description'].value;
      this.hall.insertHall({
        size: size,
        description: description
      }).subscribe(
        result => {
          console.log(result);
          this.router.navigate(['hall']);
        }, error => {
          console.log(error);
        }
      );
    }
  }
  validate() {
  this.valSize = '';
  this.valDes = '';
  const size = document.forms['myForm']['size'].value;
  const description = document.forms['myForm']['description'].value;
  if (size === '' && description === '') {
    alert('Please Enter Size and Description of the hall');
    this.valSize = 'This is a required field';
    this.valDes = 'This is a required field';
    return false;
  } else if (size === '') {
    alert('Please Enter Size of the hall');
    this.valSize = 'This is a required field';
    /*document.getElementById('size').style.borderColor = 'red';*/
    return false;
  } else if (description === '') {
    alert('Please Enter Description of the hall');
    this.valDes = 'This is a required field';
    return false;
  } else if (!/^[0-9]+$/.test(size)) {
    alert('Size is invalid');
    this.valSize = 'Invalid size';
    return false;
  } else {
    return true;
  }
  }
  backHall() {
    this.router.navigate(['hall']);
  }
}
