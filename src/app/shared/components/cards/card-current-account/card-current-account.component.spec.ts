import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCurrentAccountComponent } from './card-current-account.component';

describe('CardCurrentAccountComponent', () => {
  let component: CardCurrentAccountComponent;
  let fixture: ComponentFixture<CardCurrentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCurrentAccountComponent ]
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
