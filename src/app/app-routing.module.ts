import { SongsListComponent } from './songs-list/songs-list.component';
import { TarefasDetalheComponent } from './tarefas-detalhe/tarefas-detalhe.component';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'lista', component: TarefasListaComponent},
  //Aqui é passado o caminho para que tarefa-detalhe.components consiga entender a rota
  {path: 'detalhe/:id', component: TarefasDetalheComponent},
  {path: 'listarsongs', component: SongsListComponent},
  {path: '**', redirectTo: 'lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
