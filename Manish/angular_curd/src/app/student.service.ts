import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  insert(myForm:any){
   return this.http.post('http://localhost:3000/student',myForm);
  }

}
