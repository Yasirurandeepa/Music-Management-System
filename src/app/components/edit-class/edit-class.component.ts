import { Component, OnInit } from '@angular/core';
import {ClassService} from '../../services/class.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  classes;
  classService: ClassService;
  constructor(private router: Router, private cl: ClassService) {
    this.classService = cl;
  }

  ngOnInit() {
  }

  updateClass() {
      const monthly_fee = document.forms['myFormEditCl']['monthly_fee'].value;
      const start_date = document.forms['myFormEditCl']['start_date'].value;
      const end_date = document.forms['myFormEditCl']['end_date'].value;
      const day = document.forms['myFormEditCl']['day'].value;
      const start_time = document.forms['myFormEditCl']['start_time'].value;
      const end_time = document.forms['myFormEditCl']['end_time'].value;
      this.cl.updateClass({
        monthly_fee: monthly_fee,
        start_date: start_date,
        end_date: end_date,
        day: day,
        start_time: start_time,
        end_time: end_time
      }).subscribe(
        result => {
          console.log(result);
          this.router.navigate(['class']);
        }, error => {
          console.log(error);
        }
      );
  }
  backClass() {
    this.router.navigate(['class']);
  }
}
