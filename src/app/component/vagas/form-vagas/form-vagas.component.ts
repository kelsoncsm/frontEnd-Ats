import { VagaService } from 'src/app/services/vaga.services';
import { VagaModel } from 'src/app/model/vagaModel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PoDynamicFormField, PoNotificationService, PoPageAction } from '@po-ui/ng-components';
import {formatDate} from '@angular/common';
import { Util } from 'src/app/Util/util';
@Component({
  selector: 'app-form-vagas',
  templateUrl: './form-vagas.component.html',
  styleUrls: ['./form-vagas.component.css']
})
export class FormVagasComponent implements OnInit {

  vaga:VagaModel =  {}
  validateFields: Array<string> = ['nome','dataNascimento','sobreNome','cpf'];
  constructor(private route: ActivatedRoute,private vagaService: VagaService,
    private router: Router,public poNotification: PoNotificationService) { }


  ngOnInit() {

    const id  = this.route.snapshot.paramMap.get('id');

    this.vagaService.readById(id).subscribe(data => {

      data.dataInicio = Util.FormataData(data.dataInicio)
      data.dataFim =  Util.FormataData(data.dataFim)

      this.vaga =data;
    });


  }

  cancel(){
    this.router.navigateByUrl("vagas-list");
  }

  save(dados:any): void {

    if(this.route.snapshot.paramMap.get('id') == "0"){

      this.vagaService.save(dados.value).subscribe(() => {
        this.router.navigateByUrl("vagas-list");
      });

    }else{

      this.vagaService.update(this.vaga).subscribe(() => {
        this.router.navigateByUrl("vagas-list");
      });

    }


  }


  fields: Array<PoDynamicFormField> = [
    {
      property: 'descricao',
      divider: 'dados',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 2,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Descrição da Vaga',
    },

    {
      property: 'dataInicio',
      label: 'Data Inicio',
      type: 'date',
      format: 'dd/MM/YYYY',
      gridColumns: 2,
      gridSmColumns: 12,
      minValue: '1000-30-01',
      order: -1,
    }, {
      property: 'dataFim',
      label: 'Data Fim',
      type: 'date',
      format: 'dd/MM/YYYY',
      gridColumns: 2,
      gridSmColumns: 12,
      minValue: '1000-30-01',
      order: -1,
    },

    {
      divider: 'info',
      property: 'requisitos',
      label: 'Requisitos',
      gridColumns: 6,
      gridSmColumns: 12,
      rows: 5,
    },
  ];


}

