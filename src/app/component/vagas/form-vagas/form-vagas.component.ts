import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-form-vagas',
  templateUrl: './form-vagas.component.html',
  styleUrls: ['./form-vagas.component.css']
})
export class FormVagasComponent implements OnInit {

  pageActions: Array<PoPageAction> = [];

  constructor(private router: Router) {
    this.pageActions = this.createPageAction();
  }

  ngOnInit() {

  }

  private createPageAction(): Array<PoPageAction> {
    const action: Array<PoPageAction> = [];

    action.push({
      label: 'Cancelar',
      action: () => this.router.navigate(['list-vagas']),
    });

    return action;
  }
}
