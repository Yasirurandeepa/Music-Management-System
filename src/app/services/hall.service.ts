import {Inject, Injectable} from '@angular/core';
import {Hall} from '../models/hall';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {ajaxPatch} from 'rxjs/observable/dom/AjaxObservable';


@Injectable()
export class HallService {

  private currentHall: Hall;
  private http: Http;
  public hall_no;

  constructor(private router: Router, @Inject(Http) http) {
    this.currentHall = new Hall();
    this.http = http;
  }

  getHall(data) {       // get selected hall details
    return this.http.post('http://localhost:3000/get_hall', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  queryHalls() {        // get every hall details
    return this.http.get('http://localhost:3000/get_halls').map(res => res.json());
  }

  insertHall(data) {         // insert hall details
    return this.http.post('http://localhost:3000/add_new_hall', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  updateHall(data) {         // update hall details
    return this.http.patch('http://localhost:3000/update_hall', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }


  delete_hall(data) {         // delete hall details
    return this.http.post('http://localhost:3000/remove_hall', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
}



