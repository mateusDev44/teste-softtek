import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import { CardCadastralSituationComponent } from './cards/card-cadastral-situation/card-cadastral-situation.component';
import { CardApplicationAccountComponent } from './cards/card-application-account/card-application-account.component';
import { CardCurrentAccountComponent } from './cards/card-current-account/card-current-account.component';
import {CardModule} from 'primeng/card';
import { PipesModule } from '../pipes/pipes.module';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CardCadastralSituationComponent,
    CardApplicationAccountComponent,
    CardCurrentAccountComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    PipesModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CardCadastralSituationComponent,
    CardApplicationAccountComponent,
    CardCurrentAccountComponent
  ]
})
export class ComponentsModule { }
