import { Injectable } from '@angular/core';
import { Conta } from '../_models/conta.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(
    private httpClient: HttpClient //injeção de dependência
  ) { }

  post(conta: Conta) {
    return this.httpClient.post(environment.apiUrl + "/contas", conta);
  }
}
