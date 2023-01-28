import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModel } from '@angular/forms';
import { CooperativeConsultationService } from 'src/app/shared/services/cooperative-consultation.service';
import { FooterService } from 'src/app/shared/services/footer.service';
import { HomeComponent } from '../../home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InitialComponent } from './initial.component';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IndividualConfig, ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Cooperated } from 'src/app/shared/classes/Cooperated';
import { BehaviorSubject, Observable, of } from 'rxjs';

fdescribe('InitialComponent', () => {
  let component: InitialComponent;
  let fixture: ComponentFixture<InitialComponent>;
  let originalTimeout: number;
  let footerService: jasmine.SpyObj<FooterService>;
  let cooperativeService: CooperativeConsultationService;
  let cooperativeServiceMock: CooperativeConsultationService;
  let toastrService: ToastrService;
  let spyCooperatedList: jasmine.Spy<() => Observable<Cooperated[]>>;


  class ToasterStub {
    showSuccess(message: string, title: string): void {}
    showError(message: string, title: string): void {}
    showInfo(message: string, title: string): void {}
    showWarning(message: string, title: string): void {}
  }

  const cooperatedListMock: Cooperated[] = [
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
      situation: 0,
    },
  ];

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, InitialComponent, NgModel],
      providers: [
        HomeComponent,
        HttpClientTestingModule,
        CooperativeConsultationService,
        FooterService,
        ToastrService,
        { provide: HttpClient, useValue: HttpClientTestingModule },
        { provide: LocationStrategy, useClass: MockLocationStrategy },
        { provide: FooterService, useClass: footerService },
        { provide: ToastrService, useClass: toastrService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        NgxMaskModule.forRoot(),
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
      ],
    })
      .compileComponents()
      .then(async () => {
        fixture = TestBed.createComponent(InitialComponent);
        component = fixture.componentInstance;
        cooperativeService = TestBed.inject(CooperativeConsultationService);
        cooperativeServiceMock = TestBed.inject(CooperativeConsultationService);
        toastrService = TestBed.inject(ToastrService);
        spyCooperatedList = spyOn(
          cooperativeServiceMock,
          'listCooperated'
        ).and.returnValue(of(cooperatedListMock));
      });
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform a search', () => {
    const cpf = '59251792500';
    return cooperativeService.listCooperated(cpf)?.subscribe((data) => {
      const returnArray: Cooperated[] = data;
      expect(data).toBeDefined();
      expect(returnArray).toEqual(cooperatedListMock);
    });
  });
});
