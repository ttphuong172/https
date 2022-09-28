import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(
    public dialogRefDelete: MatDialogRef<StudentDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  delete() {
    this.studentService.delete(this.data).subscribe(
      ()=>{
       this.dialogRefDelete.close();
      }

    )
  }

  closeDialogDelete() {
    this.dialogRefDelete.close();
  }
}
