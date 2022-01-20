
import { ListVagasComponent } from './component/vagas/list-vagas/list-vagas.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { FormVagasComponent } from './component/vagas/form-vagas/form-vagas.component';
import { HomeComponent } from './component/home/home.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { CommonModule } from '@angular/common';
import { ListCandidatosComponent } from './component/candidatos/list-candidatos/list-candidatos.component';
import { FormCandidatosComponent } from './component/candidatos/form-candidatos/form-candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ListVagasComponent,
    FormVagasComponent,
    HomeComponent,
    ListCandidatosComponent,
    FormCandidatosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
