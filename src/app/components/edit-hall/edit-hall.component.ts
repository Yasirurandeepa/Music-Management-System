import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HallService} from '../../services/hall.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-hall',
  templateUrl: './edit-hall.component.html',
  styleUrls: ['./edit-hall.component.css']
})
export class EditHallComponent implements OnInit {

  halls;
  valSize: string;
  valDes: string;
  hallService: HallService;
  constructor(private router: Router, private hall: HallService) {
    this.hallService = hall;
  }

  ngOnInit() {
    this.getHall();
  }

  updateHall() {
    console.log(this.halls);
    if (this.validate()) {
      const size = $('#size').val();
      const description = $('#description').val();
      this.hall.updateHall({
        size: size,
        description: description,
        h_no: this.hall.hall_no
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

  getHall() {
    this.hall.getHall({
      h_no: this.hall.hall_no,
    }).subscribe(
      halls => {
        this.halls = halls[0];
      },
      error => {
        console.log(error);
      }
    );
  }
  validate() {
    this.valSize = '';
    this.valDes = '';
    const size = document.forms['myFormEdit']['size'].value;
    const description = document.forms['myFormEdit']['description'].value;
    if (size === '' && description === '') {
      alert('Please Enter Size and Description of the hall');
      this.valSize = 'This is a required field';
      this.valDes = 'This is a required field';
      return false;
    } else if (size === '') {
      alert('Please Enter Size of the hall');
      this.valSize = 'This is a required field';
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
