import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { InitialComponent } from './initial/initial.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    StepsComponent,
    InitialComponent
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    InputTextModule,
    ButtonModule
  ]
})
export class StepsModule { }
