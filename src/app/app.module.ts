import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

import { ConversorPipe } from './pipes/conversor.pipe';
import { AsdfComponentComponent } from './asdf-component/asdf-component.component';
import { HighlightDirective} from './directives/highlight.directive';
import { GigantDirective} from './directives/gigant.directive';
import { TicketService } from './services/ticket.service';
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';
import { PageNotFoundComponent } from './pageNotFound/page.not.found.component';
import {InitComponent } from './init.component';
import { TicketDetail } from './tickets/ticket.detail';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    AsdfComponentComponent,
    HighlightDirective,
    GigantDirective,
    PageNotFoundComponent,
    InitComponent,
    TicketDetail,
    MyNewComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APPROUTER),
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
