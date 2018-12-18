import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent implements OnInit {

  @Input("listadoRecetas") recetas

  constructor() { }

  ngOnInit() {
  }

}
