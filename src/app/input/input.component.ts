import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css']
})

export class InputComponent {
  @Input() voto: string;          // Se usa el decorator @Input() para declarar que tendremos un input del tipo string de nombre voto

  @Output() addVoto = new EventEmitter<string>();    // Indicamos que nuestro componente tendrá un eventemitter que regresa un string


  constructor() {
    console.log('estoy entrando');  // Hacemos un console.log() para asegurar que entramos a un componente
  }

  votar(): void {
    this.addVoto.emit(this.voto);     // Entonces lo se que va a emitir es el string que tenga voto
  }


}

