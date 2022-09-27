import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(
    public dialogRefDelete: MatDialogRef<StudentDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
