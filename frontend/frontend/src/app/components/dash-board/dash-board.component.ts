import {Component, OnInit, ViewChild} from '@angular/core';
import {GetBookService} from "../../service/get-book.service";
import {ContextoComponent} from "../contexto/contexto.component";
import {PreguntaComponent} from "../pregunta/pregunta.component";
import {RespuestaComponent} from "../respuesta/respuesta.component";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  providers: [GetBookService]
})
export class DashBoardComponent implements OnInit {
  public title: any;
  public listPreguntas: any;
  public indexActual: any;
  public htmlElemet: HTMLElement;

  constructor(private _getBookService: GetBookService) {
    this.title = '';
    this.listPreguntas = [];
    this.indexActual = 0;
  }

  @ViewChild(ContextoComponent) viewContexComponent: ContextoComponent;
  @ViewChild(PreguntaComponent) viewPreguntaComponent: PreguntaComponent;
  @ViewChild(RespuestaComponent) viewRespuestaComponent: RespuestaComponent;


  ngOnInit() {
    this.listBooks();
  }

  listBooks() {
    this._getBookService.getBook().subscribe(
      returned => {
        this.title = returned.libro;
        this.listPreguntas = returned.preguntas;
        this.cargarPregunta(this.listPreguntas[this.indexActual], this.indexActual);
      }, error2 => {

      }
    )
  }

  cargarPregunta(preguntas, index) {
    this.indexActual = index;
    this.viewContexComponent.contex = preguntas.contexto;
    this.viewPreguntaComponent.pregunta = preguntas.pregunta;
    this.viewRespuestaComponent.listRespuestas = preguntas.respuestas;
    this.validarPosicion();
  }

  siguientePregunta() {
    if (this.indexActual < this.listPreguntas.length - 1) {
      if (this.viewRespuestaComponent.respuesta.length > 0) {
        this.listPreguntas[this.indexActual].respuestas = this.viewRespuestaComponent.respuesta;
        this.viewRespuestaComponent.respuesta = [];
      }
      this.indexActual++;
      this.cargarPregunta(this.listPreguntas[this.indexActual], this.indexActual);
    } else {
      console.log(this.listPreguntas);
      let totalBuenas = 0;
      for (let i = 0; i < this.listPreguntas.length; i++) {
        for (let n = 0; n < this.listPreguntas[i].respuestas.length; n++) {
          if (this.listPreguntas[i].respuestas[n].correcta == true &&
            this.listPreguntas[i].respuestas[n].respondio == true) {
            totalBuenas++;
          }
        }
      }
      alert('Total buenas: ' + totalBuenas + '\n Total malas: ' + (this.listPreguntas.length - totalBuenas));
    }
    this.validarPosicion();
    console.log(this.listPreguntas);
  }

  validarPosicion() {
    if (this.listPreguntas.length - 1 == this.indexActual) {
      document.getElementsByName('btnSiguiente').item(0).textContent = 'Terminar Taller';
      document.getElementsByName('btnSiguiente').item(1).textContent = 'Terminar Taller';
    } else {
      document.getElementsByName('btnSiguiente').item(0).textContent = 'Siguiente pregunta';
      document.getElementsByName('btnSiguiente').item(1).textContent = 'Siguiente pregunta';
    }
  }

}
