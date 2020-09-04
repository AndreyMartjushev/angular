import { Component, OnInit } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store'
import { AddImg } from '../redux/img.action';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public favorites: [];
  public category: [];
  public fileUrl;

  ngOnInit(): void {
    this.store.select('imgPage').subscribe(({ category }) => {
      this.category = category;
    })
    
    this.store.select('imgPage').subscribe(({ favorites }) => {
      this.favorites = favorites;
    })
  }
  download(url) {
    
  };
}
