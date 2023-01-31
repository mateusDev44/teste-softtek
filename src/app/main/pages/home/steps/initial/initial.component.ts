import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApplicationAccount } from 'src/app/shared/classes/ApplicationAccount';
import { Cooperated } from 'src/app/shared/classes/Cooperated';
import { CurrentAccount } from 'src/app/shared/classes/CurrentAccount';
import { CooperativeConsultationService } from 'src/app/shared/services/cooperative-consultation.service';
import { FooterService } from 'src/app/shared/services/footer.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent implements OnInit, OnDestroy {
  @ViewChild('cpfModel') cpfModel!: NgModel;
  isLoading: boolean;
  cpf: string;
  cooperated: Cooperated;
  applicationAccount: ApplicationAccount;
  currentAccount: CurrentAccount;

  CooperativeSubscription!: Subscription;
  ApplicationAccountSubscription!: Subscription;
  CurrentAccountSubscription!: Subscription;

  constructor(
    private footerService: FooterService,
    private toastService: ToastrService,
    private cooperativeService: CooperativeConsultationService
  ) {
    this.cooperated = new Cooperated();
    this.applicationAccount = new ApplicationAccount();
    this.currentAccount = new CurrentAccount();
    this.cpf = '';
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.footerService.step('initial');
  }

  public search(): void {
    // Valida o cpf inserido
    if (this.validateCpfField()) {
      this.loading(true);
      this.CooperativeSubscription = this.cooperativeService
        .listCooperated(this.cpf)
        .subscribe(
          (data) => {
            // Valida o retorno da requisição pra verificar se não retornou vazio
            if (this.validateRequestReturn(data)) {
              // Apos o retorno ser positivo inicia-se a listagem das contas de aplicação e corrente
              this.cooperated = data[0];
              this.findApplicationAccount(data[0]);
              this.findCurrentAccount(data[0]);
              this.footerService.approveStartNewAdmission(true);
              this.loading(false, 2000);
            }
          },

          (error: HttpErrorResponse) => {
            this.toastService.error(
              'Erro ao realizar a busca',
              `Erro ${error.status}`
            );
            this.loading(false);
          }
        );
    }
  }

  loading(state: boolean, time?: number) {
    setTimeout(() => {
      this.isLoading = state;
    }, time || 0);
  }

  findApplicationAccount(cooperad: Cooperated): void {
    this.ApplicationAccountSubscription = this.cooperativeService
      .listApplicationAccount(cooperad.id)
      .subscribe(
        (data) => {
          this.applicationAccount = data[0];
        },

        (error: HttpErrorResponse) => {
          this.toastService.error(
            'Erro ao realizar a busca',
            `Erro ${error.status}`
          );
          this.resetResults();
        }
      );
  }

  findCurrentAccount(cooperad: Cooperated): void {
    this.CurrentAccountSubscription = this.cooperativeService
      .listCurrentAccount(cooperad.id)
      .subscribe(
        (data) => {
          this.currentAccount = data[0];
        },
        (error: HttpErrorResponse) => {
          this.toastService.error(
            'Erro ao realizar a busca',
            `Erro ${error.status}`
          );
          this.resetResults();
        }
      );
  }

  public validateCpfField(): boolean {
    if (this.cpfModel.invalid && this.cpf.length < 11) return false;
    return true;
  }

  validateRequestReturn(res: Cooperated[]) {
    if (res.length) {
      return true;
    } else {
      this.toastService.error(
        'Não foram encontrado dados do cpf informado.',
        'Não encontrado'
      );
      this.resetResults();
      return false;
    }
  }

  resetResults() {
    this.cooperated = new Cooperated();
    this.applicationAccount = new ApplicationAccount();
    this.currentAccount = new CurrentAccount();
    this.footerService.approveStartNewAdmission(false);
    this.footerService.approveStartNewAdmission(false);
    this.loading(false);
  }

  ngOnDestroy(): void {
    this.CooperativeSubscription?.unsubscribe();
    this.ApplicationAccountSubscription?.unsubscribe();
    this.CurrentAccountSubscription?.unsubscribe();
  }
}
