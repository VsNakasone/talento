import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TarefasDetalheComponent } from './tarefas-detalhe/tarefas-detalhe.component';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongsEditComponent } from './songs-edit/songs-edit.component';
import { SongsDetailComponent } from './songs-detail/songs-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TarefasDetalheComponent,
    TarefasListaComponent,
    SongsListComponent,
    SongsEditComponent,
    SongsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
