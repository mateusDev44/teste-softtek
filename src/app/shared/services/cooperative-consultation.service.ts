import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cooperated } from '../classes/Cooperated';
import { ApplicationAccount } from '../classes/ApplicationAccount';
import { CurrentAccount } from '../classes/CurrentAccount';

@Injectable({
  providedIn: 'root',
})
export class CooperativeConsultationService {
  private url = environment.api;

  constructor(private httpService: HttpClient) {}

  listCooperated(cpf: string): Observable<Cooperated[]> {
    return this.httpService.get<Cooperated[]>(`${this.url}/cooperated?cpf=${cpf}`);
  }

  listApplicationAccount(id: number): Observable<ApplicationAccount[]>{
    return this.httpService.get<ApplicationAccount[]>(`${this.url}/applicationAccount?cooperatedId=${id}`);
  }

  listCurrentAccount(id: number): Observable<CurrentAccount[]>{
    return this.httpService.get<CurrentAccount[]>(`${this.url}/CurrentAccount?cooperatedId=${id}`);
  }

}
