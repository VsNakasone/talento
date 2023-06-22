import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { ISongDto } from '../interfaces/ISongDto';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css'],
  animations: [trigger("moveInLeft", [transition("void=> *", [style({ transform: "translateX(300px)" }), animate(200, keyframes([style({ transform: "translateX(300px)" }), style({ transform: "translateX(0)" })]))]),
  transition("*=>void", [style({ transform: "translateX(0px)" }), animate(100, keyframes([style({ transform: "translateX(0px)" }), style({ transform: "translateX(300px)" })]))])])
  ]
})

export class SongsListComponent {
  listarSongs: ISongDto[] = [];
  selectedSong!: ISongDto;
  listSongTipada: ISongDto[] = [];
  idBancoFake: number = 1;
  telaParaApresentar = 'lista';
  songNameModel: string = '';
  @ViewChild("song") inputSongName!: ElementRef;

  addSong(valor: string) {

    this.listSongTipada.push({ idSong: this.idBancoFake, name: valor, artist: valor});

    this.idBancoFake++;
    console.log(`Adicionando a tarefa: ${valor}`);
    console.log(`Indice da tarefa: ${this.idBancoFake}`);

    this.songNameModel = '';
    this.inputSongName.nativeElement.focus();
  }
  removerSong(id: number) {
    for (let i = 0; i < this.listSongTipada.length; i++) {
      if (id == this.listSongTipada[i].idSong) {
        this.listSongTipada.splice(i, 1);
        console.log(`Removendo tarefa pelo id: ${id}`);
      }
    }
  }
  constructor(private http: HttpClient, private router: Router){
    this.listAll();
  }

  listAll(){
    this.http.get('https://localhost:7236/ListarTodos')
    .pipe(
      map((response:any) => {
        return Object.values(response);
      })
    )
    .subscribe((data) => {
      for (let index = 0; index < data.length; index++) {
        let conteudoJson: any = data[index];
        let conteudoTipoTemp: ISongDto = conteudoJson as ISongDto;
        this.listarSongs.push(conteudoTipoTemp);
      }

    });
  }
  detail(id: number) {
    this.telaParaApresentar = 'detalhe';

    for (let i = 0; i < this.listarSongs.length; i++) {
      if (id == this.listarSongs[i].idSong) {
        this.selectedSong = this.listarSongs[i];
        break
      }
    }
  }
  closeDetail = () => {
    this.telaParaApresentar = 'lista';
  }
  removeSong(idSong:number){
    console.log(idSong);
    this.http.delete( `https://localhost:7236/Delete?id=${idSong}`)
    .subscribe((data)=>{
     console.log(`Linhas executadas no método remover do banco ${JSON.stringify(data)}`);
     this.listAll();
    });

  }
  editSong(idSong: number) {
    this.router.navigate([`editSong/${idSong}`]);
  }
}
