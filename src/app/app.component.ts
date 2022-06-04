import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface PhotoArray {
  allowComments: boolean;
  comments: number;
  description: string;
  id: number;
  likes: number;
  postDate: string;
  url: string;
  userId: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'alurapic';
  // photos = [
  //   {
  //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
  //     description: 'Leão',
  //   },
  //   {
  //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
  //     description: 'Leoa',
  //   },
  // ];

  photos: PhotoArray[] = [];

  constructor(http: HttpClient) {
    http.get<PhotoArray[]>('http://localhost:3000/flavio/photos').subscribe(
      (photos) => {
        console.log(photos);
        this.photos = photos;
      }
      // (err) => {
      //   console.error(err.message);
      // }
    );
  }
}
