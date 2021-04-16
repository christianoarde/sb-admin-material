import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentStore } from 'src/app/shared/stores/student.store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { StudentService } from '../../shared/services/student.service'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
  selector: 'app-student',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit, OnDestroy {

  _unsubscribeAll = new Subject();
  displayedColumns;
  dataSource;
  
  constructor(
    private studentStore: StudentStore,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.setDisplayColumns()
    this.subToSingletons()
  }

  subToSingletons() {
    this.studentStore.studentRecords
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource(res)
      })
  }

  setDisplayColumns() {
    this.displayedColumns = this.studentService.setDisplayColumns()
  }

  ngOnDestroy() {
    this._unsubscribeAll.next()
    this._unsubscribeAll.complete()
  }

}
