import { GetImgService } from '../../services/GetImgService';
import { AppState } from '../redux/app.state';
import { GetImg } from '../redux/img.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styles: []
})
export class SearchFormComponent implements OnInit {
 
  constructor(private getImgService: GetImgService, private store: Store<AppState>) { }
  ngOnInit(): void { }

  public searchValue = "";

  public changeInput(value): void {
    this.searchValue = value;
    console.log(value);
  }

  public getImg(): void {
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
