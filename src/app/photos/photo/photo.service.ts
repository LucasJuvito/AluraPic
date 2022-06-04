import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PhotoArray {
  allowComments: boolean;
  comments: number;
  description: string;
  id: number;
  likes: number;
  postDate: string;
  url: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<PhotoArray[]>('http://localhost:3000/flavio/photos');
  }
}
