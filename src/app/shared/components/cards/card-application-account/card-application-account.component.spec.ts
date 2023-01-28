import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApplicationAccountComponent } from './card-application-account.component';

describe('CardApplicationAccountComponent', () => {
  let component: CardApplicationAccountComponent;
  let fixture: ComponentFixture<CardApplicationAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardApplicationAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardApplicationAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
