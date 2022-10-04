import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  myForm:FormGroup;
  constructor(private fb:FormBuilder,private service:StudentService) {
    this.myForm=this.fb.group({
      studentName:['',Validators.required],
      studentLastName:['',Validators.required],
      rollNo:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.value);

    this.service.insert(this.myForm.value).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);

      }
    )
  }

}
