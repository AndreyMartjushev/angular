import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

import { GetImgService } from '../../services/GetImgService';
import { AppState } from '../redux/app.state';
import { GetImg, ClearOutputImg } from '../redux/img.action';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  constructor(private getImgService: GetImgService, private store: Store<AppState>) { }
  ngOnInit(): void { }

  public searchValue: string = "";

  public changeInput(value): void {
    this.searchValue = value;
  }

  public getImg(): void {
    this.store.dispatch(new ClearOutputImg([]))
    this.getImgService
      .getData(this.searchValue)
      .subscribe(
        (value) => {
          this.store.dispatch(new GetImg(value.hits))
        },
        (error) => {
          throw error;
        }
      )
  }
}
