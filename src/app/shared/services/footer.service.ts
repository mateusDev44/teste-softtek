import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private stepsControls = new BehaviorSubject('');
  public stepsActive = this.stepsControls.asObservable();
  public startNewAdmission = new EventEmitter<boolean>(false);

  constructor() {}

  step(sptep: string) {
    this.stepsControls.next(sptep);
  }

  approveStartNewAdmission(value: boolean) {
    this.startNewAdmission.emit(value);
  }
}
