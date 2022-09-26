import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {StudentService} from "../../../service/student.service";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {WebcamImage} from "ngx-webcam";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm = new FormGroup({
    name: new FormControl('',Validators.required),
    photo: new FormControl('',Validators.required)
  })
  private trigger: Subject<any> = new Subject();

  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();

  captureImage = '';

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  save() {
    this.studentService.save(this.studentForm.value).subscribe(
      () => {
        this.router.navigateByUrl("");
      }
    )
  }

  public triggerSnapshot(): void {
    // @ts-ignore
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.captureImage = webcamImage!.imageAsDataUrl;
    // console.info('received webcam image', this.captureImage);
    this.studentForm.controls['photo'].setValue(this.captureImage)
  }

  public get triggerObservable(): Observable<any> {

    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {

    return this.nextWebcam.asObservable();
  }
}
