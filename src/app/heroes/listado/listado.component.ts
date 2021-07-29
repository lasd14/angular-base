import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'IronMan', 'Capitan America', 'Thor', 'Hulk'];
  heroeEliminado: string = '';

  borrarHeroe(){
    // this.heroes.splice(4);
    
    this.heroeEliminado = this.heroes.shift() || '';
  }

}
