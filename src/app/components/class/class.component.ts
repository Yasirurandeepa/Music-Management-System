import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {ClassService} from '../../services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classes: any[];
  classService: ClassService;
  constructor(private router: Router, private cl: ClassService) {
    this.classService = cl;
  }
  ngOnInit() {
    $('.active').removeClass('active');
    $('#classTab').addClass('active');
    this.getClasses();
  }

  loadClassDetail(id) {
    this.router.navigate(['class/' + id]);
  }

  editClassDetail(id) {
    console.log(id);
    this.cl.class_no = id;
    this.router.navigate(['edit_class/' + id]);
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
  deleteClass(id) {
    const conf = confirm('Do you really want me to delete this record?');
    if (conf === true) {
      this.cl.delete_class({
        c_no: id
      }).subscribe(
        result => {
          this.getClasses();
        }, error => {
          console.log(error);
        }
      );
    }
  }


}
