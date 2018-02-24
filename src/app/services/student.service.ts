import {Inject, Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class StudentService {

  private http: Http;
  public student_no;

  constructor(private router: Router, @Inject(Http) http) {
    this.http = http;
  }
  getStudent(data) {       // get selected hall details
    return this.http.post('http://localhost:3000/get_student', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  queryStudents() {        // get every hall details
    return this.http.get('http://localhost:3000/get_students').map(res => res.json());
  }

  insertStudent(data) {         // insert hall details
    return this.http.post('http://localhost:3000/add_new_student', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  enrollStudent(data) {         // insert hall details
    return this.http.post('http://localhost:3000/enroll_student', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  updateStudent(data) {         // update hall details
    return this.http.patch('http://localhost:3000/update_student', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }


  delete_Student(data) {         // delete hall details
    return this.http.post('http://localhost:3000/remove_student', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

}
