import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContasService } from '../_services/contas.service';

@Component({
  selector: 'app-contas-cadastro',
  templateUrl: './contas-cadastro.component.html',
  styleUrls: ['./contas-cadastro.component.css']
})
export class ContasCadastroComponent implements OnInit {

  message: string = "";
  isLoading: boolean = false;

  constructor(
    private contasService: ContasService
  ) { }

  formCadastro = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150)
    ]),
    valor: new FormControl('', [
      Validators.required
    ]),
    dataHora: new FormControl('', [
      Validators.required
    ]),
    categoria: new FormControl('', [
      Validators.required
    ])
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  ngOnInit(): void {
  }

  clearMessage(): void {
    this.message = "";
  }

  onSubmit(): void {

    this.isLoading = true;

    this.clearMessage();
    const conta = this.formCadastro.value;

    this.contasService.post(conta)
      .subscribe( //retorna o promisse (callback) da api
        (data: any) => { //resposta de sucesso!

          this.message = data.message;
          this.formCadastro.reset();

          this.isLoading = false;
        },
        (e: any) => { //resposta de erro!
          this.message = e.error;
          this.isLoading = false;
        }
      )
  }

}
