import { NgModule } from "@angular/core";

import { PainelPrincipalComponent } from "./painel-principal/painel-principal.component";
import { ContasCadastroComponent } from "./contas-cadastro/contas-cadastro.component";
import { ContasConsultaComponent } from "./contas-consulta/contas-consulta.component";

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '', component: PainelPrincipalComponent
    },
    {
        path: 'cadastrar-contas', component: ContasCadastroComponent
    },
    {
        path: 'consultar-contas', component: ContasConsultaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }