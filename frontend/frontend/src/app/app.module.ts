import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {appRoutingProviders, routing} from "./app.routing";
import { PrincipalComponent } from './components/principal/principal.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ContextoComponent } from './components/contexto/contexto.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashBoardComponent,
    ContextoComponent,
    PreguntaComponent,
    RespuestaComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
