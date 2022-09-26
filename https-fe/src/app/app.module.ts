import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HttpClientModule} from "@angular/common/http";
import { StudentAddComponent } from './student/student-add/student-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {WebcamModule} from "ngx-webcam";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"",component:StudentListComponent},
      {path:"add",component:StudentAddComponent}
    ]),
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
