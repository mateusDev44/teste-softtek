import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { StepsComponent } from './steps.component';

const routes: Routes = [
  {
    path: '',
    component: StepsComponent,
    children: [{ path: 'inicial', component: InitialComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsRoutingModule {}
