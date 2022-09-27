import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {StudentDeleteComponent} from "../student-delete/student-delete.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList:any;
  constructor(
    private studentService:StudentService,
    private matDialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(
      (data)=>{
        this.studentList=data;
      }
    )
  }


  openDialogDelete(id:any) {
    let dialogRefDelete = this.matDialog.open(StudentDeleteComponent,{
      width:'600px',
      data:id
    })
  }
}
