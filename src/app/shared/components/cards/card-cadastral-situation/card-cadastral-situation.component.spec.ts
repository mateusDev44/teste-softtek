import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastralSituationComponent } from './card-cadastral-situation.component';

describe('CardCadastralSituationComponent', () => {
  let component: CardCadastralSituationComponent;
  let fixture: ComponentFixture<CardCadastralSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastralSituationComponent ]
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
