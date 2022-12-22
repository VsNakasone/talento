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
  constructor() {}

  close() {
    this.closeDetail();
  }
}
