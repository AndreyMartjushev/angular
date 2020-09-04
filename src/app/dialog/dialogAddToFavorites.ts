import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { AppState } from '../redux/app.state';
import { AddImg } from '../redux/img.action';
import { newCategory } from '../redux/category.action';

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialogAddToFavorites.html',
  styleUrls: ['./dialogAddToFavorites.scss']
})
export class DialogAddToFavorites {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private store: Store<AppState>) { }

  public category: [];
  public currentCategory = "other";
  public itemSave: {};
  public newCategory: string;

  ngOnInit() {
    this.store.select('imgPage').subscribe(({ category }) => {
      this.category = category;
    })

    this.itemSave = Object.assign({}, this.data);
    this.itemSave.category = this.currentCategory;
  }
  onChange(event) {
    this.currentCategory = event.target.options[event.target.options.selectedIndex].value;
    this.itemSave.category = this.currentCategory;
  }

  public addFavorites() {
    this.store.dispatch(new AddImg(this.itemSave))
  }
  public changeInputNewCategory(value): void {
    this.newCategory = value;
  }
  public addNewCategory() {
    if (this.newCategory) {
      this.store.dispatch(new newCategory(this.newCategory))
    }
  }

}