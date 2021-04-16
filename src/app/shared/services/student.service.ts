import { Injectable } from "@angular/core";
import { StudentStore } from "../stores/student.store";

@Injectable({
  providedIn: "root",
})

export class StudentService {

  constructor(
    private studentStore: StudentStore
  ) {
  }

  setDisplayColumns() {
    const default_student = this.studentStore.currentStudent.value
    const columns = []
    if (!default_student) { return }

    Object.entries(default_student).forEach(
      ([key]) => {
        columns.push(key)
      });
    return columns
  }

}