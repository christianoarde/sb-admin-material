import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentsRoutingModule } from './students-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    TranslateModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class StudentsModule { }
