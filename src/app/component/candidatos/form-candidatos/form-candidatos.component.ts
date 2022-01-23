import { VagaService } from 'src/app/services/vaga.services';
import { CandidatoService } from './../../../services/candidato.services';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoPageAction,
  PoRadioGroupOption,
  PoSelectOption,
  PoTableColumn,
} from '@po-ui/ng-components';
import { CandidatoModel } from 'src/app/model/candidatoModel';
import { Util } from 'src/app/Util/util';
import { VagaModel } from 'src/app/model/vagaModel';
import { CandidaturaModel } from 'src/app/model/candidaturaModel';
import { CandidadaturaService } from 'src/app/services/candidatura.services';

@Component({
  selector: 'app-form-candidatos',
  templateUrl: './form-candidatos.component.html',
  styleUrls: ['./form-candidatos.component.css'],
})
export class FormCandidatosComponent implements OnInit {
  candidato: CandidatoModel = {};
  habilitaVagas: boolean = false;
  validateFields: Array<string> = [
    'nome',
    'dataNascimento',
    'sobreNome',
    'cpf',
  ];


  pageActions: Array<PoPageAction> = [];
  candidaturasAtivas: Array<CandidaturaModel> = [];
  candidaturasMinhas: Array<CandidaturaModel> = [];

  colums: Array<PoTableColumn> = [
    { property: '', width:"190px", label: '', type:'cellTemplate'},
    { property: 'id', label: 'Id', visible:false},
    { property: 'descricao', label: 'Descrição' },
    { property: 'requisitos', label: 'Requisitos' },
    { property: 'dataInicio', label: 'Data Inicio' , type:'date',format:'dd/MM/YYYY' },
    { property: 'dataFim', label: 'Data Fim' , type:'date',format:'dd/MM/YYYY'  }
  ];

  constructor(
    private route: ActivatedRoute,
    private candidatoService: CandidatoService,
    private router: Router,
    public poNotification: PoNotificationService,
    private candidaturaService : CandidadaturaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != '0') {
      this.candidatoService.readById(id).subscribe((data) => {
        data.dataCadastro = Util.FormataData(data.dataCadastro);
        this.candidato = data;
        this.habilitaVagas = true;
      });


      this.candidaturaService.getLista().subscribe((data) => {

        this.candidaturasAtivas = data;
      });

      this.candidaturaService.getListaVagasCandidatos(id).subscribe((data) => {

        this.candidaturasMinhas = data;
      });


    }
  }

  save(dados: any): void {
    if (this.route.snapshot.paramMap.get('id') == '0') {
      this.candidatoService.save(dados.value).subscribe(() => {
        this.router.navigateByUrl('candidatos-list');
      });
    } else {
      this.candidatoService.update(this.candidato).subscribe(() => {
        this.router.navigateByUrl('candidatos-list');
      });
    }
  }


  removeCandidatura(model:any){

    this.candidaturaService.update(model).subscribe(() => {
     window.location.reload();
    });

  }


  addCandidatura(model:any){

    this.candidaturaService.save(model).subscribe(() => {
     window.location.reload();
    });

  }



  fields: Array<PoDynamicFormField> = [
    {
      property: 'nome',
      divider: 'dados',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 2,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Digite seu Nome',
    },
    {
      property: 'sobreNome',
      divider: ' ',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 2,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'SobreNome',
    },
    {
      property: 'dataNascimento',
      label: 'Data Nascimento',
      type: 'date',
      format: 'dd/MM/YYYY',
      gridColumns: 2,
      gridSmColumns: 12,
      minValue: '1000-30-01',
      order: -1,
    },
    {
      property: 'email',
      divider: 'CONTACTS',
      gridColumns: 2,
      icon: 'po-icon-mail',
    },
    { property: 'telefone', mask: '(99) 99999-9999', gridColumns: 2 },
    {
      property: 'cpf',
      label: 'CPF',
      mask: '999.999.999-99',
      gridColumns: 2,
      gridSmColumns: 12,
      visible: true,
    },

    {
      divider: 'info',
      property: 'objetivo',
      label: 'Objetivo Profissional',
      gridColumns: 6,
      gridSmColumns: 12,
      rows: 5,
    },
  ];

}
