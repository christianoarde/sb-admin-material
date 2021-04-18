import { Injectable } from "@angular/core";
import { StudentApi } from "../api/student.api";
import { StudentReducer } from "../reducers/student.reducer";
import { StudentStore } from "../stores/student.store";

@Injectable({
  providedIn: "root",
})

export class StudentService {

  query = {
    id_number: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    level: ''
  }

  constructor(
    private studentStore: StudentStore,
    private studentApi: StudentApi,
    private studentReducer: StudentReducer
  ) {
  }

  getAll() {
    this.studentApi.query(this.query)
      .subscribe((res) => {
        this.studentReducer.setStudentRecords(res)
      });
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