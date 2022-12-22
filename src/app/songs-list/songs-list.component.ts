import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ISongDto } from '../interfaces/ISongDto';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent {
  listarSongs: ISongDto[] = [];
  selectedSong!: ISongDto;
  telaParaApresentar = 'lista';

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
