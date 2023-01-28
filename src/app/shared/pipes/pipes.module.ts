import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyDigitPipe } from './agency-digit.pipe';



@NgModule({
  declarations: [
    AgencyDigitPipe
  ],
  imports: [CommonModule],
  exports: [AgencyDigitPipe]
})
export class PipesModule { }
