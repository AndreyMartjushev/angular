import { Component, OnInit } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public favorites: [];
  public fileUrl;
  
  ngOnInit(): void {
    this.store.select('imgPage').subscribe(({ favorites }) => {
      this.favorites = favorites;
    })
  }
}
