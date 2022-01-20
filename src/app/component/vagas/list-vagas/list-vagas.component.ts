import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { VagaModel } from 'src/app/model/vagaModel';
import { VagaService } from 'src/app/services/vaga.services';

@Component({
  selector: 'app-list-vagas',
  templateUrl: './list-vagas.component.html',
  styleUrls: ['./list-vagas.component.css']
})
export class ListVagasComponent implements OnInit {

  pageActions: Array<PoPageAction> = [];
  itens: Array<VagaModel> = [];
  colums: Array<PoTableColumn> = [
    { property: 'descricao', label: 'Descrição' },
    { property: 'requisitos', label: 'Requisitos' },
    { property: 'dataInicio', label: 'Data Inicio' , type:'date',format:'dd/mm/yyyy' },
    { property: 'dataFim', label: 'Data Fim' , type:'date',format:'dd/mm/yyyy'  },
    { property: 'statusDescricao', label: 'Ativo' },
  ];


  constructor(
    private router: Router,
    private candidaoService: VagaService
  ) {
    this.pageActions = this.createPageAction();
  }

  ngOnInit() {
    this.candidaoService.getListaVaga().subscribe((data) => {

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
      action: () => this.router.navigate(['form-vagas']),
    });

    return action;
  }
}
