import { CommonModule, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { Observable, of } from 'rxjs';
import { Cooperated } from 'src/app/shared/classes/Cooperated';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CooperativeConsultationService } from 'src/app/shared/services/cooperative-consultation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockLocationStrategy } from '@angular/common/testing';
import { InitialComponent } from './initial.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationAccount } from 'src/app/shared/classes/ApplicationAccount';
import { CurrentAccount } from 'src/app/shared/classes/CurrentAccount';

describe('InitialComponent', () => {
  let component: InitialComponent;
  let fixture: ComponentFixture<InitialComponent>;
  let originalTimeout: number;
  let spyCooperated: jasmine.Spy<() => Observable<Cooperated[]>>;
  let spyCurrentAccount: jasmine.Spy<() => Observable<CurrentAccount[]>>;
  let spyApplicationAccount: jasmine.Spy<() => Observable<ApplicationAccount[]>>;
  let cooperativeConsultationService: CooperativeConsultationService;
  let cooperativeConsultationServiceMock: CooperativeConsultationService;
  let toastrService: ToastrService;

  const cooperatedMock: Cooperated[] = [
    {
      id: 1,
      name: 'Laís Isabella Ribeiro',
      age: 20,
      cpf: '59251792500',
      birthDate: '06/01/2003',
      sexo: 'Feminino',
      email: 'laisisabellaribeiro@konzeption.com.br',
      zipCode: '69008414',
      phone: '92997091050',
      situation: 1,
    },
  ];

  const applicationAccountMock: ApplicationAccount[] = [
    {
      id: 1,
      currentAccount: '377622',
      agency: '7815',
      bank: 'Itaú',
      cooperatedId: 1,
    },
  ];

  const currentAccountMock: CurrentAccount[] = [
    {
      id: 1,
      currentAccount: '461643837',
      agency: '3340',
      bank: 'Santander',
      cooperatedId: 1,
    },
  ];
  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitialComponent],
      providers: [
        HttpClientTestingModule,
        CooperativeConsultationService,
        { provide: HttpClient, useValue: HttpClientTestingModule },
        { provide: LocationStrategy, useClass: MockLocationStrategy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
        HttpClientModule,
        FormsModule,
        CommonModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        StepsModule,
        InputTextModule,
        ButtonModule,
        InputMaskModule,
        RouterModule,
        NgxMaskModule.forRoot(),
        ComponentsModule,
      ],
    })
      .compileComponents()
      .then(async () => {
        fixture = TestBed.createComponent(InitialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        cooperativeConsultationService = TestBed.inject(
          CooperativeConsultationService
        );
        cooperativeConsultationServiceMock = TestBed.inject(
          CooperativeConsultationService
        );
        toastrService = TestBed.inject(ToastrService);
        spyCooperated = spyOn(
          cooperativeConsultationServiceMock,
          'listCooperated'
        ).and.returnValue(of(cooperatedMock));
        spyApplicationAccount = spyOn(
          cooperativeConsultationServiceMock,
          'listApplicationAccount'
        ).and.returnValue(of(applicationAccountMock));
        spyCurrentAccount = spyOn(
          cooperativeConsultationServiceMock,
          'listCurrentAccount'
        ).and.returnValue(of(currentAccountMock));
      });
    fixture.detectChanges();
  });

  afterEach(() => {
    spyOn(component, 'ngOnDestroy').and.callFake(() => {});
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it('should list application account', () => {
    const spy = spyOn(toastrService, 'error').and.callThrough();
    component.findApplicationAccount(cooperatedMock[0])
    fixture.detectChanges();

    expect(component.applicationAccount).toEqual(applicationAccountMock[0]);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should list current account', () => {
    const spy = spyOn(toastrService, 'error').and.callThrough();
    component.findCurrentAccount(cooperatedMock[0])
    fixture.detectChanges();

    expect(component.currentAccount).toEqual(currentAccountMock[0]);
    expect(spy).not.toHaveBeenCalled();
  });


  it('should list current account', () => {
    const spyFindApplicationAccount = spyOn(component, 'findApplicationAccount').and.callThrough();
    const spFyindCurrentAccount = spyOn(component, 'findCurrentAccount').and.callThrough();
    component.cpf = '59251792500';
    component.search();

    return fixture.whenStable().then(async () => {
      fixture.detectChanges();
      expect(component.cooperated).toEqual(cooperatedMock[0]);
      expect(spyFindApplicationAccount).toHaveBeenCalled();
      expect(spFyindCurrentAccount).toHaveBeenCalled();
    });

  });
});
