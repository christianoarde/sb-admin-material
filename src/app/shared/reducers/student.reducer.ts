import { Injectable } from "@angular/core";
import { StudentStore } from "../stores/student.store";

@Injectable({
  providedIn: "root",
})

export class StudentReducer {
 
  constructor(
    private studentStore: StudentStore
  ) {

  }

  setStudentRecords(obj) {
    this.studentStore.studentRecords.next(obj)
  }
}