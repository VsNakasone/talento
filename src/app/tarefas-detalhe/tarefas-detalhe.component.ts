import { ITarefaDto } from './../interfaces/ITarefaDto';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.component.html',
  styleUrls: ['./tarefas-detalhe.component.css']
})
export class TarefasDetalheComponent {
  tarefaDto: ITarefaDto = { id: 0, nome: '' };

  AtualizarTarefa() {
    // atualizar a informação
    // redirecionar para tela de lista
    this.router.navigate(['lista']);
  }

  //Aqui é onde é pego os parâmetros selecionados na URL(tela do browser)
  constructor(private route: ActivatedRoute, private router: Router) {
    let idRecebido: number;
    this.route.paramMap.subscribe(params => {
      idRecebido = Number(params.get('id'));
      console.log(`Id que recebi para detalhar e atualizar as informações: ${idRecebido}`);
    });
  }
}
