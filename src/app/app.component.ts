import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'alurapic';

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {
    photoService
      .listFromUser('flavio')
      .subscribe((photos) => (this.photos = photos));
  }
}
