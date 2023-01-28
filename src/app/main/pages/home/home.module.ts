import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {StepsModule} from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { InitialComponent } from './steps/initial/initial.component';
import { RouterModule } from '@angular/router';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ComponentsModule } from 'src/app/shared/components/components.module';


const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [
    HomeComponent,
    InitialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StepsModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(maskConfig),
    ComponentsModule
  ]
})
export class HomeModule { }
