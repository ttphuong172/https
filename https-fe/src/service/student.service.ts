import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient:HttpClient
  ) { }
  findAll(){
    return this.httpClient.get('http://localhost:8081/api/students')
  }
  save(student:any){
    return this.httpClient.post('http://localhost:8081/api/students',student)
  }
  delete(id:any){
    return this.httpClient.delete('http://localhost:8081/api/students/' + id);
  }
}
