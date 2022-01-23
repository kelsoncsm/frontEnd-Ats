import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { VagaModel } from 'src/app/model/vagaModel';
import { VagaService } from 'src/app/services/vaga.services';
import { DatePipe } from '@angular/common';
import { Util } from 'src/app/Util/util';
@Component({
  selector: 'app-list-vagas',
  templateUrl: './list-vagas.component.html',
  styleUrls: ['./list-vagas.component.css']
})
export class ListVagasComponent implements OnInit {

  pageActions: Array<PoPageAction> = [];
  itens: Array<VagaModel> = [];
  colums: Array<PoTableColumn> = [
    { property: '', width:"190px", label: '', type:'cellTemplate'},
    { property: 'id', label: 'Id', visible:false},
    { property: 'descricao', label: 'Descrição' },
    { property: 'requisitos', label: 'Requisitos' },
    { property: 'dataInicio', label: 'Data Inicio' , type:'date',format:'dd/MM/YYYY' },
    { property: 'dataFim', label: 'Data Fim' , type:'date',format:'dd/MM/YYYY'  },
    { property: 'statusDescricao', label: 'Ativo' },
  ];

  constructor(
    private router: Router,
    private vagaService: VagaService
  ) {
    this.pageActions = this.createPageAction();
  }

  ngOnInit() {
    this.vagaService.getListaVagas().subscribe((data) => {

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
      action: () => this.router.navigate(['vagas-form/0']),
    });

    return action;
  }

  removeItem(model:any){

    this.vagaService.delete(model).subscribe((data) => {
     window.location.reload();
    });

  }

}
