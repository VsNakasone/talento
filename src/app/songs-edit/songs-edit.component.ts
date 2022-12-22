import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ISongDto } from './../interfaces/ISongDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-edit',
  templateUrl: './songs-edit.component.html',
  styleUrls: ['./songs-edit.component.css']
})
export class SongsEditComponent implements OnInit{
  song!: ISongDto;
  idReceived!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.idReceived = Number(params.get('idSong'));
    });
  }

  ngOnInit(): void {
    this.song = {
      idSong: this.idReceived ?? 0,
      name: '',
      categorie:''
    }

    if (this.idReceived) {
      this.http
      .get(`https://localhost:7236/Consultar/${this.idReceived}`)
      .subscribe((data) => {
        this.song = data as ISongDto;
      });
    }
  }
  save() {
    if (this.validateInfo()) {
      console.log(`Objeto para salvar: ${JSON.stringify(this.song)}`);
      if (this.song.idSong == 0 ) {
        this.http.post(`https://localhost:7236/Cadastrar`, this.song)
        .subscribe((data) => {
          this.router.navigate(['listarSongs']);
        });
      } else {
        this.http.patch('https://localhost:7236/Editar', this.song)
        .subscribe((data) => {
          this.router.navigate(['litarSongs']);
        });
      }
    } else {
      console.log('Erro na validação');
    }
  }

  validateInfo(): boolean {
    if (this.song.name == '') {
      return false;
    }
    return true;
  }
}
