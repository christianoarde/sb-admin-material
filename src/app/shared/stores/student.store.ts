import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Student } from "../models/student"

@Injectable({
  providedIn: "root",
})

export class StudentStore {
  
  public studentRecords: BehaviorSubject<Student[]>;
  public currentStudent: BehaviorSubject<Student>;

  constructor() {
    this.studentRecords = new BehaviorSubject([]);
    this.currentStudent = new BehaviorSubject(this.defaultStudent());
  }

  defaultStudent() {
    return {
      id_number: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      level: ''
    }
  }

}