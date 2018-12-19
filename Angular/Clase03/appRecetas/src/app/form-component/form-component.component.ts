import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  @Output() onAgregar = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  imagen: string

  agregarReceta(titulo: string, ingredientes: string, preparacion: string, tiempo: number) {

    const receta = { titulo, ingredientes, preparacion, tiempo, foto: this.imagen }
    this.onAgregar.emit(receta)
    //this.recetas.push(receta)

    this.imagen = undefined

    //console.log(this.recetas.length)
  }

  seleccionarImagen(evt) {

    //console.log(evt.target.files[0])

    const fs: FileReader = new FileReader()

    fs.onloadend = (resultado) => {
      this.imagen = (resultado.currentTarget as FileReader).result as string
      //this.imagen = imagen
      //console.log(imagen)
    }

    /*fs.onloadend = function (resultado) {
      const imagen = (resultado.currentTarget as FileReader).result
      console.log(imagen)
    }*/

    fs.readAsDataURL(evt.target.files[0])
  }

}
