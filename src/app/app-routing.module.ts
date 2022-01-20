import { ListCandidatosComponent } from './component/candidatos/list-candidatos/list-candidatos.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { FormVagasComponent } from './component/vagas/form-vagas/form-vagas.component';
import { ListVagasComponent } from './component/vagas/list-vagas/list-vagas.component';
import { FormCandidatosComponent } from './component/candidatos/form-candidatos/form-candidatos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'candidatos-list', component: ListCandidatosComponent },
  { path: "candidatos-form/:id", component: FormCandidatosComponent },
  { path: 'list-vagas', component: ListVagasComponent },
  { path: 'form-vagas', component: FormVagasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
