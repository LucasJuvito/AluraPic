import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
