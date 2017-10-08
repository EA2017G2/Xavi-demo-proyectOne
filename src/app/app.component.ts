import { Component } from '@angular/core';  // importamos la funcionalidad de componente
import {InputComponent} from './input/input.component';
import {TicketService} from './services/ticket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({                                // Este annotation nos ayuda a la configuración del componente, entre ellos:
  selector: 'app-root',                     // En que selector se va a renderizar
  templateUrl: './app.component.html',      // En que ruta esta su template
  styleUrls: ['./app.component.css']        // En que ruta se encuentra su hoja de estilos
})
export class AppComponent {                 // La clase que vamos a exportar le dará vida a nuestros componente, podemos tener incluso variables y
  title = 'EA demo';                            // funciones queramos usar en nuestros HTML ya montado
  votacion = '';
  tickets: any;
  myForm: FormGroup;

  constructor(private ticketService: TicketService,
              private fb: FormBuilder,
              private router: Router
  ) {   // declaro que sera un inyectable en ticketservice
    this.tickets = ticketService.getTickets();          // llamo a la funcion gettickets
    this.myForm = fb.group({
      'name': ['Xavi'],
      'apellido': ['Rins']
    });
  }

  votos = [
    {title : 'Opción 1'},
    {title : 'Opción 2'},
    {title : 'Opción 3'},
    {title : 'Opción 4'}
  ];

  cantidad= 5; // para pipes
  factor= 1;   // para pipes


  onSubmit(value:string): void {
    console.log('El formulario tiene', value);
  }

  addVoto(response: string) {
    this.votacion = 'usted eligio: ' + response;
  }

  verTicket(id:number): void {
    this.router.navigate(['/ticket', id ]);
  }

}


