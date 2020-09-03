import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store'

import { AddImg } from '../redux/img.action';
import { AppState } from '../redux/app.state';

@Component({
  selector: 'app-output-img',
  templateUrl: './output-img.component.html',
  styleUrls: ['./output-img.component.scss']
})
export class OutputImgComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  public newImg: [];
  ngOnInit() {
    this.store.select('imgPage').subscribe(({ img }) => {
      this.newImg = img;
    })
  }
  public addFavorites(item) {
    this.store.dispatch(new AddImg(item))
  }
}