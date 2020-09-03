import { Component, OnInit } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store'
import { AddImg } from '../redux/img.action';


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
      console.log(this.newImg);
    })

  }
  public addFavorites(item) {
    this.store.dispatch(new AddImg(item))
  }

}
