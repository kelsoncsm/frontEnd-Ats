import { CandidatoService } from './../../../services/candidato.services';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoPageAction
} from '@po-ui/ng-components';
import { CandidatoModel } from 'src/app/model/candidatoModel';

@Component({
  selector: 'app-form-candidatos',
  templateUrl: './form-candidatos.component.html',
  styleUrls: ['./form-candidatos.component.css'],
})
export class FormCandidatosComponent implements OnInit {

  candidato:CandidatoModel = {};
  validateFields: Array<string> = ['nome','dataNascimento','sobreNome','cpf'];
  constructor(private route: ActivatedRoute,private candidatoService: CandidatoService,
    private router: Router,public poNotification: PoNotificationService) { }


  ngOnInit() {

    const id  = this.route.snapshot.paramMap.get('id');

    this.candidatoService.readById(id).subscribe(data => {
      this.candidato = data
    });
  }

  save(dados:any): void {

    if(this.route.snapshot.paramMap.get('id') == "0"){

      this.candidatoService.save(dados.value).subscribe(() => {
        this.router.navigateByUrl("candidatos-list");
      });

    }else{

      this.candidatoService.update(this.candidato).subscribe(() => {
        this.router.navigateByUrl("candidatos-list");
      });

    }


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
      format: 'dd/mm/yyyy',
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

