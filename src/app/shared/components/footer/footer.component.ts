import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InitialComponent } from 'src/app/main/pages/home/steps/initial/initial.component';
import { FooterService } from '../../services/footer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  @ViewChild('initialComponent') initialComponent!: InitialComponent;
  currentStep: string;
  startNewAdmission: boolean;
  StartNewAdmissionSubscription!: Subscription;
  CurrentStepSubscription!: Subscription;

  constructor(private FooterService: FooterService) {
    this.currentStep = '';
    this.startNewAdmission = false;
  }

  ngOnInit(): void {
    this.CurrentStepSubscription =
      this.FooterService.stepsActive.subscribe((res) => (this.currentStep = res));
    this.StartNewAdmissionSubscription =
      this.FooterService.startNewAdmission.subscribe((res) => (this.startNewAdmission = res));
  }

  ngOnDestroy(): void {
    this.CurrentStepSubscription.unsubscribe();
    this.StartNewAdmissionSubscription.unsubscribe();
  }

}
