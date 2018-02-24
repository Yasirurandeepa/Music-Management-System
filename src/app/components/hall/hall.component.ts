import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HallService} from '../../services/hall.service';
import * as $ from 'jquery';
import {Hall} from '../../models/hall';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  halls: any[];
  hallService: HallService;
  selectedHall: Hall;     // to keep data of the selected hall

  constructor(private router: Router, private hall: HallService) {
    this.hallService = hall;
    this.selectedHall = new Hall();
  }

  ngOnInit() {
    $('.active').removeClass('active');
    $('#hallTab').addClass('active');
    this.getHalls();
  }


  loadHallDetail(id) {
    console.log(id);
    this.router.navigate(['hall/' + id]);
  }

  editHallDetail(id) {
    console.log(id);
    this.hall.hall_no = id;
    this.router.navigate(['edit_hall/' + id]);
  }

  getHalls() {
    this.hall.queryHalls().subscribe(
      halls => {
        this.halls = halls;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteHall(id) {
    const conf = confirm('Do you really want me to delete this record?');
    if (conf === true) {
      this.hall.delete_hall({
        h_no: id,
      }).subscribe(
        result => {
          this.getHalls();
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
