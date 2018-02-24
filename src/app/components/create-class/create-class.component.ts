import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClassService} from '../../services/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  classService: ClassService;
  constructor(private router: Router, private cl: ClassService) {
    this.classService = cl;
  }

  ngOnInit() {
  }

  loadMenu(tabName) {
    this.router.navigate([tabName]);
  }
  addClass() {
      const monthly_fee = document.forms['myFormClass']['monthly_fee'].value;
      const start_date = document.forms['myFormClass']['start_date'].value;
      const end_date = document.forms['myFormClass']['end_date'].value;
      const day = document.forms['myFormClass']['day'].value;
      const start_time = document.forms['myFormClass']['start_time'].value;
      const end_time = document.forms['myFormClass']['end_time'].value;
      this.classService.insertClass({
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
