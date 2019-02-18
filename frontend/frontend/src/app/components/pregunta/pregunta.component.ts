import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  public pregunta: any;

  constructor() {
    this.pregunta = '';
  }

  ngOnInit() {
  }

}
