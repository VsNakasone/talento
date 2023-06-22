import { ActivatedRoute, Router } from '@angular/router';
import { ISongDto } from './../interfaces/ISongDto';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrls: ['./songs-detail.component.css']
})
export class SongsDetailComponent {
  @Input() song!: ISongDto;
  @Input() closeDetail!:() => void;
//Aqui é onde é pego os parâmetros selecionados na URL(tela do browser)
constructor(private route: ActivatedRoute, private router: Router) {
  let idRecebido: number;
  this.route.paramMap.subscribe(params => {
    idRecebido = Number(params.get('id'));
    console.log(`Id que recebi para detalhar e atualizar as informações: ${idRecebido}`);
  });
}
close() {
  this.closeDetail();
}
}

  

