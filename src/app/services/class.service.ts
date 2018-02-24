import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class ClassService {

  private http: Http;
  public class_no;
  constructor(private router: Router, @Inject(Http) http) {
    this.http = http;
  }

  getClass(data) {       // get selected hall details
    return this.http.post('http://localhost:3000/get_class', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  queryClasses() {        // get every hall details
    return this.http.get('http://localhost:3000/get_classes').map(res => res.json());
  }

  insertClass(data) {         // insert hall details
    return this.http.post('http://localhost:3000/add_new_class', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  updateClass(data) {         // update hall details
    return this.http.patch('http://localhost:3000/update_class', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  delete_class(data) {         // delete hall details
    return this.http.post('http://localhost:3000/remove_class', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
}
