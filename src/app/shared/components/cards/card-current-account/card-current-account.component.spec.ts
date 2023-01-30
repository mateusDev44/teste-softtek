import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { CardCurrentAccountComponent } from './card-current-account.component';

describe('CardCurrentAccountComponent', () => {
  let component: CardCurrentAccountComponent;
  let fixture: ComponentFixture<CardCurrentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCurrentAccountComponent ],
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

    fixture = TestBed.createComponent(CardCurrentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
