import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';

import { CandidaturaModel } from 'src/app/model/candidaturaModel';
import { CandidatoService } from 'src/app/services/candidato.services';
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
    { property: '', label: 'Info', type:'cellTemplate' },
    { property: 'id', label: 'Id', visible:false},
    { property: 'nome', label: 'Nome' },
    { property: 'sobreNome', label: 'SobreNome' },
    { property: 'telefone', label: 'Telefone' },
    { property: 'email', label: 'Email' },
    { property: 'dataNascimento', label: 'Data Nascimento' , type:'date',format:'dd/MM/YYYY' },
    { property: 'dataCadastro', label: 'Data Cadastro' , type:'date',format:'dd/MM/YYYY'  },
    { property: 'statusDescricao', label: 'Ativo' },
  ];

  // getListaCandidato

  constructor(
    private router: Router,
    private candidadaturaService: CandidadaturaService
  ) {
  }

  ngOnInit() {
    this.candidadaturaService.getLista().subscribe((data) => {

      console.log(data);
      data.forEach(element => {
        element.statusDescricao = element.isAtivo == true ? 'Sim' : 'Não';
      });

      this.itens =data;
    });
  }



}
