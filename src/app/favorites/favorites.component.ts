import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fileSaver from 'file-saver';

import { DownloadService } from '../../services/downloadService';
import { AppState } from '../redux/app.state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor(private store: Store<AppState>, private fileService: DownloadService) { }

  public favorites: [];
  public category: [];
  public fileUrl: string;

  ngOnInit(): void {
    this.store.select('imgPage').subscribe(({ category }) => {
      this.category = category;
    })

    this.store.select('imgPage').subscribe(({ favorites }) => {
      this.favorites = favorites;
    })
  }
  download(url) {
    this.fileService.downloadFile(url).subscribe(response => {
      let blob: any = new Blob([response], { type: 'image/jpeg; charset=utf-8' });
      fileSaver.saveAs(blob, 'file.jpeg');
    })
  };
}
