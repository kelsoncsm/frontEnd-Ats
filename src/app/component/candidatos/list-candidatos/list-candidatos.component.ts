import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { CandidatoModel } from 'src/app/model/candidatoModel';
import { CandidatoService } from 'src/app/services/candidato.services';

@Component({
  selector: 'app-list-candidatos',
  templateUrl: './list-candidatos.component.html',
  styleUrls: ['./list-candidatos.component.css'],
})
export class ListCandidatosComponent implements OnInit {
  pageActions: Array<PoPageAction> = [];
  itens: Array<CandidatoModel> = [];
  colums: Array<PoTableColumn> = [
    { property: '', label: 'Info', type:'cellTemplate' },
    { property: 'nome', label: 'Nome' },
    { property: 'sobreNome', label: 'SobreNome' },
    { property: 'telefone', label: 'Telefone' },
    { property: 'email', label: 'Email' },
    { property: 'dataNascimento', label: 'Data Nascimento' , type:'date',format:'dd/mm/yyyy' },
    { property: 'dataCadastro', label: 'Data Cadastro' , type:'date',format:'dd/mm/yyyy'  },
    { property: 'statusDescricao', label: 'Ativo' },
  ];

  // getListaCandidato

  constructor(
    private router: Router,
    private candidaoService: CandidatoService
  ) {
    this.pageActions = this.createPageAction();
  }

  ngOnInit() {
    this.candidaoService.getListaCandidato().subscribe((data) => {

      console.log(data);
      data.forEach(element => {
        element.statusDescricao = element.isAtivo == true ? 'Sim' : 'Não';
      });

      this.itens =data;
    });
  }

  private createPageAction(): Array<PoPageAction> {
    const action: Array<PoPageAction> = [];

    action.push({
      label: 'Novo',
      action: () => this.router.navigate(['candidatos-form/0']),
    });

    return action;
  }

  removeItem(model:any){

    this.candidaoService.delete(model).subscribe((data) => {
     window.location.reload();
    });

  }

}
