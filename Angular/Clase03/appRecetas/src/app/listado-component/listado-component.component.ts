import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent implements OnInit {

  @Input("listadoRecetas") recetas
  @Output()  onEliminar = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  eliminarAlmuerzo(){
    console.log("Eliminar almuezon in list component.")
    
    this.onEliminar.emit(this.recetasToDelete)
  }

  recetasToDelete: Array<BigInteger> = []
  getIndexAlmuerzo(evt){
    console.log("processing recetas to delete")
    const checkedval:Boolean = evt.target.checked
    const recetaindex:BigInteger = evt.target.name
    if (checkedval){
      this.recetasToDelete.push(recetaindex)
    }else{
      const indexx:number=this.recetasToDelete.indexOf(recetaindex)
      this.recetasToDelete.splice(indexx,1)
    }
    console.log(evt)
    
  }

}
