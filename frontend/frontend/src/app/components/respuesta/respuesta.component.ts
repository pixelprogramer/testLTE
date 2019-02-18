import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  public listRespuestas: Array<any>;
  public respuesta: Array<any>;

  constructor() {
    this.listRespuestas = [];
    this.respuesta = [];
  }

  ngOnInit() {
  }

  responder(respuesta) {
    this.iniRespuesta();
    respuesta.respondio = true;
    this.respuesta = this.listRespuestas;
  }

  iniRespuesta() {
    for (let i = 0; i < this.listRespuestas.length; i++) {
      this.listRespuestas[i].respondio = false;
    }
  }
}
