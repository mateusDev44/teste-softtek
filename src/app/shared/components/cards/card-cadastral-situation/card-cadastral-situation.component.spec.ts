import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { CardCadastralSituationComponent } from './card-cadastral-situation.component';

describe('CardCadastralSituationComponent', () => {
  let component: CardCadastralSituationComponent;
  let fixture: ComponentFixture<CardCadastralSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastralSituationComponent ],
      imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        PipesModule,
        BadgeModule,
        AvatarModule,
        AvatarGroupModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastralSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
