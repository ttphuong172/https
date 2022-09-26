import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm=new FormGroup({
    name: new FormControl(''),
    photo: new FormControl('')
  })
  constructor(
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.studentService.save(this.studentForm.value).subscribe(
      ()=>{
        console.log("Saved")
      }
    )
  }
}
