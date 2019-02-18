import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contexto',
  templateUrl: './contexto.component.html',
  styleUrls: ['./contexto.component.css']
})
export class ContextoComponent implements OnInit {
  public contex: any;

  constructor() {
    this.contex = '';
  }

  ngOnInit() {
  }

}
