import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recetas: Array<{ titulo: string, ingredientes: string, preparacion: string, tiempo: number, foto: string }> = []

  imagen: string

  agregar(receta) {
    this.recetas.push(receta)
  }

  eliminarAlmuerzo(recetasToDelete) {
    console.log('Elimando almuerzo.')
    for (let index = 0; index < recetasToDelete.length; index++) {
      this.recetas.splice(recetasToDelete[index],1)      
    }
  }

}
