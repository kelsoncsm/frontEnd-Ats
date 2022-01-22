import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';

import { CandidaturaModel } from 'src/app/model/candidaturaModel';
import { CandidadaturaService } from 'src/app/services/candidatura.services';

@Component({
  selector: 'app-list-candidatos',
  templateUrl: './list-candidatos.component.html',
  styleUrls: ['./list-candidatos.component.css'],
})
export class ListCandidaturaComponent implements OnInit {
  pageActions: Array<PoPageAction> = [];
  itens: Array<CandidaturaModel> = [];
  colums: Array<PoTableColumn> = [
    { property: 'id', label: 'Id', visible:false},
    { property: 'nome', label: 'Nome' },
    { property: 'descricao', label: 'Vaga' },
    { property: 'dataInicio', label: 'Inicio Vaga' , type:'date',format:'dd/MM/YYYY' },
    { property: 'dataFim', label: 'Fim  Vaga' , type:'date',format:'dd/MM/YYYY'  }
  ];

  // getListaCandidato

  constructor(
    private router: Router,
    private candidadaturaService: CandidadaturaService
  ) {
  }

  ngOnInit() {
    this.candidadaturaService.getLista().subscribe((data) => {
      this.itens =data;
    });
  }



}
