import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumService } from '../core/services/album.service';
import { Disc } from './../../model/disc';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  discs: Array<Disc> = [];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() { }


  async onSearch(evt) {
    this.discs = [];
    let albums: any = await this.albumService.search(evt.srcElement.value).toPromise();
    albums = albums.topalbums.album;

    albums.forEach(album => {
      let disc = new Disc();
      disc.title = album.name;
      disc.artist = album.artist.name;
      disc.image = album.image[3]['#text'];
      this.discs.push(disc);
    });

  }


}
