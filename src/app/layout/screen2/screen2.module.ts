import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen2Component } from './screen2.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen2RoutingModule } from './screen2-routing.module';

@NgModule({
  declarations: [Screen2Component],
  imports: [
    CommonModule,
    Screen2RoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class Screen2Module { }
