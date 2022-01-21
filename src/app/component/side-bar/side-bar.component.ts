import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent  {


  constructor(private router:Router){

  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action:() => this.router.navigate(['home']) },
    { label: 'Candidatos', action:() => this.router.navigate(['candidatos-list']) },
    { label: 'Vagas', action:() => this.router.navigate(['vagas-list']) },
    { label: 'Candidaturas', action:() => this.router.navigate(['candidatura-list']) },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
